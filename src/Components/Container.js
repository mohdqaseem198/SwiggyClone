import React from "react";
import { Card_pre_img_URL } from "../constants";
import { Link } from "react-router-dom";

const Container = ({data}) => {

    const {areaName = {},   name = "", avgRating = "", sla = {}, cuisines = [], cloudinaryImageId = {},  aggregatedDiscountInfoV3 = ""
} = data?.info ;

    const {slaString = {}} = sla || {} ;
    const shortName = name.length > 30 ? name.split(" ").slice(0,5).join(" ") + ".." : name;
    const shortCuisines = Object.values(cuisines).slice(0,3);
    return(
        <Link to={`/restaurant/${data?.info?.id}`}>
            <div className="m-[15px]">
                <img className="w-[286px] h-[191px] rounded-3xl" alt = "Image" src={Card_pre_img_URL + cloudinaryImageId}/>
                <h2 className="font-bold">{shortName}</h2>
                <span>⭐{avgRating}. </span>
                <span className="font-bold">{slaString} </span>
                <p>{shortCuisines.join(" ")}</p>
                <span>{areaName}</span>
            </div>
        </Link>
    )
};

export default Container ;