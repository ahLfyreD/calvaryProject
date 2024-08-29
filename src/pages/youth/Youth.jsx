import React from 'react'
import EmailForm from '../../components/EmailForm'

const Youth = () => {
    return (
        <>
            <section className='w-full bg-youthImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[30%] bg-black' />
                <div className="max-w-7xl mx-auto flex flex-col justify-center h-[50vh] lg:h-screen items-center">
                    <div className='w-full mb-12 relative flex justify-center items-center'>
                        <div>
                            <h1 className='font-bold text-white text-4xl sm:text-7xl text-center'>Youth Ministry</h1>
                            <h2 className='font-bold text-white text-2xl sm:text-5xl text-center'>Empowering the Next Generation</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4]'>
                <div className="w-full p-14 flex justify-center flex-col items-center">
                    <h2 className='font-bold text-[#686868] text-lg sm:text-2xl text-center mb-5'>Welcome to the Youth Ministry</h2>
                    <p className='max-w-2xl mx-auto font-medium sm:text-lg text-center text-[#686868] mb-7 '>Where we thrive in nuturing spiritual growth, community and leadership among the youth.</p>
                </div>
            </section>
            <section className='bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <h1 className='font-bold text-black text-xl sm:text-3xl text-center mb-12'>What We Do!</h1>
                    <div className='grid lg:grid-cols-3 lg:gap-5 m-auto'>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg  min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Weekly activity</h2>
                                <p className='text-lg sm:text-xl font-normal'>Subscribe to our Fresh Start with Jesus - a daily text message with prayers, inspirational messages, and devotionals right to your phone.</p>
                            </div>

                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg  min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Special Events</h2>
                                <p className='text-lg sm:text-xl'>This Sunday, come experience the transformative power of the Holy Spirit. Yearning for God & community? At Calvary Family Church, you'll find a welcoming space filled with inspiring worship, uplifting messages, and the powerful presence of the Holy Spirit.</p>
                            </div>
                        </div>
                        <div className='mb-10 shadow-sm shadow-[#686868] rounded-lg min-w-[300px] w-full p-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='text-xl sm:text-2xl font-medium mb-4'>Community Service</h2>
                                <p className='text-lg sm:text-xl font-normal'>A Diverse Community of Faith! We come from all walks of life, united by a love for God. Experience the warmth of fellowship and the power of belonging in our welcoming church family.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className='bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <h1 className='text-center text-2xl sm:text-4xl mb-3 font-semibold'>Leadership Team</h1>
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
            <section>
                <div className="w-full p-5 max-w-6xl mx-auto relative">
                    <div className='sm:flex sm:justify-center py-2 min-w-full'>
                        <div className='mb-6 w-full sm:w-[50%] shadow-md p-6 bg-[#f4f4f4]'>
                            <h2 className='text-lg sm:text-[1.6rem] mb-5 text-center'>Contact Us</h2>
                            <EmailForm />
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Youth
