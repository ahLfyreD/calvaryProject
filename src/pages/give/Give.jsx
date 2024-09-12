import React from 'react'
import Donate from '../../components/Donate'

const Give = () => {
    const data = [
        {
            title: "Support Our Ministry",
            description: "Your gifts allow us to offer life-changing programs for all ages, from children's ministries to outreach programs."
        },
        {
            title: "Strengthens our worship",
            description: "Your support helps us maintain our facilities, purchase resources, and provide a welcoming space for worship."
        },
        {
            title: "Furthers our mission",
            description: "Your generosity allows us to reach out to our community and share the Gospel message."
        },

    ]

    return (
        <>
            <section className='w-full bg-homeImage bg-cover relative'>
                <div className='absolute inset-0 opacity-[70%] bg-black' />
                <div className="p-5 max-w-3xl mx-auto flex flex-col justify-center h-[50vh] lg:h-screen items-center">
                    <div className='relative w-full p-6 text-white rounded-2xl mb-12 flex flex-col justify-center gap-7'>
                        <h1 className='text-center font-medium text-3xl sm:text-5xl'>Your generosity fuels our mission!</h1>
                        <p className='text-center font-medium text-lg sm:text-xl'>At Calvary Family Church, we strive to spread the love of Christ, nurture spiritual growth, and serve our community. Your financial support plays a vital role in making this possible.
                        </p>
                    </div>
                </div>
            </section>
            <section className='shadow-xl bg-[#f4f4f4]'>
                <div className="w-full p-7">
                    <div className='mb-5 mx-auto'>
                        <h1 className='text-center font-light text-3xl sm:text-5xl'>
                            How Your Giving Makes a Difference:
                        </h1>
                    </div>
                    <div className='mx-auto max-w-3xl'>
                        {data.map((items) => {
                            return <div className='w-full mb-6 bg-[#1f4717] rounded-2xl text-white'>
                                <div className='p-3'>
                                    <p className='text-xl'>{items.title}</p>
                                </div>
                                <div className='bg-[#11250d] p-3 rounded-b-2xl'>
                                    <p className='text-lg'>{items.description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full p-14">
                    <div className='mb-6'>
                        <h1 className='text-center font-light text-3xl sm:text-5xl'>Enter Details for Donation:</h1>
                    </div>

                    <div className='max-w-md w-full mx-auto'>
                        <Donate />
                    </div>
                </div>

            </section>

        </>
    )
}

export default Give
