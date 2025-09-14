import React from "react";
import Container from "./Container";
import withDiscountLabel from "./withDiscountLabel";

const CardContainer = ({data}) => {
    const DiscountedContainer = withDiscountLabel(Container);
    return (
        <div id="Containers" className="flex flex-wrap">
            { Array.isArray(data) && 
                data.map((single) => {
                    return <DiscountedContainer data = {single} key = {single.info.id}/>
                })
            }
        </div>
    )
};

export default CardContainer ;