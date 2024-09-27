
export default function ProductBanner({ content }){
    return(
        <div className="max-w-8xl mx-auto px-8 flex flex-col my-20">
            <p className="font-francois text-[32px] mx-auto">{content?.headline}</p>

            <div className="grid lg:grid-cols-3 mt-4 gap-4">
                {content?.products?.data?.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="flex">
                            <img className="mx-auto" src={item.images[0]?.url} />
                        </div>

                        <p className="font-francois text-[24px] mt-2">{item.title?.en}</p>
                        <p className="font-abz mt-2 tracking-wide">{item.description.en}</p>

                        <a className="border border-red-600 text-red-600 py-2 px-7 mt-4 rounded inline-block">Shop</a>
                    </div>
                ))}
                
            </div>
        </div>
    )
}