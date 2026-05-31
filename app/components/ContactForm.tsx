"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { validateContactForm } from "@/lib/validation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface InputFieldProps {
  label: string;
  name: keyof Pick<FormData, "name" | "email" | "subject">;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const validationErrors =
      validateContactForm(formData);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      setStatus("error");
      setStatusMessage(
        "Please fix the errors below"
      );
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          data.message ||
            "Message sent successfully!"
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(
          () => setStatus("idle"),
          5000
        );
      } else {
        setStatus("error");
        setStatusMessage(
          data.error ||
            "Failed to send message"
        );

        if (data.validationErrors) {
          setErrors(
            data.validationErrors
          );
        }
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again."
      );
      console.error(error);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100 px-4 py-10 dark:bg-gray-950 sm:px-6 md:px-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        className="mx-auto w-full max-w-4xl"
      >
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="flex justify-center mb-5">
            <div className="w-auto h-auto rounded-3xl bg-linear-to-r from-amber-500 to-pink-500 flex items-center justify-center text-white shadow-2xl">
              <Mail className="w-9 h-9" />
            </div>
          </div>

          <h2 className="text-3xl font-bold bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl">
            Contact Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3 text-base sm:text-lg">
            Let’s build something amazing
            together
          </p>
        </div>

        {/* Glass Card */}
        <div className="backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700 rounded-3xl p-5 shadow-2xl sm:p-6 md:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              error={errors.name}
            />

            {/* Email */}
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />

            {/* Subject */}
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              error={errors.subject}
            />

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`w-full rounded-2xl px-5 py-4 bg-white/50 dark:bg-gray-800/50 border backdrop-blur-xl text-gray-900 dark:text-white outline-none transition ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                }`}
              />

              {errors.message && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status */}
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-2xl bg-green-500/10 border border-green-500 p-4">
                <CheckCircle className="text-green-500" />
                <p className="text-green-600">
                  {statusMessage}
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-2xl bg-red-500/10 border border-red-500 p-4">
                <AlertCircle className="text-red-500" />
                <p className="text-red-500">
                  {statusMessage}
                </p>
              </div>
            )}

            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              disabled={
                status === "loading"
              }
              type="submit"
              className="w-full flex items-center justify-center gap-3 rounded-2xl px-6 py-4 bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 text-white font-semibold shadow-xl transition disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}: InputFieldProps) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl px-5 py-4 bg-white/50 dark:bg-gray-800/50 border backdrop-blur-xl text-gray-900 dark:text-white outline-none transition ${
          error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
        }`}
      />

      {error && (
        <p className="text-red-500 mt-2 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}
