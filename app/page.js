import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import ProductSuggestions from "@/components/product/product-suggestions/productSuggestion";
import ProductSwiper from "@/components/product/product-swiper/productSwiper";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSuggestions />
      <ProductSwiper />
    </>
  );
}
