import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import logo from '/assets/images/calvaryLogo.png?url'

const Modal = ({ showModal }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Send");

    const style = {
        input: "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none",
        button: "block w-full px-4 py-2 bg-[#1f4717] rounded-md text-white text-xl border border-[#115d02] hover:text-white hover:bg-[#115d02] transition-all ease-in-out duration-300"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const serviceID = "service_623z2fn";
        const templateID = "template_nhmnwae";
        const publicKey = "nvfqUvp5ilMeuahkC";

        const templateParams = {
            from_name: name,
            from_email: email,
            from_number: phoneNumber,
            to_name: "Calvary Family",
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                setButtonText("Sent!");
                setEmail("");
                setName("");
                setMessage("");
                setPhoneNumber("");

                setTimeout(() => setButtonText('Send'), 3000);

            })
            .catch((error) => {
                console.error("Error sending message", error);
            }).finally(() => {
                setLoading(false);
            });
    }
    return (
        <div className='bg-homeImage bg-cover w-screen h-screen p-6 bg-[#f4f4f4]'>
            <div className='shadow-md min-w-80 w-[50%] mx-auto rounded-xl relative p-7 bg-white'>
                <div className='absolute right-7 top-7'>
                    <FaTimes className='cursor-pointer' onClick={showModal} />
                </div>
                <div className='w-12 h-12 lg:w-20 lg:h-20'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className='text-center mb-7 text-lg sm:text-xl font-semibold'>Send Us a Message</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            placeholder='Full Name'
                            className={style.input}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            placeholder='Email'
                            className={style.input}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className={style.input}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Your Phone Number"
                            required
                        />
                        <textarea
                            cols="30"
                            rows="5"
                            className={style.input}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type='submit' className={style.button}>{loading ? "Sending..." : buttonText}</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Modal
