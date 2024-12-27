import { server } from '@/server';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const LiveActiveUsers = () => {
  const [liveCount, setLiveCount] = useState(0); // Track live active users
  const [topCountries, setTopCountries] = useState([]); // Track top countries and active users
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 30 }, (_, i) => `${30 - i} min ago`), // Default X-axis labels
    datasets: [
      {
        label: 'Active Users',
        data: Array(30).fill(0), // Default dataset
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch live active user data
  const getRealTimeActiveUsers = async () => {
    try {
      const response = await fetch(`${server}/live-active-users`);
      const data = await response.json();

      // Assume `data` is an array of objects with `country` and `activeUsers`
      const totalActiveUsers = data.reduce((sum, user) => sum + parseInt(user.activeUsers || 0, 10), 0);
      setTopCountries(data); // Update top countries data
      setLiveCount(totalActiveUsers); // Update live count
      setIsLoading(false); // Data has been loaded
      return totalActiveUsers; // Return the total active users at this moment
    } catch (error) {
      console.error('Error fetching real-time data:', error);
      setIsLoading(false); // Even on error, stop the loader
      return 0; // Return 0 on error
    }
  };

  useEffect(() => {
    const updateChartData = async () => {
      const activeUsers = await getRealTimeActiveUsers();

      setChartData((prevData) => {
        const updatedData = [...prevData.datasets[0].data.slice(1), activeUsers]; // Shift data to the left and add the new value

        return {
          labels: Array.from({ length: 30 }, (_, i) => `${30 - i} min ago`), // Keep the labels
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData, // Update the dataset
            },
          ],
        };
      });
    };

    // Update data every minute
    updateChartData(); // Initial fetch
    const interval = setInterval(updateChartData, 60 * 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (

    <>
    {
        isLoading ? (
            <div className="border border-gray-100 bg-white shadow-lg rounded-[10px] space-y-4 p-4">
            <div className="w-1/3 h-6 bg-gray-300 animate-pulse rounded"></div>
            <div className="w-1/2 h-4 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-full h-72 bg-gray-200 animate-pulse rounded"></div>
          </div>

        )
        :
        (
            
    <div className="bg-white px-6 pt-5 pb-6 border border-gray-100 shadow-md rounded-[10px]">
      
    <>
      <h3 className="text-lg font-semibold">Active Users in Last 30 Minutes</h3>

      {/* Live count display */}
      <div className="text-[28px] font-[500] text-[gray] mt-1 ml-2">{liveCount}</div>

      {/* Chart Section */}
      <div className="mt-4 w-full h-60 cursor-pointer">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time (Minutes Ago)',
                },
                ticks: {
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 30,
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Active Users',
                },
                beginAtZero: true,
                ticks: {
                  stepSize: 5, // Interval of 5
                  callback: (value) => value, // Show all values
                },
                max: Math.ceil(Math.max(...chartData.datasets[0].data) / 5) * 5, // Round up to the nearest 5
              },
            },
            plugins: {
              legend: {
                display: false, // Hide the legend
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.raw} active users`,
                },
              },
            },
          }}
        />
      </div>

      {/* Top Countries Section */}
      <div className="mt-4 border-t pt-4">
        <h4 className="text-[15px] font-semibold text-[#000]">Top Countries</h4>
        <div className="mt-1 space-y-2">
          {topCountries.length > 0 ? (
            topCountries.map((country, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-700 font-medium text-[14px]">{country.country}</span>
                <span className="text-gray-700 font-[400] text-[14px]">{country.activeUsers}</span>
              </div>
            ))
          ) : (
            <div className="text-gray-500">No data available</div>
          )}
        </div>
      </div>
    </>
  
        </div>
        )
    }
    
    </>




  );
};

export default LiveActiveUsers;
