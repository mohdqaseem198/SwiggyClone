import React from "react";
import { Offer_pre_img_URL } from "../constants";

const DealsForYou = ({offers}) => {
    const {header = "", couponCode = "", offerLogo = "" } = offers?.info;
    return(
        <div className="flex w-[350px] text-center m-1 border border-gray-400 rounded-2xl p-2 pl-20">
            <img className=" w-[48px] h-[48px]" alt = "OfferImage" src={Offer_pre_img_URL+offerLogo}/>
            <span className="">
                <h3 className="font-bold">{header}</h3>
                <h3 className="text-gray-400">{couponCode}</h3>
            </span>
        </div>
    )
};

export default DealsForYou ;