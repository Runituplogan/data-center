import phone from "../assets/images/phone.svg";
import address from "../assets/images/address.svg";
import blue_mail from "../assets/images/blue-mail.svg";
import blue_sun from "../assets/images/blue-sun.svg";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import linkedin from "../assets/images/linkedin.svg";
import mail from "../assets/images/mail.svg";
import { useState } from "react";

const SendUsMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Message sent successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccess("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="w-full py-20 bg-white" id="send-us-message">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="w-full max-w-lg mx-auto px-0 lg:px-12">
          <h1 className="w-full text-center text-[#121212] font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Send us a message
          </h1>

          <p className="w-full text-center text-[#121212] mt-5 text-base md:text-lg">
            We’d love to hear from you. Whether you’re looking to hire or
            seeking your next opportunity, reach out today.
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-start gap-10 mt-14 xl:px-0 md:px-5">
          <form onSubmit={sendEmail} className="md:w-[50%] lg:w-[40%] w-full">
            <div className="mb-5">
              <label>Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name here..."
                className="w-full mt-2 border-[#3A3A3A] rounded-full py-2.5 pl-5 border outline-none active:ring-1 focus:border-blue-400 active:ring-blue-400 focus:ring-1 focus:ring-blue-400 ease transition-all duration-300"
              />
            </div>
            <div className="mb-5">
              <label>Email *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter email address here..."
                className="w-full mt-2 border-[#3A3A3A] rounded-full py-2.5 pl-5 border outline-none active:ring-1 focus:border-blue-400 active:ring-blue-400 focus:ring-1 focus:ring-blue-400 ease transition-all duration-300"
              />
            </div>
            <div className="mb-5">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number here..."
                className="w-full mt-2 border-[#3A3A3A] rounded-full py-2.5 pl-5 border outline-none active:ring-1 focus:border-blue-400 active:ring-blue-400 focus:ring-1 focus:ring-blue-400 ease transition-all duration-300"
              />
            </div>
            <div className="mb-5">
              <label>Message *</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter message here..."
                className="w-full mt-2 rounded-xl border-[#3A3A3A] py-2.5 pl-5 border outline-none active:ring-1 focus:border-blue-400 active:ring-blue-400 focus:ring-1 focus:ring-blue-400 ease transition-all duration-300"
              />
            </div>

            {/* <div className="g-recaptcha" data-sitekey="your_site_key"></div> */}

            <button
              type="submit"
              disabled={loading}
              aria-label="Send a message"
              className="disabled:opacity-45 sm:mt-2 rounded-full text-white px-10 py-3 blue-gradient ease transition-all duration-200 hover:opacity-60 cursor-pointer"
            >
              Send a message
            </button>
          </form>

          <div className="sm:w-[350px] w-full rounded-xl blue-gradient px-4 py-7 relative overflow-hidden">
            <h2 className="w-full text-center font-medium text-xl text-white">
              Let's Get in Touch
            </h2>

            <div className="w-full space-y-3 mt-6 z-10">
              <div className="w-full text-white rounded-xl border border-[#3FC5FF] bg-[#3CACDC6E] p-4 flex justify-start items-center gap-3">
                <img src={phone} alt="phone" />
                <div className="text-sm md:text-base">
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">312-224-0479</p>
                </div>
              </div>

              <div className="w-full text-white rounded-xl border border-[#3FC5FF] bg-[#3CACDC6E] p-4 flex justify-start items-center gap-3">
                <img src={blue_mail} alt="email" />
                <div className="text-sm md:text-base">
                  <p className="font-medium">Email</p>
                  <p className="text-sm">charles@thetalentcounsel.com</p>
                </div>
              </div>
              <div className="w-full text-white rounded-xl border border-[#3FC5FF] bg-[#3CACDC6E] p-4 flex justify-start items-center gap-3 relative z-10">
                <img src={address} alt="email" />
                <div className="text-sm md:text-base">
                  <p className="font-medium">Address:</p>
                  <p className="text-sm relative">
                    3400 Cottage Way, Ste G2 #4589, Sacramento, California 95825
                  </p>
                </div>
              </div>
            </div>

            <p className="w-full pt-5 font-medium border-t border-[#FAFAFA] relative isolate z-10 text-white text-center mt-6">
              Connect with us
            </p>

            <div className="flex justify-center items-center gap-4 md:gap-4 mt-5 relative">
              <Link
                to={"https://www.linkedin.com/company/talentcounsel/"}
                target="_blank"
                className="text-[#3A3A3A] z-20"
              >
                <img src={linkedin} alt="linkedin" />
              </Link>

              <Link
                to={"mailto:charles@thetalentcounsel.com"}
                className="text-[#3A3A3A] z-10"
              >
                <img src={mail} alt="mail" />
              </Link>
            </div>

            <img
              src={blue_sun}
              alt="radical eclipse"
              className="absolute -bottom-24 scale-200 right-0 left-0 w-full h-[550px] rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendUsMessage;
