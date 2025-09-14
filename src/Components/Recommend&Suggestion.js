import React from "react";
import RecommendAndSuggestion1 from "./Recom&Sugg1";
import { data } from "autoprefixer";

const RecommendAndSuggestion = ({suggestData}) => {
    const dataList = suggestData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
    return(
        <div>
            
            {dataList && dataList.map((single, index) => {
                return(
                <div key={index} className="Recommended-section">
                    <RecommendAndSuggestion1 recommendData={single}/>
                    <hr className="h-[2px] text-gray-200 bg-gray-200 "/>
                </div>
                )
        }) }
        </div>
    )
};

export default RecommendAndSuggestion;