import React from "react";
import { Banner_pre_img_URL } from "../constants";

const Banner = ({props}) => {
    const {id, action = {} , imageId} = props ;
    const {link, text, type} = action;
    return(
        <div className="w-[144px] h-[180px]">
            <img src = {Banner_pre_img_URL+imageId} alt = "Banner Image" className="w-[144px] h-[180px]"/>
        </div>
    )
};

export default Banner;