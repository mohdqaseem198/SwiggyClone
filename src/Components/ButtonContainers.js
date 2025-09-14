import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {RatingAction, ClearFilter, FastDelivery, PureVeg, Offer, ThreeToSix} from "../store/MockDataSlice";

const ButtonContainers = () => {

    const [visibility, setVisibility] = useState(false);
    const [ratingClear, setRatingClear] = useState(true);
    const [fastDelivery, setFastDelivery] = useState(true);
    const [pureVeg, setPureVeg] = useState(true);
    const [offer, setOffer] = useState(true);
    const [threeTo6, setThreeto6] = useState(true);
    const MockData  = useSelector((store) => store.MockDataRedux.Data);
    const dispatch = useDispatch();

    const RatingHandle = () => {
        setRatingClear(!ratingClear);
        {ratingClear ?(
            dispatch(RatingAction()),
            document.getElementById('rating').style.backgroundColor = 'gray'
            )
            : (dispatch(ClearFilter()),
            document.getElementById('rating').style.backgroundColor = 'white');
        }

        console.log('Rating clicked', rating);
    };

    const FastDeliveryHandle = () => {
        setFastDelivery(!fastDelivery);
        {fastDelivery ?
            (dispatch(FastDelivery()),
            document.getElementById('fastDelivery').style.backgroundColor = 'gray')
            : (dispatch(ClearFilter()),
            document.getElementById('fastDelivery').style.backgroundColor = 'white');
        }
    };

    const PureVegHandle = () => {

        setPureVeg(!pureVeg);
        {pureVeg ?
            (dispatch(PureVeg()),
            document.getElementById('pureVeg').style.backgroundColor = 'gray')
            : (dispatch(ClearFilter()),
            document.getElementById('pureVeg').style.backgroundColor = 'white');
        }
    };

    const OfferHandle = () => {
        setOffer(!offer);
        {offer ?
            ( dispatch(Offer()),
            document.getElementById('offer').style.backgroundColor = 'gray')
            : ( dispatch(ClearFilter()),
            document.getElementById('offer').style.backgroundColor = 'white');
        }
    };

    const ThreeToSixHandle = () => {
        setThreeto6(!threeTo6);
        {threeTo6 ?
            ( dispatch(ThreeToSix()),
            document.getElementById('3To6').style.backgroundColor = 'gray')
            : ( dispatch(ClearFilter()),
            document.getElementById('3To6').style.backgroundColor = 'white');
        }
    };

    console.log('Im from buttons' ,MockData);

    return (
        <div className="lg:m-2  lg:flex lg:flex-row lg:justify-around
        md:m-2 md:flex md:flex-row md:justify-around
        sm:flex sm:flex-col sm:justify-center
        flex flex-col justify-center" id  = "Buttons">
            <div className="relative flex flex-col justify-center inline-block fixed
            sm:flex sm:flex-col
            md:flex md:flex-row
            ">
                <button className="cursor-pointer w-full border-1 px-4 py-2 rounded-2xl" 
                onClick={() => {
                    setVisibility(!visibility);
                    const handleScroll = () => setVisibility(false);
                    addEventListener("scroll",handleScroll, {once:true});
                    }
                    }>Filter <span className="flex flex-row justify-center
                    sm:flex sm:flex-row sm:justify-center"><svg className="sm:justify-center" width="20px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></button>
            {visibility &&(
                <div className="absolute top-full left-0
                sm:top-[70%] sm:left-[45%]">
                    <ul className=" flex flex-col fixed bg-white shadow-2xl rounded-2xl">
                        <li onClick={() => FastDeliveryHandle()} className="cursor-pointer bg-white hover:bg-blue-300 rounded-2xl p-2">Fast Delivery</li>
                        <li onClick={() => RatingHandle()} className="cursor-pointer bg-white hover:bg-blue-300 rounded-2xl p-2">Rating</li>
                        <li onClick={() => PureVegHandle()} className="cursor-pointer bg-white hover:bg-blue-300 rounded-2xl p-2">Pure Veg</li>
                        <li onClick={() => OfferHandle()} className="cursor-pointer bg-white hover:bg-blue-300 rounded-2xl p-2">Offers</li>
                        <li onClick={() => ThreeToSixHandle()} className="cursor-pointer bg-white hover:bg-blue-300 rounded-2xl p-2">300-600</li>
                </ul></div>
            )}
            </div>
            {/* <button className="cursor-pointer border-1 px-4 py-2 rounded-2xl">Sort By</button> */}
            <button id = 'fastDelivery' onClick={() => FastDeliveryHandle()} className="cursor-pointer border-1 px-4 py-2 rounded-2xl">Fast Delivery</button>
            <button id = 'rating' onClick={() => RatingHandle()} className=" cursor-pointer border-1 px-4 py-2 rounded-2xl">Rating 4.0+</button>
            <button id="pureVeg" onClick={() => PureVegHandle()} className="cursor-pointer border-1 px-4 py-2 rounded-2xl">Pure Veg</button>
            <button id="offer" onClick={() => OfferHandle()} className="cursor-pointer border-1 px-4 py-2 rounded-2xl">Offers</button>
            <button id="3To6" onClick={() => ThreeToSixHandle()} className="cursor-pointer border-1 px-4 py-2 rounded-2xl">300 - 600</button>
            {/* <button className="cursor-pointer border-1 px-4 py-2 rounded-2xl">&lt;300</button> */}
        </div>
    )
};

export default ButtonContainers ;