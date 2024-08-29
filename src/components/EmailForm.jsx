import { useState } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [buttonText, setButtonText] = useState("Send");

    const style = {
        input: "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none",
        button: "block w-full px-4 py-2 bg-[#1f4717] rounded-md text-white text-xl border border-white hover:text-white hover:bg-[#115d02] transition-all ease-in-out duration-300"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_h0g6o7i";
        const templateID = "template_v89rt68";
        const publicKey = "B7ridoDOnL18NEqYc";

        const templateParams = {
            from_name: name,
            from_email: email,
            from_number: phoneNumber,
            to_name: "Calvary Family",
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                setButtonText("sent!");
                setEmail("");
                setName("");
                setMessage("");
                setPhoneNumber("");

                setTimeout(() => setButtonText('Send'), 3000);

            })
            .catch((error) => {
                console.error("Error sending message", error);
            });
    }
    return (
        <div>
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
                    type="tel"
                    className={style.input}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Your Phone Number"
                    pattern="[0-9]{10}"  
                    required
                />

                <textarea
                    cols="30"
                    rows="6"
                    className={style.input}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type='submit' className={style.button}>{buttonText}</button>
            </form>
        </div>
    )
}

export default EmailForm
