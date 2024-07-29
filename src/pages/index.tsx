import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import HeaderBottom from "@/components/header/HeaderBottom";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Products from "@/components/product";
import { ProductProps } from "../../type";

const inter = Inter({ subsets: ["latin"] });

interface Props{
  productData:ProductProps
}

export default function Home({productData}: Props) {
  return (
    <main>
        
        <div>
          <Banner/> 
          <Products productData={productData} />
        </div>
        
    </main>
  );
} 
export const getServerSideProps = async() =>{
  const res=await fetch("https://fakestoreapi.com/products");
  const productData= await res.json();
  return{props:{productData}};
}
