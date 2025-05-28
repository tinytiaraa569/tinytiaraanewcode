"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { X, UploadCloud, CheckCircle2, Sparkles } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { server } from "@/server"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phonenumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  budget: z.string().min(1, { message: "Budget is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  message: z.string().optional(),
})

export default function Customizationsec4() {
  const [images, setImages] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      budget: "",
      address: "",
      message: "",
    },
  })

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true)
    } else if (e.type === "dragleave") {
      setIsDragging(false)
    }
  }

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files)
      e.dataTransfer.clearData()
    }
  }

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files) {
      processFiles(e.target.files)
    }
  }

  // Process the dropped or selected files
  const processFiles = (files) => {
    const filesArray = Array.from(files)
    filesArray.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((prevImages) => [...prevImages, reader.result])
        }
      }

      reader.readAsDataURL(file)
    })
  }

  // Remove image
  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }

  // Form submission
  const onSubmit = async (values) => {
    console.log("btn clicked")
    if (images.length === 0) {
      // toast.error("Please upload at least one image")
      return
    }

    setIsSubmitting(true)

    console.log({...values,images},'from form')

    try {
      // Replace with your actual server endpoint
      // await axios.post("/api/customised/request", {
      //   ...values,
      //   images,
      // })

       axios
            .post(`${server}/customised/request`, {
             ...values,
              images,
            })
            .then((res) => {
              swal({
                title: "Thank you!",
                text: "We'll get back to you for customization",
                icon: "success",
              });
            form.reset()
            setImages([])
              navigate("/personalised-prosperity");
            })
            .catch((error) => {
              console.log(error.response.data.message);
            });
      

      // toast.success("Thank you! We'll get back to you for customization")
      
    } catch (error) {
      // toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-[#F9F6F4] to-[#F4E7E2] p-6 md:p-10 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(200,167,155,0.2),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_30%_70%,rgba(200,167,155,0.2),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#F4E7E2] opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#C8A79B] opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-[#C8A79B] hover:bg-[#BF9283] text-white">Personalized Design</Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-[#8A6D63] mb-2">
            Create Your <span className="italic text-[#C8A79B]">Dream</span> Jewelry
          </h1>
          <p className="text-[#8A6D63]/80 max-w-2xl mx-auto">
            Share your vision with us and our expert artisans will transform it into a stunning piece of jewelry
          </p>
        </div>

        <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden rounded-2xl py-0">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              

              {/* left Column - Upload */}
              <div className="bg-gradient-to-br from-[#F9F6F4] to-[#F4E7E2] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E8C4B8] rounded-full opacity-20 -mt-20 -mr-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#C8A79B] rounded-full opacity-20 -mb-20 -ml-20"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold text-[#8A6D63] mb-6 flex items-center">
                    <UploadCloud className="w-5 h-5 mr-2 text-[#C8A79B]" />
                    Upload Your Design
                  </h2>

                  <div
                    className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
                      isDragging ? "border-[#C8A79B] bg-[#F4E7E2]" : "border-[#E8C4B8]/50 hover:border-[#C8A79B]"
                    }`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 mb-4 bg-gradient-to-br from-[#F9F6F4] to-[#E8C4B8]/30 rounded-full flex items-center justify-center">
                        <UploadCloud className="h-10 w-10 text-[#C8A79B]" />
                      </div>
                      <p className="text-[#8A6D63] mb-2">Drag & Drop your file here</p>
                      <p className="text-[#8A6D63]/60 mb-4">Or</p>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file-upload")?.click()}
                        className="bg-white border-[#C8A79B] text-[#8A6D63] hover:bg-[#F4E7E2] hover:text-[#8A6D63] transition-all duration-300"
                      >
                        Browse File
                      </Button>
                      <input id="file-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
                    </div>
                  </div>

                  {images.length > 0 && (
                    <div className="mt-6">
                      <h5 className="text-sm font-medium mb-3 text-[#8A6D63]">Uploaded Files:</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {images.map((file, index) => (
                          <div key={index} className="relative group rounded-lg overflow-hidden shadow-sm">
                            <img
                              src={file || "/placeholder.svg"}
                              alt={`Uploaded ${index}`}
                              className="w-full h-24 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-2">
                              <button
                                type="button"
                                className="p-1 bg-white rounded-full shadow-md"
                                onClick={() => handleImageRemove(index)}
                              >
                                <X className="h-4 w-4 text-[#C8A79B]" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {form.formState.isSubmitted && images.length === 0 && (
                    <p className="text-sm text-red-500 mt-2">Please upload at least one image</p>
                  )}

                  {
                    images?.length === 0 && (
                    <div className="mt-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-[#E8C4B8]/20">
                      <h3 className="text-lg font-medium text-[#8A6D63] mb-3">Why Choose Us?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#C8A79B] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#8A6D63]/80">Expert craftsmanship with attention to detail</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#C8A79B] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#8A6D63]/80">Personalized designs tailored to your preferences</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#C8A79B] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#8A6D63]/80">Premium quality materials for lasting beauty</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  )
                }

                  
                </div>
              </div>

              {/* right Column - Form */}
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-[#8A6D63] mb-6 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-[#C8A79B]" />
                  Your Information
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#8A6D63]">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              {...field}
                              className="border-[#E8C4B8]/30 focus:border-[#C8A79B] focus:ring focus:ring-[#E8C4B8]/20 transition-all duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#8A6D63]">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your email address"
                                {...field}
                                className="border-[#E8C4B8]/30 focus:border-[#C8A79B] focus:ring focus:ring-[#E8C4B8]/20 transition-all duration-200"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phonenumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#8A6D63]">Contact No</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your contact number"
                                {...field}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/[^0-9]/g, "")
                                  field.onChange(value)
                                }}
                                maxLength={10}
                                className="border-[#E8C4B8]/30 focus:border-[#C8A79B] focus:ring focus:ring-[#E8C4B8]/20 transition-all duration-200"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#8A6D63]">Budget</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your budget in rupees"
                              {...field}
                              className="border-[#E8C4B8]/30 focus:border-[#C8A79B] focus:ring focus:ring-[#E8C4B8]/20 transition-all duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#8A6D63]">Address</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your address"
                              className="resize-none border-[#E8C4B8]/30 focus:border-[#C8A79B] focus:ring focus:ring-[#E8C4B8]/20 transition-all duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#8A6D63]">Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              className="resize-none border-[#E8C4B8]/30 focus:border-[#C8A79B] focus:ring focus:ring-[#E8C4B8]/20 transition-all duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="cursor-pointer w-full py-6 bg-gradient-to-r from-[#C8A79B] to-[#8A6D63] hover:from-[#BF9283] hover:to-[#7D6259] text-white rounded-lg font-medium text-lg transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
