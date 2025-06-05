import React from 'react';
import { motion } from 'framer-motion';
import ttclubvideo from './ttclub.mp4';
import logoimg from './logo.png';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import firstimg from './homebanner7/firstimg.webp'
import secondimg from './homebanner7/secondimg.webp'

import thirdimg from './homebanner7/thirdimg.webp'


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const Homesec7 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 h-[50vh] lg:h-[93vh] lg:sticky top-13 left-0"
        initial="hidden"
        animate="visible"
        variants={scaleUp}
      >
        <div className="relative w-full h-full">
          <video
            src={ttclubvideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover "
          />
          <motion.div
            className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={logoimg}
              alt="Logo"
              className="mb-4 w-[70px] h-[70px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.h1
              className="text-white text-3xl lg:text-4xl font-extrabold text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Infants & Kid's Jewelry
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section with Animation */}
      <motion.div
        className="w-full lg:w-1/2 space-y-10 py-8 lg:py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Section 1 */}
        <motion.div
          className="first"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.img
            src={firstimg}
            alt="Reviews"
            className="w-full h-72 object-cover"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: false }}
          />
          <Card className="w-full border-none shadow-none rounded-none bg-white">
             <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <CardContent className="py-8 px-6 text-center space-y-5">
              <motion.h1
                className="text-4xl font-extrabold tracking-tight text-[#9A7B74]"
                variants={fadeInUp}
              >
                1000+ <span className="[#D8B4A0] text-2xl font-semibold">Reviews</span>
              </motion.h1>
              <motion.p
                className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                “The earrings were really pretty, looked just as they are pictured.
                My 4-year-old loved her pink hearts. I will definitely be ordering
                more items from Inseason.”
              </motion.p>
              <Link
                to="/reviews"
                className="relative inline-block mt-4 text-sm font-semibold uppercase tracking-wide text-[#9A7B74] group"
              >
                See All Reviews
                <span className="block h-[2px] w-1/2 bg-[#9A7B74] mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </CardContent>
            </motion.div>
          </Card>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="second"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.img
            src={secondimg}
            alt="Safety Banner"
            className="w-full h-80 object-cover"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          />
          <Card className="w-full border-none shadow-none rounded-none bg-white">
             <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >

            <CardContent className="py-8 px-6 text-center space-y-5">
              <motion.h1
                className="text-2xl font-bold tracking-tight text-[#9A7B74]"
                variants={fadeInUp}
              >
                JEWELRY SAFETY
              </motion.h1>
              <motion.p
                className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                “We prioritize safety by using hypoallergenic materials and strict quality
                checks, ensuring jewelry that parents trust and kids enjoy worry-free.”
              </motion.p>
              <motion.p
                className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Our jewelry collections offer whimsical charms and elegant pieces,
                ensuring every child finds something that matches their unique style.
              </motion.p>
              <Link
                to="/safety"
                className="relative inline-block mt-2 text-sm font-semibold uppercase tracking-wide text-[#9A7B74] group"
              >
                Learn about safety
                <span className="block h-[2px] w-1/2 bg-[#9A7B74] mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </CardContent>
          </motion.div>

          </Card>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="third"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.img
            src={thirdimg}
            alt="Materials"
            className="w-full h-80 object-cover"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          />
          <Card className="w-full border-none shadow-none rounded-none bg-white">
             <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <CardContent className="py-8 px-6 text-center space-y-5">
              <motion.h1
                className="text-2xl font-bold tracking-tight text-[#9A7B74]"
                variants={fadeInUp}
              >
                JEWELRY MATERIALS
              </motion.h1>
              <motion.p
                className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Craftsmanship is our core. Every piece is meticulously handcrafted with
                quality materials, ensuring beauty, safety, and comfort for children.
              </motion.p>
              <Link
                to="/safety"
                className="relative inline-block mt-2 text-sm font-semibold uppercase tracking-wide text-[#9A7B74] group"
              >
                Learn about material
                <span className="block h-[2px] w-1/2 bg-[#9A7B74] mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </CardContent>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homesec7;
