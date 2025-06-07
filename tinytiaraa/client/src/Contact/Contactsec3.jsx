
import { useState,forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { server } from "@/server"
import swal from "sweetalert";
import { FaFacebookF, FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa"
const ContactSec3 = forwardRef((props,ref) => {
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();


    const onSubmit = async (data) => {
    try {
      await axios.post(`${server}/contactus/contactus`, {
        name: data.name,
        email: data.email,
        phonenumber: data.phone,
        message: data.message,
      });

      swal("Success", "Your message has been sent!", "success");
      reset();
    } catch (error) {
      swal("Error", error.response?.data?.message || "Something went wrong.", "error");
    }
  };
 

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden " ref={ref}>
      {/* Animated background shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute z-0 top-10 right-10 w-32 h-32 rounded-full bg-[#E8C4B8]/20"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute z-0 bottom-10 left-10 w-24 h-24 rounded-full bg-[#D0A98F]/30"
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#8A6D63] dark:text-[#F4E7E2] mb-2">Get In Touch</h2>
          <p className="text-[#8A6D63]/80 dark:text-[#F4E7E2]/80 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#8A6D63] dark:text-[#F4E7E2] mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "Plot F-11 & 12-1, Second Floor, Admin Bldg., MIDC (Marol), Central Road, Mumbai-400093",
                  },
                  { icon: Mail, title: "Email", content: "care@tinytiaraa.com" },
                  { icon: Phone, title: "Phone", content: "+91 86570 62511" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="!w-12 h-12  rounded-full bg-[#D0A98F] flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold text-[#8A6D63] dark:text-[#F4E7E2]">{item.title}</h4>
                      <p className="text-[#8A6D63]/80 dark:text-[#F4E7E2]/80">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-5">
            <h3 className="text-2xl font-semibold text-[#8A6D63] dark:text-[#F4E7E2]  mb-6 ">
                Connect with us :
            </h3>

            <div className="flex items-center gap-5">
                <Link
                to="https://www.facebook.com/profile.php?id=61551799145871"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E9E6] dark:bg-[#3A332F] hover:bg-[#E3D2CC] transition-all duration-300 shadow-md"
                >
                <FaFacebookF className="text-[#8A6D63] dark:text-[#F4E7E2] text-lg" />
                </Link>

                <Link
                to="https://web.whatsapp.com/send?phone=+918657062511"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E9E6] dark:bg-[#3A332F] hover:bg-[#E3D2CC] transition-all duration-300 shadow-md"
                >
                <FaWhatsapp className="text-[#8A6D63] dark:text-[#F4E7E2] text-lg" />
                </Link>

                <Link
                to="https://www.instagram.com/tiny_tiaraa/"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E9E6] dark:bg-[#3A332F] hover:bg-[#E3D2CC] transition-all duration-300 shadow-md"
                >
                <FaInstagram className="text-[#8A6D63] dark:text-[#F4E7E2] text-lg" />
                </Link>

                <Link
                to="mailto:care@tinytiaraa.com"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E9E6] dark:bg-[#3A332F] hover:bg-[#E3D2CC] transition-all duration-300 shadow-md"
                >
                 <FaRegEnvelope className="text-[#8A6D63] dark:text-[#F4E7E2] text-lg" />
                </Link>
            </div>
            </div>



          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border shadow-xl bg-white/90 dark:bg-[#2A2624]/90 backdrop-blur-sm">
              <CardContent className="px-8 pb-8 pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                     <h3 className="text-xl font-semibold text-[#8A6D63] dark:text-[#F4E7E2] ">
                        Contact us
                    </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     

                    
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <div>
                        <Input
                        placeholder="Your Name"
                        {...register("name", { required: "Name is required" })}
                        className="border-[#E8C4B8] focus:border-[#D0A98F]"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                     <div>
                        <Input
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                            },
                        })}
                        className="border-[#E8C4B8] focus:border-[#D0A98F]"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    </motion.div>
                  </div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div>
                    <Input
                        placeholder="Phone Number"
                        {...register("phone", { required: "Phone number is required" })}
                        className="border-[#E8C4B8] focus:border-[#D0A98F]"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div>
                    <Textarea
                        placeholder="Your Message"
                        rows={4}
                        {...register("message", { required: "Message is required" })}
                        className="border-[#E8C4B8] focus:border-[#D0A98F] resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                   <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#D0A98F] to-[#C8A79B] hover:from-[#C8A79B] hover:to-[#BF9283] text-white"
                    >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default ContactSec3
