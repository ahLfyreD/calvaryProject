import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";


const PrayerPage = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [buttonText, setButtonText] = useState(<FaArrowRight />);

    const style = {
        input: "block w-full flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none",
        button: "rounded-md text-xl"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_hge1zmy";
        const templateID = "template_5hfuols";
        const publicKey = "B7ridoDOnL18NEqYc";

        const templateParams = {
            from_number: phoneNumber,
            to_name: "Calvary Family",
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                setButtonText(<SiTicktick />);
                setPhoneNumber("");

                setTimeout(() => setButtonText('Send'), 3000);

            })
            .catch((error) => {
                console.error("Error sending message", error);
            });
    }


    return (
        <>
            <section className='w-full bg-prayerImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[30%] bg-black' />
                <div className="max-w-7xl mx-auto flex flex-col justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full mb-12 relative'>
                        <h1 className='font-bold text-white text-4xl sm:text-7xl text-center'>WE BELEIVE IN THE <br /> POWER OF PRAYERS</h1>
                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-end relative">
                    <div className='bg-pastorWifeImage relative border-2 border-[#1f4717] w-full h-[250px] sm:w-[400px] sm:h-[300px] bg-cover sm:absolute sm:top-0 sm:left-0'>
                        <div className='absolute inset-0 opacity-[30%] bg-black' />
                    </div>
                    <div className='relative bg-[#1f4717] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-28 sm:mt-7'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[white]'>Share your Request</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Briefly describe your prayer request. All prayer requests are kept confidential.</p>

                        <button className='border border-white text-white p-3 font-semibold hover:text-[#115d02] hover:bg-white transition-all ease-in-out duration-300'>
                            <a href="https://forms.gle/FtuxHvQBxPd13isQ9" target='_blank'>
                                Ask Prayer Request
                            </a>
                        </button>
                    </div>
                </div>
            </section>
            <section className='bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg  min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Daily Devotionals</h2>
                                <p className='text-lg sm:text-xl font-normal'>Subscribe to our Fresh Start with Jesus - a daily text message with prayers, inspirational messages, and devotionals right to your phone.</p>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className='flex gap-5 items-center'>
                                        <input
                                            type="tel"
                                            className={style.input}
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Your Phone Number"
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                        <button type='submit' className={style.button}>{buttonText}</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg  min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Join Us for Sunday Services</h2>
                                <p className='text-lg sm:text-xl'>This Sunday, come experience the transformative power of the Holy Spirit. Yearning for God & community? At Calvary Family Church, you'll find a welcoming space filled with inspiring worship, uplifting messages, and the powerful presence of the Holy Spirit.</p>
                            </div>
                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Find Your Place</h2>
                                <p className='text-lg sm:text-xl font-normal'>A Diverse Community of Faith! We come from all walks of life, united by a love for God. Experience the warmth of fellowship and the power of belonging in our welcoming church family.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#1f4717] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-start relative">
                    <div className='bg-testBgImage relative border-2 border-[#f4f4f4]  w-full h-[250px] sm:w-[400px] sm:h-[300px] bg-cover sm:absolute sm:top-0 sm:right-0'>
                        <div className='absolute inset-0 opacity-[30%] bg-black' />
                    </div>
                    <div className='relative bg-[#f4f4f4] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-20  sm:mt-8'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[black]'>Share your Testimonies</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[black]'>The power of faith is amplified when shared. Have you experienced God's love, guidance, or answered prayers in a powerful way? We invite you to share your testimony and inspire others!</p>

                        <p className='text-lg sm:text-xl mb-3 text-[black]'>"Let them give thanks to the Lord for his unfailing love and his wonderful deeds to men." - Psalm 107:15</p>

                        <div className='flex justify-center'>
                            <button className='border border-[#1f4717] text-black p-3 font-semibold hover:text-[white] hover:bg-[#1f4717] transition-all ease-in-out duration-300'>
                                <a href="https://forms.gle/FtuxHvQBxPd13isQ9" target='_blank'>
                                    Share Testimony
                                </a>
                            </button>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default PrayerPage
