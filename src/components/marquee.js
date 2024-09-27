
export default function Marquee({ content }) {
    return (
        <div className="max-w-8xl mx-auto px-8 my-20">
            <div className="w-full inline-flex flex-nowrap overflow-hidden mt-10">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                    {content?.images?.map((image, index) => (
                        <li key={index}>
                            <img className="w-64 object-scale-down" src={image.image?.url} />
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {content?.images?.map((image, index) => (
                        <li key={index}>
                            <img className="w-64 object-scale-down" src={image.image?.url} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}