import react from "react";

const BillingCart = ({DishAdded}) => {
    let total = 0;
    console.log(DishAdded.length);


    return(
    <div className="border-1 border-black ml-3">
        {DishAdded.length>0 && <h2>Billing and Details</h2>}

        {DishAdded &&
        DishAdded.map((single) => {
                const {name = "", price = "", id} = single?.card?.info || {} ;
                total = total + price/100;
                return(
                <div key={id} className="my-5">
                    <h3 className="inline"><span className="font-bold">{name}</span> - <span>{price/100}</span></h3>
                </div>
                )
            })
        }
        {DishAdded.length > 0 &&
            <div>
                <h3 className="mb-2">GST 18% : {Math.round(total*0.18)}</h3>
                <h3 className="mb-2">Delivery Charge : 50 fix</h3>
                <hr />
                <h3 className="font-bold mt-2">Total : {Math.ceil(total*1.18) + 50}</h3>
            </div>
        }
    </div>)
};

export default BillingCart ;