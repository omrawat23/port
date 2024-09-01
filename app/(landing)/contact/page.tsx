"use client";

import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "sonner"; 
import { Toaster } from "../../../components/ui/sonner"; 

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const rob = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const BlogsPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields before submitting."); // Show error toast
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      toast.error("EmailJS environment variables are not properly set."); // Show error toast
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Om Rawat",
          from_email: form.email,
          to_email: "omraw29@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible."); // Show success toast

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again."); // Show error toast
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-full md:max-w-screen-xl md:mx-auto px-6 md:px-0 mt-20">
      <Toaster /> 
      <h1
        className={cn(
          "text-3xl md:text-5xl font-semibold md:max-w-screen-md mb-6",
          headingFont.className
        )}
      >
        Get in Touch
      </h1>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full md:max-w-screen-md bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <label className="flex flex-col">
          <span className="text-[#E4E4E7] font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className="bg-[#E4E4E7] py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-[#E4E4E7] font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className="bg-[#E4E4E7] py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-[#E4E4E7] font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-[#E4E4E7] py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
          />
        </label>

        <motion.button
          type="submit"
          className="bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-blue-500/90"
          whileHover={{ scale: 1.05 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default BlogsPage;
