import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import freq1 from "./images/freq1.svg";
import freq2 from "./images/freq2.svg";
import freq3 from "./images/freq3.svg";
import freq4 from "./images/freq4.svg";
import freq5 from "./images/freq5.svg";
import freq6 from "./images/freq6.svg";
import freq7 from "./images/freq7.svg";
import freq8 from "./images/freq8.svg";
import freq9 from "./images/freq9.svg";
import freq10 from "./images/freq10.svg";
import thankuimg from "./images/thanku.svg";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Sparkles, Check } from "lucide-react";

// Sparkle effect component
export const SparkleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="text-amber-300 w-4 h-4" />
          </motion.div>
        );
      })}
    </div>
  );
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  margin: "10px 0",
  fontFamily: "Poppins",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(138, 109, 99, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 12px rgba(138, 109, 99, 0.15)",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ color: "#8A6D63" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginRight: theme.spacing(2),
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "start",
  },
  padding: "16px 20px",
  minHeight: "64px",
  "&:hover": {
    backgroundColor: "#F9F6F4",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "16px 20px",
  borderTop: "1px solid rgba(138, 109, 99, 0.1)",
  backgroundColor: "#F9F6F4",
  color: "#5A4A42",
  lineHeight: "1.6",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [opendone, setOpenDone] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const freqImages = [freq1, freq2, freq3, freq4, freq5 ,freq6, freq7, freq8, freq9, freq10];

  return (
    <div className="freqques py-10 md:py-16 relative px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-t from-[#F4E7E2]/10 via-[#F9F6F4] to-white">
      <SparkleEffect />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#E8C4B8] opacity-15 blur-3xl"></div>
      <svg
        className="absolute top-20 left-10 md:left-20 text-[#E8C4B8] opacity-20 w-16 h-16 md:w-24 md:h-24"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,10 90,90 10,90" />
      </svg>
      <svg
        className="absolute bottom-20 right-10 md:right-20 text-[#D5B3A5] opacity-20 w-20 h-20 md:w-32 md:h-32"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <rect x="20" y="20" width="60" height="60" rx="10" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#8A6D63]">
            Frequently Asked <span className="text-[#C8A79B]">Questions</span>
          </h1>
          <p className="text-[#8A6D63]/80 max-w-2xl mx-auto">
            See some common questions and answers below, or call us at +91 86570 62511
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 sm:gap-6">
          {/* Left column */}
          <div className="w-full lg:w-1/2">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`panel${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                >
                  <AccordionSummary
                    aria-controls={`panel${i}d-content`}
                    id={`panel${i}d-header`}
                  >
                    <Typography className="font-medium text-[#8A6D63]">
                      {[
                        "What is Unique about Tiny Tiaraa Jewelry?",
                        "Can I find jewelry for special occasions?",
                        "Are there adjustable sizes available?",
                        "How do I place an order online?",
                        "What is your policy on exchanges?",
                      ][i - 1]}
                    </Typography>
                    <img
                      src={freqImages[i - 1]}
                      alt=""
                      className="w-8 h-8 mr-4"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {[
                        "Our Jewelry is made from hypoallergenic and non-toxic materials, ensuring safety and comfort for kids and infants.",
                        "Yes, we offer a variety of designs perfect for birthdays, naming ceremonies, and other special moments.",
                        "Many of our pieces come with adjustable features to grow with your child.",
                        "Simply select the items you wish to purchase, add them to your cart, and follow the checkout process on our website.",
                        "Exchanges can be made within 7 days of delivery for items in their original condition.",
                      ][i - 1]}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/2">
            {[6, 7, 8, 9, 10].map((i) => (
              <motion.div
                key={`panel${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i - 5) * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Accordion
                  expanded={expanded === `panel${i}`}
                  onChange={handleChange(`panel${i}`)}
                >
                  <AccordionSummary
                    aria-controls={`panel${i}d-content`}
                    id={`panel${i}d-header`}
                  >
                    <Typography className="font-medium text-[#8A6D63]">
                      {[
                        "What should I do if I receive a defective product?",
                        "Timely Shipping and Delivery",
                        "How often do you introduce new designs?",
                        "Can I get jewelry customized for my child?",
                        "How can I find out about promotions and new releases?",
                      ][i - 6]}
                    </Typography>
                    <img
                      src={freqImages[i - 1]}

                      alt=""
                      className="w-8 h-8 mr-4"
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {[
                        "Contact our customer service immediately to arrange for a replacement or refund.",
                        "Experience reliable and prompt shipping services to ensure your orders arrive on time.",
                        "We introduce new collections for monthly festivals, seasonally, and on special occasions.",
                        "Yes, we offer customization Services, Just upload the design you want to get manufactured and we will bring it to you in reality.",
                        "Subscribe to our newsletter or follow us on social media for updates on promotions and new arrivals.",
                      ][i - 6]}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </motion.button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4 bg-[#F4E7E2] rounded-lg max-w-2xl mx-auto">
          <Typography className="text-[#8A6D63] font-medium">
            Did you find information on this page useful?
          </Typography>
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={() => setOpenDone(true)}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#006B18" />
                <path
                  d="M7.5 26H11V14H7.5V26ZM26 14.5C26 13.4 25.1 12.5 24 12.5H19.5L20.4 8L20.5 7.5C20.5 7.1 20.3 6.7 20 6.5L19 5.5L12.5 12C12.2 12.3 12 12.8 12 13.5V22C12 23.1 12.9 24 14 24H22C22.8 24 23.5 23.5 23.8 22.8L26.5 16C26.6 15.8 26.6 15.5 26.6 15.3V14.5Z"
                  fill="white"
                />
              </svg>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#E13939" />
                <path
                  d="M19.5 8.5H12C11.2 8.5 10.5 9 10.2 9.7L7.5 15.7C7.4 15.9 7.3 16.2 7.3 16.5V18.5C7.3 19.6 8.2 20.5 9.3 20.5H15L14.1 24.5L14 25C14 25.4 14.2 25.8 14.5 26L15.5 27L22 20.5C22.3 20.2 22.5 19.7 22.5 19V10.5C22.5 9.4 21.6 8.5 20.5 8.5H19.5ZM23.5 8.5V19.5H27V8.5H23.5Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Thank you popup */}
      {opendone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <RxCross2
                size={24}
                className="cursor-pointer text-[#8A6D63] hover:text-[#C8A79B] transition-colors"
                onClick={() => setOpenDone(false)}
              />
            </div>
            <div className="px-8 pb-8 text-center">
              <div className="flex justify-center mb-6 relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center">
                  <Check className="text-white w-16 h-16" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#8A6D63] mb-2">
                Thank you
              </h3>
              <p className="text-[#8A6D63]/80 mb-6">
                Your message has been received
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white font-medium px-6 py-2 rounded-md"
                onClick={() => setOpenDone(false)}
              >
                OK
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Feedback popup */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <RxCross2
                size={24}
                className="cursor-pointer text-[#8A6D63] hover:text-[#C8A79B] transition-colors"
                onClick={() => setOpen(false)}
              />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
                swal({
                  title: "Thank you!",
                  text: "Your message has been received!",
                  icon: "success",
                });
              }}
              className="px-8 pb-8"
            >
              <h3 className="text-xl font-bold text-[#8A6D63] mb-4 text-center">
                What can we do better?
              </h3>
              <textarea
                required
                className="w-full p-3 border border-[#D8B4A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A79B] mb-6 min-h-[150px] text-[#5A4A42]"
                placeholder="Enter your feedback here. Note: This is an anonymized feedback. If you would like us to contact you, please mention your number and email ID."
              ></textarea>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white font-medium px-6 py-2 rounded-md"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CustomizedAccordions;