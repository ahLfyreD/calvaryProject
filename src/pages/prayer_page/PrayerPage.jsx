import React from 'react'

const PrayerPage = () => {
    return (
        <>
            <section className='w-full bg-prayerImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[70%] bg-black' />
                <div className="max-w-7xl mx-auto flex flex-col justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full mb-12 relative'>
                        <h1 className='font-bold text-white text-4xl sm:text-7xl text-center'>WE BELEIVE IN THE <br /> POWER OF PRAYERS</h1>
                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-start relative">
                    <div className='bg-pastorsImage border-2 border-[#1f4717] w-full h-[250px] sm:w-[400px] sm:h-[300px] bg-cover sm:absolute sm:top-0 sm:right-0'>
                    </div>
                    <div className='relative bg-[#1f4717] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-28 sm:mt-7'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[white]'>Share your Request</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[white]'>Briefly describe your prayer request. All prayer requests are kept confidential.</p>

                        <button className='border border-white text-white p-3 font-semibold hover:text-[#115d02] hover:bg-white transition-all ease-in-out duration-300'>
                            Ask Prayer Request
                        </button>
                    </div>
                </div>
            </section>
            <section className='bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg h-[300px] min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-2xl font-medium mb-4'>Daily Devotionals</h2>
                                <p>Subscribe to our Fresh Start with Jesus - a daily text message with prayers, inspirational messages, and devotionals right to your phone.</p>
                            </div>
                            <div>
                                <h2 className='text-lg hover:underline cursor-pointer'>Subscribe now</h2>
                            </div>

                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg h-[300px] min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-2xl font-medium mb-4'>Join Us for Sunday Services</h2>
                                <p>This Sunday, come experience the transformative power of the Holy Spirit. Yearning for God & community? At Restoration Life Church, you'll find a welcoming space filled with inspiring worship, uplifting messages, and the powerful presence of the Holy Spirit.</p>
                            </div>
                            <div>
                                <h2 className='text-lg hover:underline cursor-pointer'>Get Directions Now</h2>
                            </div>


                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg h-[300px] min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-2xl font-medium mb-4'>Find Your Place</h2>
                                <p>A Diverse Community of Faith! We come from all walks of life, united by a love for God. Experience the warmth of fellowship and the power of belonging in our welcoming church family.</p>
                            </div>
                            <div>
                                <h2 className='text-lg hover:underline cursor-pointer'>Become a Member</h2>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#1f4717] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto sm:flex sm:justify-start relative">
                    <div className='bg-pastorsImage border-2 border-[#f4f4f4]  w-full h-[250px] sm:w-[400px] sm:h-[300px] bg-cover sm:absolute sm:top-0 sm:right-0'>
                    </div>
                    <div className='relative bg-[#f4f4f4] mx-auto sm:mx-0 w-[90%] sm:w-[75%] p-5 sm:p-7 rounded-2xl -mt-20  sm:mt-8'>
                        <h2 className='text-3xl sm:text-5xl mb-3 text-[black]'>Share your Testimonies</h2>
                        <p className='text-lg sm:text-xl mb-3 text-[black]'>The power of faith is amplified when shared. Have you experienced God's love, guidance, or answered prayers in a powerful way? We invite you to share your testimony and inspire others!</p>

                        <p className='text-lg sm:text-xl mb-3 text-[black]'>"Let them give thanks to the Lord for his unfailing love and his wonderful deeds to men." - Psalm 107:15</p>

                        <div className='flex justify-center'>
                            <button className='border border-[#1f4717] text-black p-3 font-semibold hover:text-[white] hover:bg-[#1f4717] transition-all ease-in-out duration-300'>
                                Ask Prayer Request
                            </button>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default PrayerPage
