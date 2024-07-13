import { useState, ChangeEvent, FormEvent } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const emailValidation = (email: string): boolean => {
    return Boolean(
      email
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
    );
  };

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) {
      setErrMsg("Username is required!");
    } else if (!phoneNumber) {
      setErrMsg("Phone number is required!");
    } else if (!email) {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (!subject) {
      setErrMsg("Please give your Subject!");
    } else if (!message) {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your message has been sent successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                    <input
                      aria-label="Your name"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                      value={username}
                      className={`contactInput ${errMsg === "Username is required!" && "outline-designColor"}`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      aria-label="Phone Number"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`contactInput ${errMsg === "Phone number is required!" && "outline-designColor"}`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    aria-label="Email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    value={email}
                    className={`contactInput ${errMsg === "Please give your Email!" && "outline-designColor"}`}
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    aria-label="Subject"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                    value={subject}
                    className={`contactInput ${errMsg === "Please give your Subject!" && "outline-designColor"}`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    aria-label="Message"
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    value={message}
                    className={`contactTextArea ${errMsg === "Message is required!" && "outline-designColor"}`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
