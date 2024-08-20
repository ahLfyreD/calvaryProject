import { useEffect, useState } from "react"

export default function Carousel({ children: content, autoSlide = false, autoSlideInterval = 5000, }) {
    const [curr, setCurr] = useState(0);

    const next = () => {
        setCurr((curr) => (curr === content.length - 1 ? 0 : curr + 1))
    }

    useEffect(() => {
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)

    })
    return (
        <div className={`carousel overflow-hidden relative`}>
            <div 
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)`}}>{content}</div>
            <div className="absolute bottom-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {content.map((_, i) => (
                        <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}