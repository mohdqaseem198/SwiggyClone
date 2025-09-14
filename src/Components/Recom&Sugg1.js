import React, { useState } from "react";
import PosterAdv from "./PosterAdv";

const RecommendAndSuggestion1 = ({recommendData}) => {
    const [recommendBol, setRecommendBol] = useState(true);
    const {title = "" , itemCards = []} = recommendData?.card?.card || {};

   
    
    return(
        <div>
            {itemCards?.length > 0 &&
            <>
            <div className="flex justify-between my-5">
                <h3 className="font-bold text-2xl">{title}{itemCards && <span>({itemCards.length})</span>}</h3>
                <button onClick={() => setRecommendBol(!recommendBol)}><svg className="cursor-pointer" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
            </div>
            {recommendBol &&
             itemCards.map((single) => {
                return(
                        <div key={single?.card?.info?.id}>
                            <PosterAdv posterData={single}/>
                        </div>
                )
            })}
            </>}
        </div>
    )
};

export default RecommendAndSuggestion1 ;