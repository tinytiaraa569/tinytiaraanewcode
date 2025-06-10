import { motion } from "framer-motion"
import { Facebook, Instagram, Mail, Phone, MessageSquare, ArrowRight  } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { server } from "@/server"
import axios from "axios"
import swal from "sweetalert";
import { toast } from "react-toastify"


const currentYear = new Date().getFullYear()

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
}

const socialIconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, transition: { type: "spring", stiffness: 400 } },
}

function Footer() {

  const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${server}/ttclub/ttclub`, { email: data.email });
      swal({
        title: "Thank you!",
        text: "You're Subscribed to TT Member's Club!",
        icon: "success",
      });
      reset(); // reset form after success
    } catch (error) {
      toast.error(error.response?.data?.message || "something went wrong failed.");
    }
  };


  return (
    <footer className=" relative bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden leading-none">
        <svg
          className="relative block h-12 w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#D8B4A0]/20 to-[#D7A295]/20 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#D8B4A0]/10 to-[#D7A295]/10 blur-3xl" />
         {/* Diagonal decorative line */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -left-1/4 top-0 h-[150%] w-1/2 -rotate-45 bg-gradient-to-r from-[#D8B4A0]/5 to-[#D7A295]/5"></div>
      </div>


      <div className="container mx-auto px-4 pt-20 pb-12 md:px-6 lg:pt-24 lg:pb-16 z-10 relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 "
        >
          {/* Logo and Brand Section */}
          <motion.div variants={item} className="flex flex-col space-y-4 ">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <div onClick={()=>navigate('/')} className="cursor-pointer inline-block">
                <img
                  src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
                  alt="Tiny Tiaraa Logo"
                  width={150}
                  height={60}
                  
                />
              </div>
            </motion.div>
            <p className="text-sm text-slate-300">A Brand By Ru-Brama Retail Pvt Ltd.</p>
            <p className="text-sm text-slate-400">
              Discover exquisite jewelry pieces crafted with precision and passion. Each piece tells a unique story.
            </p>

            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-semibold text-white">CONNECT WITH US</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61551799145871"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#D8B4A0]"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://web.whatsapp.com/send?phone=+91%208657062511"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#D8B4A0]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0442 0C5.00804 0 0.0884424 4.895 0.0884424 10.901C0.0884424 12.826 0.596985 14.696 1.54774 16.346L0 22L5.80402 20.482C7.40703 21.351 9.20904 21.813 11.0442 21.813C17.0804 21.813 22 16.918 22 10.912C22 7.997 20.8613 5.258 18.794 3.201C16.7266 1.133 13.9739 0 11.0442 0ZM11.0553 1.837C13.4874 1.837 15.7648 2.783 17.4894 4.499C19.203 6.215 20.1538 8.492 20.1538 10.912C20.1538 15.906 16.0633 19.965 11.0442 19.965C9.40804 19.965 7.80502 19.536 6.41206 18.7L6.0804 18.513L2.63116 19.415L3.54874 16.071L3.32764 15.719C2.42111 14.3 1.93467 12.617 1.93467 10.901C1.94573 5.907 6.02512 1.837 11.0553 1.837ZM7.16382 5.863C6.98693 5.863 6.68844 5.929 6.43417 6.204C6.19095 6.479 5.47236 7.15 5.47236 8.481C5.47236 9.823 6.45628 11.11 6.57789 11.297C6.73266 11.484 8.52362 14.234 11.2764 15.4C11.9286 15.697 12.4372 15.862 12.8352 15.983C13.4874 16.192 14.0844 16.159 14.5598 16.093C15.0905 16.016 16.1739 15.433 16.406 14.795C16.6382 14.157 16.6382 13.618 16.5719 13.497C16.4945 13.387 16.3176 13.321 16.0412 13.2C15.7648 13.046 14.4161 12.386 14.1729 12.298C13.9186 12.21 13.7638 12.166 13.5538 12.43C13.3769 12.705 12.8462 13.321 12.6915 13.497C12.5256 13.684 12.3709 13.706 12.1055 13.574C11.8181 13.431 10.9337 13.145 9.89447 12.221C9.07638 11.495 8.53467 10.604 8.36884 10.329C8.23618 10.065 8.35779 9.9 8.49045 9.779C8.61206 9.658 8.78894 9.46 8.8995 9.295C9.04322 9.141 9.08744 9.02 9.17588 8.844C9.26432 8.657 9.2201 8.503 9.15377 8.371C9.08744 8.25 8.53467 6.886 8.30251 6.347C8.08141 5.819 7.8603 5.885 7.68342 5.874C7.52864 5.874 7.35176 5.863 7.16382 5.863Z" fill="white" />
                                </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/tiny_tiaraa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#D8B4A0]"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="tel:+91 8657062511"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#D8B4A0]"
                >
                  <Phone className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:care@tinytiaraa.com"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-[#D8B4A0]"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Locate Us Section */}
          <motion.div variants={item} className="flex flex-col space-y-6">
            <h4 className="text-lg font-semibold text-white">LOCATE US</h4>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295]"></div>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Tiny Tiaraa</p>
              <p>Plot F-11 & 12-1, Second Floor, Admin Bldg.,</p>
              <p>MIDC (Marol), Central Road, Opp. Seepz Main Gate,</p>
              <p>WICEL, Andheri(East), Mumbai-400093.</p>
            </div>

            <div className="mt-4 space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Phone className="h-4 w-4 text-[#D8B4A0]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call Us</p>
                  <p className="text-sm font-medium text-white">+91 86570 62511</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Mail className="h-4 w-4 text-[#D8B4A0]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Us</p>
                  <p className="text-sm font-medium text-white">care@tinytiaraa.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div variants={item} className="flex flex-col space-y-6">
            <h4 className="text-lg font-semibold text-white">INFORMATION</h4>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295]"></div>
            <ul className="space-y-3">
              {[
                { title: "Our Story", href: "/about" },
                { title: "Contact Us", href: "/contacts" },
                { title: "Terms & Conditions", href: "/terms-and-conditions" },
                { title: "Privacy Policy", href: "/privacy-policy" },
                { title: "Exchange Policy", href: "/exchange-policy" },
                { title: "Return Policy", href: "/return-policy" },
                { title: "FAQ's", href: "/faqs" },

                { title: "Blogs", href: "/blogs" },
              ].map((item, index) => (
                <motion.li key={index} className="overflow-hidden">
                  <motion.div initial={{ x: 0 }} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      to={item.href}
                      onClick={scrollToTop}
                      className="group flex items-center text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-[#D8B4A0]" />
                      {item.title}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policy Section */}
          <motion.div variants={item} className="flex flex-col space-y-6">
            <h4 className="text-lg font-semibold text-white">POLICY</h4>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295]"></div>
            <ul className="space-y-3">
              {[
                { title: "Affiliate Program Commission Policy", href: "/affiliate-program-commission-policy" },
                { title: "Children Safety Jewelry Policy", href: "/children-safety-jewellery-policy" },
                { title: "Customised Jewelry Policy", href: "/customised-jewellery-policy" },
                {
                  title: "Gold And Diamond Jewelry Certification Policy",
                  href: "/gold-and-diamond-jewellery-certification-policy",
                },
              ].map((item, index) => (
                <motion.li key={index} className="overflow-hidden">
                  <motion.div initial={{ x: 0 }} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      to={item.href}
                      
                      className="group flex items-center text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-[#D8B4A0]" />
                      {item.title}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-xl bg-white/5 p-8 backdrop-blur-sm"
        >
           <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold">Stay Connected</h3>
              <p className="mt-2 text-slate-300">Subscribe to our newsletter for exclusive offers and updates</p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <div className="w-full">

              <Input
                type="email"
                placeholder="Enter your email"
                className="border-white/10 bg-white/5 text-white placeholder:text-slate-400"
                {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
              )}
              </div>

              
              <Button className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:from-[#D7A295] hover:to-[#D8B4A0]">
                Subscribe
              </Button>
               
            </div>
            
          </div>
          
          </form>
        </motion.div>

        {/* Copyright Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-16">
          <Separator className="mb-6 bg-white/10" />
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-400">All Rights Reserved | Tiny Tiaraa © {currentYear}</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 11H5V21H19V11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7H7L5 11H19L17 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Premium Quality
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                24/7 Support
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Free Shipping
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Secure Payment
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}


export default Footer