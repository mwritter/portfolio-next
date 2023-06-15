"use client";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { AnimatePresence, usePresence } from "framer-motion";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

const AnimatedComponent = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!submitted ? (
        <ContactForm key={"form"} onSubmitted={setSubmitted} />
      ) : (
        <ContactFormSubmitted key={"submitted"} onBack={setSubmitted} />
      )}
    </AnimatePresence>
  );
};

const ContactForm = ({
  onSubmitted,
}: {
  onSubmitted: (value: boolean) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("EMAIL - 🤔 it looks like your email is invalid")
        .required("EMAIL - I need to know who to respond to 🙂"),
      message: Yup.string().required("MESSAGE - 🙂 dont be shy"),
    }),

    onSubmit: (values) => {
      onSubmitted(true);
    },
  });

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) safeToRemove();
  }, [isPresent]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="flex-1 text-gray-700 p-10 md:p-20">
          <h1 className="text-xl font-semibold pb-2">Let's talk</h1>
          <p className="text-sm text-gray-500">
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-6 w-full">
            <div className="pb-4">
              <label
                htmlFor="email"
                className={`font-semibold block text-xs pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : "uppercase"
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "email"}
              </label>
              <input
                className="w-full outline-none border-2 border-gray-500 p-2 rounded-md focus:border-[#2374f6] ring-[#2374f6]"
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className="mt-6">
            <div className="pb-4">
              <label
                htmlFor="message"
                className={`font-semibold block text-xs pb-2 ${
                  formik.touched.message && formik.errors.message
                    ? "text-red-400"
                    : "uppercase"
                }`}
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "message"}
              </label>
              <textarea
                className="w-full outline-none border-2 border-gray-500 p-2 rounded-md focus:border-[#2374f6] ring-[#2374f6]"
                name="message"
                rows={10}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
            </div>
          </div>

          <button
            type="submit"
            className="hover:shadow-md self-start bg-[#2374f6] p-2 rounded-md"
          >
            <div className="text-white">Send</div>
          </button>
        </div>
      </form>
    </m.div>
  );
};

const ContactFormSubmitted = ({
  onBack,
}: {
  onBack: (value: boolean) => void;
}) => {
  const [pieces, setPieces] = useState(200);

  useEffect(() => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="p-2 md:p-20 flex flex-col gap-5 justify-center w-full h-[300px]">
        <h1 className="font-semibold text-3xl">Thanks for reaching out!</h1>
        <p>
          I truly appreciate you taking the time to reach out. I&apos;ll get
          back to you as soon as I can!
        </p>
      </div>
      <button onClick={() => onBack(false)}>Back</button>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.div>
  );
};

export default AnimatedComponent;
