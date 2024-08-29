import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack';

const Donate = () => {
    const publicKey = "pk_test_a85220d8573bb954bd79bdf89114ab895d9652aa"


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [purpose, setPurpose] = useState("");

    const componentProps = {
        email,
        amount: amount * 100,
        metadata: {
            name,
            phoneNumber,
            purpose
        },
        publicKey,
        text: 'Give',
        onSuccess: () => {
            alert('Transaction successful');
            setEmail('');
            setName('');
            setAmount('');
            setPhoneNumber('');
            setPurpose('');
        },
        onClose: () => alert('Transaction was not completed')
    }

    const style = {
        input: "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none",
        button: "block w-full px-4 py-2 bg-[#1f4717] rounded-md text-white text-xl"
    }


    return (
        <div>
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
                type="number"
                value={amount}
                placeholder='Enter your Amount'
                className={style.input}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="text"
                value={purpose}
                placeholder='Purpose for Payment. e.g Offering, Tithe etc'
                className={style.input}
                onChange={(e) => setPurpose(e.target.value)}
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
            <PaystackButton className={style.button} {...componentProps} />

        </div>
    )
}

export default Donate
