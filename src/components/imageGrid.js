
export default function ImageGrid({ content }) {

    function getSpans(row, col) {
        return "lg:row-span-" + row + " lg:col-span-" + col;
    }

    return (
        // <div className="max-w-8xl mx-auto px-8 grid lg:grid-cols-4 lg:h-[750px] my-20 gap-4 font-francois tracking-wide">
        //     <div className="relative lg:row-span-2 lg:col-span-2 bg-cover bg-center h-[400px] lg:h-full flex items-end"
        //         style={{backgroundImage : `url(https://images.contentstack.io/v3/assets/blte31c2877ed90e8d6/blt621eef18b4467cdc/66d6333826adee4b8af67bad/plushies.avif)`}}
        //     >
        //         <div className="absolute left-0 top-0 w-full h-full bg-black opacity-20 z-40" />
        //         <p className="relative ml-5 mb-5 text-white text-[28px] z-50">All plushies</p>
        //     </div>

        //     <div className="relative lg:row-span-1 lg:col-span-1 bg-cover bg-center h-[400px] lg:h-full flex items-end"
        //         style={{backgroundImage : `url(https://images.contentstack.io/v3/assets/blte31c2877ed90e8d6/blt9a675af16365b13a/66d63338be3e56874c631d74/homemade_plushies.avif`}}
        //     >
        //         <div className="absolute left-0 top-0 w-full h-full bg-black opacity-20 z-40" />
        //         <p className="relative ml-5 mb-5 text-white text-[28px] z-50">Hand crafted</p>
        //     </div>

        //     <div className="relative lg:row-span-1 lg:col-span-1 bg-cover bg-center h-[400px] lg:h-full flex items-end"
        //         style={{backgroundImage : `url(https://images.contentstack.io/v3/assets/blte31c2877ed90e8d6/bltc21565d338797cdf/66d63338a0f38052bbf6d686/plushy_repair.avif)`}}
        //     >
        //         <div className="absolute left-0 top-0 w-full h-full bg-black opacity-20 z-40" />
        //         <p className="relative ml-5 mb-5 text-white text-[28px] z-50">Plushy repair</p>
        //     </div>

        //     <div className="relative lg:row-span-1 lg:col-span-2 bg-cover bg-center h-[400px] lg:h-full flex items-end"
        //         style={{backgroundImage : `url(https://images.contentstack.io/v3/assets/blte31c2877ed90e8d6/blt39055c37190466e2/66d633383bf41ea248a40e23/todler_stuffies.avif)`}}
        //     >
        //         <div className="absolute left-0 top-0 w-full h-full bg-black opacity-20 z-40" />
        //         <p className="relative ml-5 mb-5 text-white text-[28px] z-50">For toddlers</p>
        //     </div>
        // </div>

        <div className="max-w-8xl mx-auto px-8 grid lg:grid-cols-4 lg:h-[750px] my-20 gap-4 font-francois tracking-wide">
            {content?.images?.map((image, index) => (
                <div  key={index} className={"relative bg-cover bg-center h-[400px] lg:h-full flex items-end " + getSpans(image.row_span, image.column_span)}
                    style={{backgroundImage : `url(${image.image?.url})`}}
                    {...image?.$?.image}
                >
                    <div className="absolute left-0 top-0 w-full h-full bg-black opacity-20 z-40" />
                    <p className="relative ml-5 mb-5 text-white text-[28px] z-50">{image.text}</p>
                </div>
            ))}
        </div>
    )
}