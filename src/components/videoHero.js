"use client"
import AnimateIn from "@/lib/AnimateIn";

export default function VideoHero({ showOverlay, content }) {
    if(!content)
        return <div className="-mt-20"></div>

    return (
        <div className="relative  ">
            <div className={"absolute h-full w-full bg-black opacity-50 z-20 " + (showOverlay ? "" : "hidden")}></div>
            <div className="h-[500px] lg:h-[800px] w-full mx-auto snap-center snap-always relative ">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-screen h-full object-cover lg:object-center"
                >
                    <source
                        src={content?.video?.url}
                        type="video/mp4"
                    />
                </video>

                <div className="absolute left-10 right-10 md:left-[50px] xl:left-[200px] top-1/2 transform -translate-y-1/2 max-w-[480px] ">
                    <AnimateIn
                        as="h1"
                        from="opacity-0 translate-y-32 rotate-12"
                        to="opacity-100 translate-y-0"
                        delay={500}
                        duration={300}
                        className="text-white text-[100px] font-bold  font-caveat leading-none "
                        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.4, 0.55, 1.4)" }}
                    >
                        {content?.headline}
                    </AnimateIn>
                    <AnimateIn
                        as="h2"
                        from="opacity-0 scale-0"
                        to="opacity-100 scale-100"
                        delay={800}
                        duration={500}
                        className="text-white font-abz text-xl mt-8"
                    >
                        {content?.body}
                    </AnimateIn>
                </div>
            </div>
        </div>
    )
}