"use client"
import StarRating from "@/helpers/StarRating";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";

export default function ProductCarousel({ content }) {
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxScrollWidth = useRef(0);

    function moveRight() {
        if (carousel.current !== null && carousel.current.offsetWidth * currentIndex < maxScrollWidth.current) {
            setCurrentIndex((prevState) => prevState + 1);
        }
        else {
            setCurrentIndex(0)
        }
    }

    function moveLeft() {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    }

    useEffect(() => {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, [])

    return (
        <div className="max-w-8xl mx-auto px-8 relative group flex flex-col font-abz my-16 ">
            <p className="font-francois text-[32px] mx-auto">{content?.headline}</p>
            <div className="relative mt-2">
                <div
                    className="absolute right-0 top-2 bottom-2 px-2 text-white text-opacity-50 flex items-center cursor-pointer"
                    onClick={moveRight}
                >
                    <ChevronRightIcon className="h-16 w-16 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]" />
                </div>
                <div
                    className="absolute left-0 top-2 bottom-2 px-2 text-white text-opacity-50 flex items-center cursor-pointer"
                    onClick={moveLeft}
                >
                    <ChevronLeftIcon className="h-16 w-16 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]" />
                </div>
                <div
                    ref={carousel}
                    className="flex overflow-hidden scroll-smooth "
                >
                    {content?.products?.data?.map((item, index) => (
                        <a href={"/pdp/" + item.url} key={index} className="lg:min-w-[20%] md:min-w-[25%] min-w-[50%] p-5">
                            <div className="aspect-square flex">
                                <img className="m-auto" src={item?.images[0].url} />
                            </div>
                            <p className="mt-5 text-sm">{item.title?.en}</p>
                            <p className="font-roboto tracking-wider font-light mt-1 uppercase ">{item.custom_data?.manufacturer}</p>
                            <div className="flex pt-1">
                                <StarRating rating={item.custom_data?.stars} color={"#D1A261"} size={18} />
                                <p className="ml-2">({(item.custom_data?.stars ? item.custom_data?.stars : "0")})</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="">{item.price}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-4 gap-2 items-center hidden lg:flex">
                {content?.products?.data?.map((indicator, index) => {
                    if(index % 5 === 0){
                        return(
                            <div
                                key={index}
                                className={"rounded-full h-3.5 w-3.5 cursor-pointer " + (currentIndex === (index/5) ? "bg-black" : "bg-[#D1D1D1]")}
                                onClick={() => setCurrentIndex(index/5)}
                            ></div>
                        )
                    }
                })}
            </div>
            <div className="mx-auto mt-4 gap-2 items-center hidden md:flex lg:hidden">
                {content?.products?.data?.map((indicator, index) => {
                    if(index % 4 === 0){
                        return(
                            <div
                                key={index}
                                className={"rounded-full h-3.5 w-3.5 cursor-pointer " + (currentIndex === (index/4) ? "bg-black" : "bg-[#D1D1D1]")}
                                onClick={() => setCurrentIndex(index/4)}
                            ></div>
                        )
                    }
                })}
            </div>
            <div className="mx-auto mt-4 gap-2 items-center flex md:hidden">
                {content?.products?.data?.map((indicator, index) => {
                    if(index % 2 === 0){
                        return(
                            <div
                                key={index}
                                className={"rounded-full h-3.5 w-3.5 cursor-pointer " + (currentIndex === (index/2) ? "bg-black" : "bg-[#D1D1D1]")}
                                onClick={() => setCurrentIndex(index/2)}
                            ></div>
                        )
                    }
                })}
            </div>
        </div>
    )
}