import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restaurant_pre_URL } from "../constants";
import RestaurantMenu from "./RestaurantMenu";

const Restaurant = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const para  = useParams();
    const id  = Number(para.id) || 0;
    console.log(id);


    useEffect(() => {
        const fetchRestaurantData = async(id) => {
            try{
                const api = await fetch(Restaurant_pre_URL+id);
                const json = await api.json();
                setRestaurantData(json);
            }
            catch{
                return "";
            }
            
        }

        fetchRestaurantData(id);
        
    }, []);

    const data =  restaurantData || "";
    
    return (
        <div id="Restaurant-data">
            <RestaurantMenu FullData={data}/>
        </div>
    )
};

export default Restaurant ;