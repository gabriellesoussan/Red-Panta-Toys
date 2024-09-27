"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Categories from "@/components/categories";
import Header from "@/components/header";
import ImageGrid from "@/components/imageGrid";
import VideoHero from "@/components/videoHero";
import ProductCarousel from "@/components/productCarousel";
import TestHeader from "@/components/header";
import TextAndImage from "@/components/textAndImage";
import Marquee from "@/components/marquee";
import FullWidthBanner from "@/components/fullWidthBanner";
import ProductBanner from "@/components/productBanner";
import Footer from "@/components/footer";

export default function Home({ params }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs(
            "homepage",
            params.locale,
            [
                'hero',
                'modular_blocks.categories.categories.page',
                'modular_blocks.image_grid.images.page',
                'modular_blocks.image_and_text.page'
            ]
        );
        console.log('homepage', entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) return;

    return (
        <div data-pageref={entry?.uid} data-contenttype="homepage" data-locale={params.locale}>
            <Header locale={params.locale} />
            {/* <Header setShowOverlay={setShowOverlay} /> */}
            <VideoHero showOverlay={showOverlay} content={entry?.hero[0]}/>

            {entry?.modular_blocks?.map((block, index) => {
                if(block.hasOwnProperty("image_grid"))
                    return <ImageGrid key={index} content={block.image_grid} />
                else if(block.hasOwnProperty("product_carousel"))
                    return <ProductCarousel key={index} content={block.product_carousel} />
                else if(block.hasOwnProperty("product_banner"))
                    return <ProductBanner key={index} content={block.product_banner} />
                else if(block.hasOwnProperty("marquee"))
                    return <Marquee key={index} content={block.marquee} />
                else if(block.hasOwnProperty("image_and_text"))
                    return <TextAndImage key={index} content={block.image_and_text} />
                else if(block.hasOwnProperty("categories"))
                    return <Categories key={index} content={block.categories} />
                else if(block.hasOwnProperty("full_width_banner"))
                    return <FullWidthBanner key={index} content={block.full_width_banner} />
            })}

            <Footer locale={params.locale} />
        </div>
    );
}
