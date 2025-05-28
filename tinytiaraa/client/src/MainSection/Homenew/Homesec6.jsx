import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Homesec6 = () => {
  return (
    <section className="w-full px-4 py-12 bg-gradient-to-br from-[#fef9f7] via-[#fffdfc] to-white">
      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-[#9A7B74]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            The Finest Infants & Kids Jewelry in India
          </motion.h1>
        </CardContent>
      </Card>
    </section>
  );
};

export default Homesec6;
