
export default function TextAndImage({ content }) {
    return (
        <div className="my-20 w-full bg-[#F4F4F4]">
            <div className="max-w-8xl mx-auto px-8 py-20 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    <img src={content?.image?.url} />
                </div>

                <div className="lg:w-1/2 my-auto lg:max-w-[500px]">
                    <p className="font-francois text-[32px]">{content?.headline}</p>
                    <p className="font-abz text-sm mt-4 whitespace-pre-wrap leading-6">{content?.body}</p>
                    <a href={content.page.length > 0 ? content.page[0].url : "#"} className="bg-red-600 text-white mt-4 py-2 px-7 inline-block">{content?.button_text}</a>
                </div>
            </div>
        </div>
    )
}