import Head from "next/head";
import Cart from "@/components/cart";
import Checkout from "@/components/checkout";
import Contact from "@/components/contact";
import Detail from "@/components/detail";
import Product from "@/components/Product";
const Home = () => {
    return (
        <>
            <Head>
                <title>Departmental Store</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Cart />
            <Checkout/>
            <Contact/>
            <Detail/>
            <Product/>
            

        </>
    );
}

export default Home;