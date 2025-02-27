import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "@/server";

const QrCodeRedirect = ({ type }) => {
  const { id, productId } = useParams();
  const qrId = type === "product" ? productId : id; // Get correct ID

  useEffect(() => {
    const fetchQrCode = async () => {
      try {
        if (!qrId) {
          console.error("Invalid QR Code ID:", qrId);
          return;
        }

        const endpoint = type === "product" ? `${server}/product/qrcode/product/${qrId}` : `${server}/qrcode/${qrId}`;
        const response = await axios.get(endpoint);

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
  }, [qrId, type]);

  return <h2>Redirecting...</h2>;
};

export default QrCodeRedirect;
