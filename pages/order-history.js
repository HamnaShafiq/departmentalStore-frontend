import History from "@/components/orderhistory";
import Head from "next/head";
const OrderHistory= () => {
    return (
        <>
            <Head>
                <title>Departmental Store</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <History/>
        </>
    );
}
export default OrderHistory;