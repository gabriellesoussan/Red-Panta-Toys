
export default function Footer({ params }){
    return(
        <div className="w-full p-10 bg-[#BAB994] text-center text-white font-abz flex flex-col">
            <img className="w-64 h-64 mx-auto" src="https://images.contentstack.io/v3/assets/blte31c2877ed90e8d6/blt37615334d4407da5/66ab969d2b7be52c30a78af3/rp-logo-transparent.png" />
            <p className="mt-6">315 Montgomery St., Suite 909 San Francisco, CA 94104</p>
            <p className="mt-4">1 (415) 255-5955</p>

            <div className="flex flex-col md:flex-row gap-8 mx-auto uppercase mt-10">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Returns</p>
            </div>
        </div>
    )
}