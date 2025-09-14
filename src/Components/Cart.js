import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../store/CartSlice";
import PosterAdv from "./PosterAdv";
import BillingCart from "./BillingCart";

const Cart = ()=> {

    const reduxStoreData = useSelector((store) => store.CartRedux.items );
    console.log(reduxStoreData);
    const dispatch = useDispatch();
    const ClearHandle = () => {
        dispatch(clear());
    };

    return(
        <div className="flex">
            <div className="w-full m-auto
            lg:w-[800px]">
                <h3 className="font-bold text-2xl text-center m-4">Welcome in Cart</h3>
                { reduxStoreData.length > 0 ?
                    reduxStoreData.map((single, index) => {
                        return <PosterAdv key = {index} posterData={single}/>
                    })
                : <h3>Add something in Cart</h3>}
                <button onClick={() => ClearHandle()} className="cursor-pointer border px-4 py-2 rounded-2xl">Clear Cart</button>
            </div>

            <div id="Billing-Cart" className="text-center">
                    <BillingCart DishAdded = {reduxStoreData}/>
            </div>
        </div>
    )
};

export default Cart;