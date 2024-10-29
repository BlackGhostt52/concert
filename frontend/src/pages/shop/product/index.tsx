import { Helmet } from "react-helmet-async";

import { Footer } from "@/components/footer/index.tsx";
import { Header } from "@/components/header/index.tsx";

import { ProductInfo } from "./components/product-info";
import { RelatedProduct } from "./components/related-product";

export function Product() {
  return (
    <>
      <Helmet title="Product Name" />
      <div className="flex h-full w-full flex-wrap justify-center">
        <Header />
        <div className="my-14">
          <ProductInfo />
          <RelatedProduct />
        </div>
        <Footer />
      </div>
    </>
  );
}
