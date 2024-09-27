"use client"
import { useState, useEffect } from 'react'
import Stack, { onEntryChange } from "@/lib/cstack";
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function MegaMenu({ locale, isMenuOpen }){
    const [menuOpen, setMenuOpen] = useState(false);
    const [paneOpen, setPaneOpen] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [subMenuIndex, setSubMenuIndex] = useState(-1);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("mega_menu", locale, [
            "categories.category_page",
            "categories.category_page.categories.items.page"
        ]);
        console.log("mega menu", entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    function showPane(index){
        if(index >= entry?.categories.length)
            return
        setPageIndex(index);
        setPaneOpen(true);
    }

    useEffect(() => {
        if(isMenuOpen !== undefined)
            setMenuOpen(true);
    }, [isMenuOpen])

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading)
        return <div></div>

    return(
        <div>
            <div
                className={`bg-gray-500 opacity-50 top-0 left-0 w-full h-full z-50 fixed duration-200 ease-in ${menuOpen ? "translate-x-0" : "duration-0 -translate-x-full"}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            <div className={`w-96 left-0 top-0 z-50 duration-200 ease-in bg-white fixed h-full font-abz ${menuOpen ? "translate-x-0" : "duration-0 -translate-x-full"}`}>
                <div className="pt-8 pl-20 pr-6">
                    <div className="flex justify-between">
                        <p className="text-[22px] font-medium">{entry?.menu_text}</p>
                        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => {setMenuOpen(false); setPaneOpen(false); setSubMenuIndex(-1)} }/>
                    </div>
                    <div className="flex flex-col gap-1 pt-2">
                        {entry?.categories?.map((category, index) => (
                            <div key={index} className="flex items-center cursor-pointer" onClick={() => showPane(index)}>
                                <p className="text-[14px] mr-auto">{category.text}</p>
                                <ChevronRightIcon className="h-7 w-7" />
                            </div>
                        ))}
                    </div>
                </div>
            </div> 

            <div className={`left-96 right-0 bg-white top-0  h-full z-50 fixed  duration-200 ease-in ${paneOpen ? "translate-x-0 flex" : "duration-0 -translate-x-full hidden"}`}>
                <div className="p-8 w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="h-[250px]  mr-3" src={entry?.categories[pageIndex].category_page[0]?.image?.url} />
                            <p className="text-[22px] mr-auto tracking-wide">{entry?.categories[pageIndex].category_page[0]?.heading}</p>
                        </div>
                        <XMarkIcon className="h-6 w-6 cursor-pointer mb-auto" onClick={() => {setSubMenuIndex(-1); setPaneOpen(false)} }/>
                    </div>

                    <div className="flex mt-10 tracking-wide">
                        <div className="">
                            {entry?.categories[pageIndex].category_page[0]?.categories?.map((category, index) => (
                                <div key={index}>
                                    <div 
                                        className="flex items-center mt-2 w-[200px] justify-between cursor-pointer"
                                        onClick={() => setSubMenuIndex(index)}
                                    >
                                        <p className="text-[17px] font-medium">{category.name}</p>
                                        <ChevronRightIcon className="h-7 w-7 ml-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-l pl-10 ml-10">
                            {subMenuIndex !== -1 && entry.categories[pageIndex].category_page[0]?.categories[subMenuIndex]?.items?.map((item, index) => (
                                <p key={index} className="mt-2 font-light">{item.text}</p>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}