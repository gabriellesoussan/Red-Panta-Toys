"use client"
import { useState, useEffect } from 'react'
import Stack, { onEntryChange } from "@/lib/cstack";
import { useRouter } from "next/navigation";
import { UserIcon, MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import MegaMenu from './megaMenu';

export default function Header({ locale }) {
    const [menuOpen, setMenuOpen] = useState(undefined);
    const [paneOpen, setPaneOpen] = useState(false);
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("header", locale, [
            [
                'nav_items.page'
            ]
        ]);
        console.log("header", entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    function changeLang(language) {
        router.push("/" + language);
      }

    if (isLoading)
        return <div></div>

    return (
        <div className="relative">
            <div className="h-[80px] relative z-50 items-center flex font-abz border-b shadow">
                <div className="absolute w-[150px] h-[80px] bg-white left-1/2 transform -translate-x-1/2 z-20"></div>
                <div className="absolute shadow-lg left-1/2 transform -translate-x-1/2 bg-white rounded-full w-[115px] h-[115px]  z-10 flex"></div>
                <a href="/" className="absolute left-1/2 transform -translate-x-1/2  w-[115px] h-[115px]  z-20 flex items-center">
                    <img className="h-[80px] w-[80px] mx-auto mt-3 z-20" src={entry?.logo?.url} />
                </a>

                <div className="flex ml-16 text-lg gap-10">
                    {entry?.nav_items?.map((item, index) => {
                        if (index === 0) {
                            return <p 
                                        key={index} 
                                        onClick={() => setMenuOpen((menuOpen ? !menuOpen : true))}
                                        className="cursor-pointer"
                                    >
                                        {item.text}
                                    </p>
                        }
                        else {
                            return <a key={index} href={item.page.length > 0 ? item.page[0].url : "#"} className="hidden lg:block">{item.text}</a>
                        }
                    })}
                </div>

                <div className="flex mr-16 ml-auto text-lg gap-10 items-center">
                    <MagnifyingGlassIcon className="h-5 w-5 hidden lg:block" />
                    <ShoppingCartIcon className="h-5 w-5 hidden lg:block" />
                    <UserIcon className="h-5 w-5 hidden lg:block" />
                    <Bars3Icon className="h-5 w-5 lg:hidden" />
                    <select
                        className="outline-none bg-transparent"
                        value={locale}
                        onChange={(e) => {
                            changeLang(e.target.value);
                        }}
                    >
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                        <option value="fr">FR</option>
                        <option value="de">DE</option>
                    </select>
                </div>
            </div>

            <MegaMenu locale={locale} isMenuOpen={menuOpen} />
        </div>
    )
}