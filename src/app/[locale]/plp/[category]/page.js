"use client"
import { useState, useEffect } from 'react';
import Stack, { onEntryChange } from '@/lib/cstack'
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Header from "@/components/header";
import StarRating from '@/helpers/StarRating';

export default function Page({ params }) {
    const [entry, setEntry] = useState({});
    const [products, setProducts] = useState({});

    const getContent = async () => {
        const entry = await Stack.getElementByUrlWithRefs(
            "plp",
            "/plp/" + params.category,
            params.locale,
            [
                "filtres",
                "banners.banner"
            ]
        );
        console.log("plp", entry);
        setEntry(entry);

        if (entry?.product_category?.data[0]?._id) {
            getCategory(entry?.product_category?.data[0]?._id);
        }
        else
            setProducts({})
    };

    const getCategory = async (id) => {
        console.log('fetching', id);
        let result = await fetch('/api/categories/' + id, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("category products", result);
                setProducts(result);
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        onEntryChange(getContent);
    }, [])

    function getProductBlock(index) {
        let blocks = [];
        for (let x = 0; x < 6; x++) {
            if (index + x > products.products?.length - 1)
                break;
            blocks.push(
                <a href={"/pdp/" + products?.products[index + x].url} key={x} className="w-[320px] rounded-lg border-b-[5px] border-[#da3833] px-2 shadow-lg flex flex-col">
                    <img className="w-[250px] h-[250px] object-contain mx-auto" src={products?.products[index + x]?.images[0]?.url} />
                    <p className="text-[15px] font-light mt-2 tracking-wide">{products?.products[index + x]?.title?.en}</p>
                    <div className="mt-1 flex">
                        <StarRating rating={products?.products[index + x]?.custom_data?.stars} color={"#D1A261"} size={18} /> 
                        <p className="ml-2">({products?.products[index + x]?.custom_data?.stars})</p>
                    </div>
                    <p className="text-sm font-medium">{products?.products[index + x]?.custom_data?.model}</p>
                    <div className="flex mt-5 mb-2">
                        <p className="text-[24px] font-medium ">{products?.products[index + x]?.price}</p>
                    </div>
                </a>
            )
        }
        return blocks;
    }

    return (
        <div>
            <Header locale={params.locale} />

            <div className="max-w-8xl mx-auto font-roboto tracking-wide">
                <div className="flex">
                    <div className="min-w-[300px] mt-10">
                        <p className="text-[18px] font-medium ml-8">{entry?.product_category?.data[0]?.title?.en}</p>
                        <p className="text-[16px] font-medium ml-8">{products?.products ? `(${products?.products?.length} produits)` : "(0 produits)"}</p>

                        <div className="pt-5 font-roboto">
                            {entry?.filters?.map((filter, index) => {
                                if (filter.hasOwnProperty("interest")) {
                                    return (
                                        <div key={index}>
                                            <div className="mx-8 py-5 border-b">
                                                <p className="">{filter.interest.title ? filter.interest.title : "Interest"}</p>

                                                <div className="mt-2">
                                                    <div className="relative flex gap-x-3 mt-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="animals"
                                                                name="animals"
                                                                type="checkbox"
                                                                className="h-5 w-5 border-gray-300 !ring-0"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="conforama" className="font-light">
                                                                Animals
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="buildings"
                                                                name="buildings"
                                                                type="checkbox"
                                                                className="h-5 w-5 border-gray-300 !ring-0"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="partenaires" className="font-light">
                                                                Buildings
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="cars"
                                                                name="cars"
                                                                type="checkbox"
                                                                className="h-5 w-5 border-gray-300 !ring-0"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="partenaires" className="font-light">
                                                                Cars
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="preschool"
                                                                name="preschool"
                                                                type="checkbox"
                                                                className="h-5 w-5 border-gray-300 !ring-0"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="partenaires" className="font-light">
                                                                Preschool
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="space"
                                                                name="space"
                                                                type="checkbox"
                                                                className="h-5 w-5 border-gray-300 !ring-0"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="partenaires" className="font-light">
                                                                Space
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex gap-x-3">
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id="vehicles"
                                                                name="vehicles"
                                                                type="checkbox"
                                                                className="h-5 w-5 border-gray-300 !ring-0"
                                                            />
                                                        </div>
                                                        <div className="text-sm leading-6">
                                                            <label htmlFor="partenaires" className="font-light">
                                                                Vehicles
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (filter.hasOwnProperty("price")) {
                                    return (
                                        <div key={index} className="mx-8 py-5 border-b">
                                            <p>{filter.price.title ? filter.price.title : "Price"}</p>

                                            <div className="mt-2">
                                                <div className="relative flex gap-x-3 mt-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="under25"
                                                            name="under25"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="conforama" className="font-light">
                                                            Under $25
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="p25_50"
                                                            name="p25_50"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            $25 - $50
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="p50_75"
                                                            name="p50_75"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            $50 - $70
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="p75-100"
                                                            name="p75-100"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            $75 - $100
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="over100"
                                                            name="over100"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            Over $100
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (filter.hasOwnProperty("age")) {
                                    return (
                                        <div key={index} className="mx-8 py-5 border-b">
                                             <p>{filter.age.title ? filter.age.title : "Age"}</p>

                                             <div className="mt-2">
                                                <div className="relative flex gap-x-3 mt-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="oneAndHalf"
                                                            name="oneAndHalf"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="conforama" className="font-light">
                                                            1.5+
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="fourPlus"
                                                            name="fourPlus"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            4+
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="sixPlus"
                                                            name="sixPlus"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            6+
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="ninePlus"
                                                            name="ninePlus"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            9+
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="thirteenPlus"
                                                            name="thirteenPlus"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            13+
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="eighteenPlus"
                                                            name="eighteenPlus"
                                                            type="checkbox"
                                                            className="h-5 w-5 border-gray-300 !ring-0"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="partenaires" className="font-light">
                                                            18+
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 ml-5 mt-10 mb-10">
                        {products?.products?.map((product, index) => {
                            if (index % 6 === 0) {
                                let blocks = getProductBlock(index)
                                let banner = <div></div>

                                if (entry?.banners?.length - 1 >= index / 6 && blocks.length === 6) {
                                    banner =
                                        <a href="#">
                                            <img key={index} className="ml-5" src={entry?.banners[index / 6]?.banner[0]?.image?.url} />
                                        </a>
                                }

                                return (
                                    <div key={index}>
                                        <div className="flex flex-wrap gap-8 ml-5 mb-10">
                                            {blocks}
                                        </div>
                                        {banner}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

                <div
                    className="ml-[340px] font-light whitespace-pre-wrap [&_ul]:list-disc mb-24"
                    dangerouslySetInnerHTML={{ __html: entry?.faq }}
                ></div>
            </div>
        </div>
    )
}