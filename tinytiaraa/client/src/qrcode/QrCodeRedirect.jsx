import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "@/server";

const QrCodeRedirect = () => {
  const { id } = useParams();
  console.log("QR Code ID from URL:", id);

  useEffect(() => {
    const fetchQrCode = async () => {
        try {
          if (!id) {
            console.error("Invalid QR Code ID:", id);
            return;
          }
      
          const response = await axios.get(`${server}/qrcode/${id}`);
      
          console.log("Response from API:", response.data);
      
          if (response.status === 200 && response.data.redirectUrl) {
            console.log("Redirecting to:", response.data.redirectUrl);
            window.location.href = response.data.redirectUrl;
          } else {
            console.error("No redirect URL found");
          }
        } catch (error) {
          console.error("Error fetching QR code:", error.response?.data || error.message);
        }
      };

    fetchQrCode();
  }, [id]);

  return <h2>Redirecting...</h2>;
};

export default QrCodeRedirect;
