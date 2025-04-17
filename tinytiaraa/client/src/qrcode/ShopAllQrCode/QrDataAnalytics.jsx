import React, { useEffect, useState } from 'react'
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { server } from '@/server';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const QrDataAnalytics = () => {
    const [qrPageViews, setQrPageViews] = useState([]);
    const [loading, setLoading] = useState(true); // State for skeleton loader

    useEffect(() => {
        fetch(`${server}/qr-page-views`)
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.country !== "(not set)");
                setQrPageViews(filteredData);
            })
            .catch((err) => console.error("Error fetching data:", err))
            .finally(() => setLoading(false)); // Set loading to false when data is fetched
    }, []);

    // Data processing
    let desktopViews = 0, mobileViews = 0;
    let desktopDuration = 0, mobileDuration = 0;
    let mobileUserCount = 0;

    qrPageViews.forEach((item) => {
        if (item.device === "desktop") {
            desktopViews += parseInt(item.views);
            desktopDuration += parseFloat(item.avgSessionDuration);
        } else if (item.device === "mobile") {
            mobileViews += parseInt(item.views);
            mobileDuration += parseFloat(item.avgSessionDuration);
            mobileUserCount++;
        }
    });

    // Average Mobile Duration (to avoid extreme values)
    if (mobileUserCount > 0) {
        mobileDuration = mobileDuration / mobileUserCount;
    }

    // Bar Chart Data (Page Views)
    const barData = {
        labels: ["Desktop", "Mobile"],
        datasets: [
            {
                label: "Page Views",
                data: [desktopViews, mobileViews],
                backgroundColor: ["#4A90E2", "#50E3C2"],
                borderRadius: 8,
            },
        ],
    };

    // Doughnut Chart Data (Avg. Session Duration)
    const doughnutData = {
        labels: ["Desktop", "Mobile"],
        datasets: [
            {
                label: "Avg. Session Duration (seconds)",
                data: [desktopDuration, mobileDuration],
                backgroundColor: ["#FF6384", "#36A2EB"],
            },
        ],
    };

    return (
        <div>
            {loading ? (
                <div className="mx-auto p-6 bg-white rounded-[10px] shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">QR Code Page Analytics</h2>
                    
                    <div className="flex justify-center items-center gap-12">
                        {/* Skeleton for Bar Chart */}
                        <div className="w-[40%] px-8 py-6">
                            <div className="h-6 w-1/3 bg-gray-300 animate-pulse rounded mx-auto mb-3"></div>
                            <div className="h-52 bg-gray-200 animate-pulse rounded"></div>
                        </div>

                        {/* Skeleton for Doughnut Chart */}
                        <div className="w-[50%] px-8 py-6">
                            <div className="h-6 w-1/3 bg-gray-300 animate-pulse rounded mx-auto mb-3"></div>
                            <div className="h-52 bg-gray-200 animate-pulse rounded"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mx-auto p-6 bg-white rounded-[10px] shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">QR Code Page Analytics</h2>

                    <div className="flex justify-center  gap-12">
                        {/* Bar Chart */}
                        <div className="mb-8 cursor-pointer w-[40%] px-8 py-6">
                            <h3 className="text-lg font-semibold text-gray-700 text-center mb-3">Views by Device</h3>
                            <div className="h-52">
                                <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>

                        {/* Doughnut Chart */}
                        <div className="cursor-pointer w-[50%] px-8 py-6">
                            <h3 className="text-lg font-semibold text-gray-700 text-center mb-3">Avg. Session Duration (seconds)</h3>
                            <div className="h-52 flex justify-center">
                                <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QrDataAnalytics;
