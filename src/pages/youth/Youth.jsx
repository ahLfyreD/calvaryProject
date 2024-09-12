import React from 'react'
import EmailForm from '../../components/EmailForm'

const Youth = () => {
    return (
        <>
            <section className='w-full bg-youthImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[70%] bg-black' />
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
            <section className='bg-[#f4f4f4]'>
                <div className="w-full p-5">
                    <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 gap-5 mb-20">
                        <div>
                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333] '>WEEKLY ACTIVITY</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-10'>Youth Meeting every Wednesday 5pm</p>

                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333] '>SPECIAL EVENT</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-10'>Youth Service third Sunday of every month <span className='text-[#1f4717]'>HE LEFT 99 TO FIND ONE</span></p>


                            <div className="w-fit border-b-2 border-[#333333] mb-5">
                                <h2 className='text-xl lg:text-3xl font-semibold text-[#333333] '>COMMUNITY SERVICE</h2>
                            </div>

                            <p className='max-w-2xl mx-auto font-medium sm:text-lg text-[#686868] mb-4'>We are the hands and feet of Christ, called to serve with compassion and love. In every act of kindness we reflect God's grace to our community</p>


                        </div>
                        <div className='bg-youthBgImage bg-cover relative'>
                            <div className='absolute inset-0 opacity-[40%] bg-black' />

                        </div>

                    </div>


                </div>
            </section>
            <section className='bg-[#f4f4f4] py-10'>
                <div className="w-full p-5 max-w-6xl mx-auto">
                    <h1 className='text-center text-2xl sm:text-4xl mb-3 font-semibold'>Leadership Team</h1>
                    <div className='mx-auto w-full flex flex-wrap gap-3 m-auto justify-between items-center' >
                        <div className='mx-auto rounded-lg w-[300px] p-5 flex flex-col items-center justify-around'>
                            <div className='w-40 h-40 rounded-full bg-youthLeader bg-cover'>

                            </div>
                            <div>
                                <h2 className='text-lg text-center font-bold'>Pastor Gabriel</h2>
                                <p className='text-center'>Youth Pastor at Calvary Family Church</p>
                            </div>


                        </div>
                        <div className='mx-auto rounded-lg w-[300px] p-5 flex flex-col items-center justify-around'>
                            <div className='w-40 h-40 rounded-full bg-ministerAyo bg-cover'>

                            </div>
                            <div>
                                <h2 className='text-lg text-center font-bold'>Minister Ayo</h2>
                                <p className='text-center'>Youth Minister at Calvary Family Church</p>
                            </div>


                        </div>
                        <div className='mx-auto rounded-lg w-[300px] p-5 flex flex-col items-center justify-around'>
                            <div className='w-40 h-40 rounded-full bg-choirLeader bg-cover'>

                            </div>
                            <div>
                                <h2 className='text-lg text-center font-bold'>Victor</h2>
                                <p className='text-center'>Choir Leader at Calvary Family Church</p>
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
