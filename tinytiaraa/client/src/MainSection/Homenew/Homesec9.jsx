import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import firstimg from './homebanner9/firstimg.webp'
import secondimg from './homebanner9/secondimg.webp'


const SparkleEffect = () => {
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
              repeat: Infinity,
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

const Homesec9 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative !py-16 px-6 md:px-12  overflow-hidden bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white">
        <SparkleEffect />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Left Images */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative w-full h-auto">
            <motion.img
              src={firstimg}
              alt="main"
              className="rounded-xl shadow-lg w-[90%] h-[45vh] md:h-[60vh] lg:h-[65vh] object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            />

            <motion.img
              src={secondimg}
              alt="overlap"
              className="absolute top-[32%] right-0 transform -translate-y-1/2 w-2/3 md:w-1/2 rounded-xl shadow-2xl border-4 border-white"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full lg:w-1/2 "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#9A7B74] mb-4 text-center lg:text-left">
                Why Tiny Tiaraa?
            </h2>


            <motion.p
                className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 text-center lg:text-left"
            >
                Craftsmanship is our core. Every piece is meticulously handcrafted with
                quality materials, ensuring beauty, safety, and comfort for children.
            </motion.p>
          <div className="space-y-5 flex flex-col items-center lg:items-start justify-center lg:justify-start">
            {[
              'Hypoallergenic Materials',
              'SGL Certified Jewelry',
              'Crafted with Love',
              'Customizable Options',
              'BIS Certified',
              'Age-Appropriate Styles'
            ].map((line, idx) => (
              <motion.div
                key={idx}
                className="flex items-center space-x-3 text-gray-800 text-sm md:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.12 }}
                viewport={{ once: false }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.12 }}
                  className="text-green-500"
                >
                  <Check size={18} />
                </motion.div>
                <p>{line}</p>
              </motion.div>
            ))}

           

            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-fit"
            >
            <Button
                onClick={() => navigate("/products")}
                variant="outline"
                           className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300"

            >
                Shop Now
            </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homesec9;
