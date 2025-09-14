import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import CardContainer from "./CardContainer";
//import { MockData } from "./MockData";
import {MockData2} from "./MockData2";
import ButtonContainers from "./ButtonContainers";
import { useSelector } from "react-redux";

const WhatInMind = () => {

    const [fetchData, setFetchData] = useState("");
    const [fetchDataMind, setFetchDataMind] = useState("");
    const MockData = useSelector((store) => store.MockDataRedux.Data);

    useEffect(() => {

        
            const useFetchAPI = async () => {
                try{
                    const api = await fetch('https://www.swiggy.com/dapiQ/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                    //i failed this URL since api is changing frequently
                    if (!api.ok) {throw new Error(`HTTP error! Status: ${api.status}`)}
                    const json = await api.json();
                    setFetchData(json);
                }
                catch(error){
                    setFetchData(MockData);
                    setFetchDataMind(MockData2);
                    console.log(MockData);
                }
                finally {
                console.log("Fetch attempt finished"); // runs always
                }
            }
            useFetchAPI();

    }, [MockData]);
    const mind = fetchDataMind?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    const containerData = fetchData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    return(
        <div>
            <div id = "whatsInMind">
                <h3 className="font-bold text-2xl">What's in your Mind?</h3>
                <ButtonContainers />
            </div>
            <div className="iterating flex flex-row flex-wrap justify-center">
                {Array.isArray(mind) &&
                    mind.map((single) => {
                    return (
                    <div key = {single.id} className="m-4 p-0 bg-amber-200 border-1">
                        <Banner props = {single}/>
                    </div>
                    )
                })
                
            }
            
            </div>
            <div id="CardContainer">
                {Array.isArray(containerData) && <CardContainer data = {containerData}/>}
            </div>
        </div>
    )
};

export default WhatInMind ;