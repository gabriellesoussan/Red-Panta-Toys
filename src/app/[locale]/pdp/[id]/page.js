"use client"
import { useState, useEffect } from 'react';
import Stack, { onEntryChange } from '@/lib/cstack'
import Header from "@/components/header";
import Footer from '@/components/footer';

export default function Page({ params }) {
    const [entry, setEntry] = useState({});
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [imageIndex, setImageIndex] = useState(0)

    const getContent = async () => {
        console.log('id', params.id);
        if (params.id === "untitled" || !params.id)
            return
        let theEntry = await Stack.getPDPbyProduct('pdp', params.id, params.locale);
        if (!theEntry) {
            theEntry = await Stack.getElementByUrl('pdp', '/pdp/' + params.id, params.locale);
            if (theEntry?.product?.data.length > 0 && theEntry?.product?.data[0].url)
                getProduct(theEntry.product.data[0].url);
            else
                getProduct(params.id);
        }
        else {
            getProduct(params.id);
        }

        console.log('pdp', theEntry)

        setEntry(theEntry);
        if (theEntry || product)
            setIsLoading(false);
    }

    const getProduct = async (id) => {
        let result = await fetch('/api/products/' + id, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setProduct(result.product);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        onEntryChange(getContent);
    }, [])

    if (isLoading)
        return <div></div>

    return (
        <div>
            <Header locale={params.locale} />

            <div className="max-w-8xl mx-auto px-8 pt-10 flex font-abz mb-12">
                <div className="w-full">
                    <p className="text-[24px] font-medium leading-none">{entry?.product_name ? entry?.product_name : product?.title?.en}</p>

                    <div className="flex flex-col mt-10 w-full">
                        <div className="h-[600px] flex ">
                            {product?.images?.length > 0 &&
                                <img className="object-contain mx-auto" src={entry?.images?.length > 0 ? entry?.images[imageIndex].image?.url : product?.images[imageIndex].url} />
                            }
                        </div>
                        <div className="mt-10 flex">
                            {(entry?.images?.length === 0 || !entry?.images) &&
                                <div className="flex gap-5 mx-auto">
                                    {product?.images?.map((image, index) => (
                                        <div key={index} className="border border-black p-2 cursor-pointer" onClick={() => setImageIndex(index)}>
                                            <img className="h-[68px] w-[68px]" src={image.url} />
                                        </div>
                                    ))}
                                </div>
                            }
                            {entry?.images?.length > 0 &&
                                <div className="flex gap-5">
                                    {entry?.images?.map((image, index) => (
                                        <div key={index} className="border border-black p-2 cursor-pointer" onClick={() => setImageIndex(index)}>
                                            <img className="h-[68px] w-[68px]" src={image.image?.url} />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="w-96 ml-auto border-l h-page px-5">
                    <div className="flex">
                        <p className="text-[32px]">{entry?.price ? entry?.price : product?.price}</p>
                    </div>

                    <button className="w-full text-white bg-[#db3833] mt-5 rounded-xl py-2">Add to cart</button>

                    <div
                        className="mt-10 font-light whitespace-pre-wrap [&_ul]:list-disc font-roboto"
                        dangerouslySetInnerHTML={{ __html: (entry?.description ? entry?.description : product?.description?.en) }}
                    ></div>

                </div>
            </div>

            <Footer locale={params.locale} />
        </div>
    )
}