
export default function Categories({ content }){
    return(
        <div className="my-20 mb-10 max-w-8xl mx-auto px-8 flex flex-col font text-[#303030] text-center font-abz">
            <div className="grid md:grid-cols-2 gap-4 mx-auto font-francois w-full  h-[1400px] md:h-[800px]">
                {content?.categories?.map((category, index) => (
                    <a 
                        href={category.page.length > 0 ? category.page[0].url : "#"} 
                        key={index} 
                        className="relative text-center h-full row-span-1 col-span-1 group overflow-hidden"
                        {...category.image?.$?.url}
                    >
                        <div className="w-full h-full bg-cover bg-center flex group-hover:scale-105 transition-all duration-500 z-30"
                            style={{backgroundImage :  `url(${category.image?.url})`}}>
                        </div>
                        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-10 z-20 flex" >
                            
                        </div>
                        <p className="text-white text-[28px] absolute bottom-5 left-5 z-30 font-medium leading-none tracking-wide">{category?.category_name}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}