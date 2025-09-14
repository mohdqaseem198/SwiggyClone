import React, { useState } from "react";
import DealsForYou from "./DealsForYou";
import { useRef } from "react";
import TopPicks from "./TopPicks";
import RecommendAndSuggestion from "./Recommend&Suggestion";

const RestaurantMenu = ({FullData}) => {
    const Menu = FullData?.data?.cards[2]?.card?.card?.info || "";
    const dealsForYouData =  FullData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || "";
    const TopPicksData = FullData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || "";

    const {name = "", avgRating = 0, costForTwoMessage = "", areaName = "", sla = {}, cuisines = []} = Menu;
    const {slaString = ""} = sla ;
    const overflowOffers = document.getElementById("overflowOffers");
    

    const scrollRight = () => {    
        overflowOffers.scrollLeft += 350; // move 200px right
    }

    const scrollLeft = () => {
        overflowOffers.scrollLeft -= 350  ;
    }
    return(
        <div className="w-full m-auto mt-10
        lg:w-[800px]">
            <h2 className="font-bold text-2xl ">{name}</h2>
            <div className=" border p-5 rounded-2xl border-0 bg-gradient-to-t from-gray-200 to-gray-0">
                <div className=" border p-5 rounded-2xl border-gray-200 bg-white">
                <h3 className="mt-3"><span className="font-bold">⭐{avgRating} • {costForTwoMessage}</span></h3>
                <h3 className="underline">{cuisines.join(",")}</h3>
                <h3><span className="font-bold">Outlet : </span><span>{areaName}</span></h3>
                <h3><span className="font-bold">Delivery In : </span><span>{slaString}</span></h3>
                </div>
            </div>
            <div className=" my-5">
                <h3 className="font-bold text-2xl">Deals For You</h3>
                <div className="text-end">
                    <button onClick={() => scrollLeft()} className="border p-2 cursor-pointer rounded-2xl m-2">
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </button>
                    <button onClick={() => scrollRight()} className="border p-2 cursor-pointer rounded-2xl m-2">
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                </div>
                <div id="overflowOffers" className="flex flex-none overflow-x-hidden">
                    {/* Deals for You section */}
                    {dealsForYouData != "" &&
                    dealsForYouData.map((single, index)=> {
                        return(
                        <div key={index} className=" flex-none ">
                            <DealsForYou  offers={single}/>
                        </div>
                        )
                    })
                    }
                </div>
                {/* Top Pickes data here */}
                <div id="topPicks">
                    {TopPicksData && <TopPicks topData = {TopPicksData}/>}
                </div>
            </div>

            {/* Recommendations and Suggestions Section */}
            <div id="Recommendation-and-suggestion">
                {FullData && <RecommendAndSuggestion suggestData={FullData}/>}
            </div>
        </div>
    )
};

export default RestaurantMenu ;