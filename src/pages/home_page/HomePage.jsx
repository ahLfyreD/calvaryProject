import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel';
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {

    const content = [
        {
            text: "Are you looking for a new church to learn and worship with?",
            subText: "We would love to know more about you and your family. The Calvary Familly Church welcomes you.",
            linkText: "Contact Us Today"
        },
        {
            text: "Looking for our latest sermon? Listen or download a copy today.",
            subText: "Access our sermons to hear from the Ministers.",
            linkText: "Listen to Sermons"
        },
        {
            text: "Join us this Sunday for worship!",
            subText: "Let us worship together in one Family.",
            linkText: "Get Directions"
        }
    ]
    return (
        <>
            <section className="w-full bg-cover bg-giveBgImage relative">
                <div className='absolute inset-0 opacity-[70%] bg-black' />
                <div className="relative max-w-7xl mx-auto flex flex-col justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full mb-12'>
                        <h1 className='font-bold text-white text-4xl sm:text-7xl text-center'>WELCOME TO</h1>
                        <h1 className='font-bold text-white text-4xl sm:text-7xl text-center'>CALVARY FAMILY CHURCH</h1>
                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4]'>
                <div className="w-full p-14">
                    <p className='max-w-2xl mx-auto font-medium sm:text-lg text-center text-[#686868]'>Welcome to Calvary Family Church! We believe that God has a place and a purpose for you here at Calvary Family Church. We hope that what you will find is a place where you and your family can experience the love and transforming power of Holy Spirit, in a fresh, new way.</p>
                </div>
            </section>
            <section className='bg-[#1f4717]'>
                <div className="w-full p-5 max-w-6xl mx-auto relative">
                    <Carousel autoSlide={true}>
                        {content.map((item) => (
                            <div className='sm:flex sm:justify-between py-16 min-w-full'>
                                <div className='sm:w-[70%] mb-6'>
                                    <h2 className='text-lg sm:text-[1.6rem] mb-2 text-[white]'>{item.text}</h2>
                                    <p className='text-sm sm:text-lg text-[white]'>{item.subText}</p>
                                </div>
                                {/* <div>
                                    <button className='border border-white text-white p-3 font-semibold  hover:text-[#115d02] hover:bg-white transition-all ease-in-out duration-300'>
                                        {item.linkText}
                                    </button>
                                </div> */}

                            </div>
                        ))}
                    </Carousel>

                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4] p-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-start relative">
                    <div className='bg-pastorBgImage relative border-2 border-[#1f4717] w-full h-[250px] sm:w-[400px] sm:h-[300px] bg-cover sm:absolute sm:top-0 sm:right-0'>
                        <div className='absolute inset-0 opacity-[70%] bg-black' />
                    </div>
                    <div className='relative bg-[#1f4717] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-20  sm:mt-8'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[white]'>You’re Welcome Here!</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Calvary Family Church is a family of revival-minded people yearning for transformation for the people of Akwa Ibom and the world.</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>We believe in looking unto Jesus Christ the author and finisher of our faith. Hebrew 12:2</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Our Misson is to bring HOPE and LOVE through Christ to every family. Isaiah 6:1-3</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Our Vision is to raise and impact generations in our communities ad around the world for Christ. Psalms 145:4-8</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Our Tool: Soul-inspired worship, preaching and teaching the word, effectual fervent prayer and edifying word of prophecy. Psalm 34:3-5</p>
                        <Link to='/who_we_are'>
                            <button className='border border-white text-white p-3 font-semibold hover:text-[#115d02] hover:bg-white transition-all ease-in-out duration-300'>
                                Learn More
                            </button>
                        </Link>

                    </div>
                </div>
            </section>
            <section className='bg-[#f4f4f4]'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Prayer Request</h2>
                                <p className='text-sm sm:text-lg mb-6'>Life's journey brings joys, challenges, and uncertainties. We believe in the power of prayer to offer comfort, strength, and hope. Share your prayer requests - big or small - with our caring church family. <br />

                                    Let us lift you up together in prayer.</p>
                            </div>
                            <div className='w-fit'>
                                <Link to='/prayer' className='flex gap-2 items-center'>
                                    <h2 className='text-lg hover:underline cursor-pointer'>Ask for prayer</h2>
                                    <FaArrowRight />
                                </Link>
                            </div>

                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Who we are</h2>
                                <p className='text-sm sm:text-lg mb-6'>Calvary Family Church is a family of revival-minded people yearning for transformation for the people of Akwa Ibom and the world.<br />

                                    We believe in looking unto Jesus Christ the author and finisher of our faith. Hebrew 12:2</p>
                            </div>
                            <div className='w-fit'>
                                <Link to='/who_we_are' className='flex gap-2 items-center'>
                                    <h2 className='text-lg hover:underline cursor-pointer'>Learn More</h2>
                                    <FaArrowRight />
                                </Link>
                            </div>


                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Give</h2>
                                <p className='text-sm sm:text-lg mb-6'>Calvary Family Church helps people find Christ's love. Your generosity supports sharing Jesus' message with those who need it and empowers believers through God's word.</p>
                            </div>
                            <div className='w-fit'>
                                <Link to='/give' className='flex gap-2 items-center'>
                                    <h2 className='text-lg hover:underline cursor-pointer'>Give</h2>
                                    <FaArrowRight />
                                </Link>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4] p-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-end relative">
                    <div className='bg-pastorImage relative border-2 border-[#1f4717] w-full h-[250px] sm:w-[400px] sm:h-[300px] bg-cover sm:absolute sm:top-0 sm:left-0'>
                    <div className='absolute inset-0 opacity-[70%] bg-black' />
                    </div>
                    <div className='relative bg-[#1f4717] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-20 sm:mt-8'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[white]'>Word from Pastor!</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Calvary Family Church is a family of revival-minded people yearning for transformation for the people of Akwa Ibom and the world.</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>We believe in looking unto Jesus Christ the author and finisher of our faith. Hebrew 12:2</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Our Misson is to bring HOPE and LOVE through Christ to every family. Isaiah 6:1-3</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Our Vision is to raise and impact generations in our communities ad around the world for Christ. Psalms 145:4-8</p>

                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Our Tool: Soul-inspired worship, preaching and teaching the word, effectual fervent prayer and edifying word of prophecy. Psalm 34:3-5</p>
                    </div>
                </div>
            </section>
            <section className='w-full bg-calvaryBgImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[70%] bg-black' />
                <div className="max-w-3xl p-5 mx-auto flex justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full relative p-3 bg-white rounded-2xl flex flex-col justify-center gap-7'>
                        <h1 className='text-center font-light text-3xl sm:text-5xl'>There's a place for you to serve!</h1>
                        <p className='text-center font-light text-lg sm:text-xl'>No matter your age, interests, or skills, we have a ministry where you can connect, grow, and use your gifts to glorify God.

                        </p>
                        <div className='mx-auto'>
                            <Link to='/who_we_are'>
                                <button className='border border-[#115d02] p-3 font-semibold hover:text-white hover:bg-[#115d02] transition-all ease-in-out duration-300'>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage
