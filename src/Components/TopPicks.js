import React, { useState } from "react";
import { Top_pick_pre_img_URL } from "../constants";


const TopPicks = ({topData}) => {
    const {title = "", carousel = {} } = topData || {};    
    
    const overflow = document.getElementById("overflow");
    
    const scrollLeft = () => {
        try{
            overflow.scrollLeft -= 300;
        }
        catch{
            return;
        }
        
    }

    const scrollRight = () => {
        try{
            overflow.scrollLeft += 300;
        }
        catch{
            return;
        }
        
    }

    return(
        <div>
            <h3 className="font-bold text-2xl m-2">{title}</h3>
            {carousel?.length>0 && 
            <div className="text-end">
                    <button onClick={() => scrollLeft()} className="border p-2 cursor-pointer rounded-2xl m-2">
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </button>
                    <button onClick={() => scrollRight()} className="border p-2 cursor-pointer rounded-2xl m-2">
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
            </div>
            }
            <div id="overflow" className="flex overflow-x-hidden scroll-smooth">
                {Array.isArray(carousel)  &&
                    carousel.map((single, index) => {
                        return(
                            <div key={index} className="m-2  flex-none ">
                                <img alt="" className="w-[300px] h-[350px]" src={Top_pick_pre_img_URL+single.creativeId}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default TopPicks;