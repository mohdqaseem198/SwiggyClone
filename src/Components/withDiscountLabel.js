import react from "react";
import { Container } from "./Container";

const withDiscountLabel = (WrappedComponent) => {
  return function DiscountedContainer({data}) {
    const hasDiscount = data?.info?.aggregatedDiscountInfoV3;
    const {header = "", discountTag = ""} = hasDiscount || {};

    return (
      <div className="relative m-auto
      sm:flex sm:flex-row sm:justify-center
      ">
        {/* Show a discount badge if available */}

        {hasDiscount && (
          <span className="absolute top-1.5 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {hasDiscount.discountTag || "Discount Available"}
            <div>{hasDiscount.header || "Hurry"}</div>
          </span>
        )}

        {/* Render the original component */}
        <WrappedComponent data = {data} />
      </div>
    );
  };
};


export default withDiscountLabel;