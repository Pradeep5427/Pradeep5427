import React from "react";
import MarketPage from "../components/marketPage";
import Products from "../container/products";


export default function Market(){
    return(
        <div className="marketplace">
           <MarketPage />
           <Products />
           
        </div>
    )
}