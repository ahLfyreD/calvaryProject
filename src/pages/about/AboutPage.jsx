import React from 'react'
import './About.css'


const AboutPage = () => {
    const images = [
        {
            id: 1,
            image: "/assets/images/calvaryGallery1.jpg"
        },
        {
            id: 2,
            image: '/assets/images/calvaryGallery2.jpg'
        },
        {
            id: 3,
            image: '/assets/images/calvaryGallery3.jpg'
        },
        {
            id: 4,
            image: '/assets/images/calvarygallery4.jpg'
        },
        {
            id: 5,
            image: '/assets/images/calvaryGallery5.jpg'
        },
        {
            id: 6,
            image: '/assets/images/calvaryGallery6.jpg'
        },
        {
            id: 7,
            image: '/assets/images/calvaryGallery7.jpg'
        },
        {
            id: 8,
            image: '/assets/images/calvaryGallery8.jpg'
        },
        {
            id: 9,
            image: '/assets/images/calvaryGallery9.jpg'
        },
        {
            id: 10,
            image: '/assets/images/calvaryGallery10.jpg'
        }
    ]
    return (
        <>
            <section className='w-full bg-aboutBgImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[70%] bg-black' />
                <div className="max-w-7xl mx-auto flex flex-col justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full mb-12 relative'>
                        <h1 className='font-bold text-white text-4xl sm:text-7xl text-center'>WE BELEIVE IN THE <br /> POWER OF PRAYERS</h1>
                    </div>
                </div>
            </section>
            <section className='w-full relative py-10'>
                <div className="max-w-7xl p-4 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className='shadow-md relative bg-[#1f4717] w-full lg:w-[50%] p-5 sm:p-7 rounded-2xl mt-7'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[white]'>About Us</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[white]'>We are a multicultural family, God’s family. We come from all walks of life and nationalities. Our goal is to glorify God and His Son Jesus Christ,  raise disciples that carry the demeanor of the kingdom of Heaven, reach the lost with the gospel, create an atmosphere where the people can encounter the practical manifestation of the Holy Spirit, and spread the gospel among all nations, beginning in Akwa Ibom State.</p>
                    </div>
                    <div className='w-full lg:w-[50%] p-5 sm:p-7 flex flex-col gap-5'>
                        <div>
                            <h3 className='text-3xl font-medium mb-1'>Our Mandate</h3>
                            <p className='text-xl font-normal'>To redeem mankind to the likeness of God and to restore them to dominion and Authority.</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-medium mb-1'>Our Vision</h3>
                            <p className='text-xl font-normal'>To raise and impact generations in our communities ad around the world for Christ. Psalms 145:4-8</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-medium mb-1'>Our Mission</h3>
                            <p className='text-xl font-normal'>To bring HOPE and LOVE through Christ to every family. Isaiah 6:1-3</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='shadow-xl bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-start relative">
                    <div className='border-2 bg-pastorsImage bg-cover border-[#1f4717] w-full h-[250px] sm:w-[400px] sm:h-[300px] sm:absolute sm:top-0 sm:right-0'>
                    </div>
                    <div className='relative bg-[#1f4717] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-28 sm:mt-7'>
                        <h2 className='text-2xl sm:text-4xl mb-3 text-[white]'>Pastor & Mrs Isaiah James</h2>
                        <p className='text-lg sm:text-xl text-[white]'>Leading with Faith and Vision</p>
                        <p className='text-lg sm:text-xl text-[white]'>Meet our pastors who are dedicated followers of Jesus Christ, who use our unique God-given gifts, anointing, and passions to spread God’s Word across the globe, as well as to help one another grow and follow the calling God has placed on our lives! Daniel and Judith Imagoro are the founding and lead pastors of Restoration Life Church. They are passionate about revival and families. For more than one decade they have helped strengthen the marriages of thousands of people across the world and Coach singles on how to find the will of God in choosing a spouse. Our Pastors have seen God do the impossible miracles in the lives of so many. </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full p-5 max-w-7xl mx-auto relative">
                    <div className='logos overflow-hidden p-11 relative'>
                        <div className="logo_slides flex gap-7 whitespace-nowrap">

                            {images.map((logo) => {
                                return <>
                                    <div
                                        className='rounded-md min-w-[200px] sm:min-w-[400px] h-[150px] sm:h-[350px] bg-cover'
                                        style={{ backgroundImage: `url(${logo.image})` }}
                                    >
                                        {/* <img className='w-full h-full' src={logo.image} alt="" /> */}
                                    </div>

                                </>

                            })}
                            {images.map((logo) => {
                                return <>
                                    <div
                                        className='min-w-[200px] sm:min-w-[400px] h-[150px] sm:h-[350px] bg-cover'
                                        style={{ backgroundImage: `url(${logo.image})` }}
                                    >
                                        {/* <img className='w-full h-full' src={logo.image} alt="" /> */}
                                    </div>

                                </>

                            })}

                        </div>
                    </div>
                </div>

            </section>

            <section className='bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <h1 className='text-center text-2xl sm:text-4xl mb-3 font-semibold'>MEET OUR MINISTERS</h1>
                    <div className='mx-auto w-full flex flex-wrap gap-3 m-auto justify-between items-center' >
                        <div className='mx-auto rounded-lg w-[300px] p-5 flex flex-col items-center justify-around'>
                            <div className='w-40 h-40 rounded-full bg-pastorImage bg-cover'>

                            </div>
                            <div>
                                <h2 className='text-lg text-center'>Pastor Isaiah James</h2>
                                <p className='text-center'>General Overseer and Pastoral care director at Calvary Family Church</p>
                            </div>


                        </div>
                        <div className='mx-auto rounded-lg w-[300px] p-5 flex flex-col items-center justify-around'>
                            <div className='w-40 h-40 rounded-full bg-pastorImage bg-cover'>

                            </div>
                            <div>
                                <h2 className='text-lg text-center'>Pastor Isaiah James</h2>
                                <p className='text-center'>General Overseer and Pastoral care director at Calvary Family Church</p>
                            </div>


                        </div>
                        <div className='mx-auto rounded-lg w-[300px] p-5 flex flex-col items-center justify-around'>
                            <div className='w-40 h-40 rounded-full bg-pastorImage bg-cover'>

                            </div>
                            <div>
                                <h2 className='text-lg text-center'>Pastor Isaiah James</h2>
                                <p className='text-center'>General Overseer and Pastoral care director at Calvary Family Church</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full bg-calvaryBgImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[70%] bg-black' />
                <div className="relative max-w-3xl p-5 mx-auto flex justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full relative p-3 bg-white rounded-2xl flex flex-col justify-center gap-7'>
                        <h1 className='text-center font-light text-3xl sm:text-5xl'>Connect With Our Leaders</h1>
                        <p className='text-center font-light text-lg sm:text-xl'>We encourage you to connect with our leadership team! They are dedicated to serving our community and are available to answer questions, offer guidance, or simply connect on a personal level.
                        </p>
                        <div className='mx-auto'>
                            <button className='border border-[#115d02] p-3 font-semibold hover:text-white hover:bg-[#115d02] transition-all ease-in-out duration-300'>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutPage
