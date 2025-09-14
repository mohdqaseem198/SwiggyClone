import React from "react";
import { Post_add_pre_img_URL } from "../constants";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/CartSlice";

const PosterAdv = ({posterData}) => {
    const {id = "", name = "", price = 0, defaultPrice = 0, removeButton = {} ,ratings = {}, description = "", imageId = ""} = posterData?.card?.info || {};
    const {rating = "", ratingCountV2 = 0} = ratings?.aggregatedRating || {} ;
    const dispatch = useDispatch();

    const AddHandle = () => {

        const dispatchData =  { 'card': { 'info': 
                { id, name, price, defaultPrice , description, imageId, 'removeButton' : 'Remove' ,'ratings': 
                    { 'aggregatedRating': 
                        { rating, ratingCountV2 }
                    } 
                } 
            } 
        } ;
        dispatch(add(dispatchData));
    };

    const RemoveHandle = (idObj) => {
        dispatch(remove(idObj.id));        
    };


    return(
        <div>
        <div className="grid grid-cols-1
        md:grid md:grid-cols-4
        lg:grid lg:grid-cols-4">
            <div className="col-span-1
            md:grid md:col-span-3
            lg:grid lg:col-span-3">
                <h3 className="font-bold">{name}</h3>
                <h3 className="font-bold">₹{price ? price/100 : defaultPrice/100}</h3>
                <h3 className="my-3"><span className=" text-green-600 font-bold">⭐{rating}({ratingCountV2})</span></h3>
                <p className=" text-gray-600">{description}</p>
            </div>
            <div className="relative col-span-1 m-auto p-0
            md:col-span-1 md:m-0 md:p-0
            lg:col-span-1 lg:m-0 lg:p-0">
                <img className=" p-0 float-right w-[156px] h-auto rounded-2xl" alt="" src={Post_add_pre_img_URL+imageId}/>
                <button onClick={() => AddHandle()} 
                className="absolute left-0 shadow-2xl shadow-amber-600 bottom-0 cursor-pointer bg-white border px-4 py-1 rounded-2xl
                md:left-[8%]
                lg:left-[22%] ">Add</button>
                {removeButton == 'Remove' ?   <button onClick={() => RemoveHandle({id})} 
                className="absolute right-[0%] shadow-2xl shadow-amber-600 bottom-0 cursor-pointer bg-white border px-4 py-1 rounded-2xl
                md:right-0 md:bottom-0
                lg:right-0 lg:bottom-0">Remove</button>   : ''}
            </div>
        </div>
        <hr className=" my-4 text-gray-400"/>
        </div>
    )
};

export default PosterAdv ;