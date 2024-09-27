
export default function FullWidthBanner({ content }){
    return(
        <div className="w-full bg-cover h-[500px] bg-bottom my-20 relative"
            style={{backgroundImage : `url(${content?.image?.url})`}}
            {...content?.image?.$?.url}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-40" />
            <div className="relative text-white z-50 max-w-8xl mx-auto px-8 font-francois tracking-wide py-5 h-full flex flex-col justify-end">
                <div className="max-w-[600px]">
                <p className="text-[40px]">{content?.headline}</p>
                <p className="font-abz font-light whitespace-pre-wrap">{content?.body}</p>
                </div>
            </div>
        </div>
    )
}