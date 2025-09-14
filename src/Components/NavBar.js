import React, { useEffect, useState } from "react";
import { logo_img } from "../constants";
import { alreadySearched } from "../store/SearchSuggSlice";
import search from '../img/search.png';
import cart from "../img/cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { list } from "postcss";

const NavBar = () => {

    const cartList = useSelector((store) => store.CartRedux.items);
    const [searchValue, setSearchValue] = useState("");
    const [fullSearchSuggestion , setFullSearchSuggestion] = useState("");
    const [searchSuggestion, setSearchSuggenstion]= useState("");
    const dispatch = useDispatch();

    const alreadySearchedItems = useSelector((store) => store.SearchSuggRedux.suggItems || {});
    console.log(alreadySearchedItems);
    


    useEffect(() => {

        const SearchSuggFetching = async(value) => {
        const api = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${value}`);
        const json = await api.json();
        console.log(json[0]);
        console.log(json[1]);
        setFullSearchSuggestion(json);
        setSearchSuggenstion(json[1]);
        if(searchValue !== "")
        {
            if(alreadySearchedItems[value.toLowerCase()] == undefined)
            {
                return dispatch(alreadySearched({id : json[0].toLowerCase(), list : json[1]}));
            }
            else
            {
                return setSearchSuggenstion(alreadySearchedItems[value.toLowerCase()]);
            };
        };

    };



    const TimeId = setTimeout(() => SearchSuggFetching(searchValue) ,1000);
    return () => clearTimeout(TimeId);

    }, [searchValue]);


    return(
        <div className="flex flex-col justify-center items-center mb-3 
        sm:flex sm:flex-col sm:justify-center sm:items-center
        md:flex-row md:justify-around md:items-center md:mb-3
        lg:flex-row lg:justify-around lg:items-center lg:mb-3"
         onBlur={() => setSearchSuggenstion([])}>
            <Link to={"/"}>
                <div className="logo-container sm:flex-row">
                    <img className="w-[100px] rounded-full ml-0" src="https://banner2.cleanpng.com/cb4/vkp/kdj/abnvxsv7o.webp" ></img>
                </div>
            </Link>

            <div className="search-container flex flex-row my-2 relative">
                <input type="text" onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                className=" w-full h-[30px] p-3 bg-gray-200 mr-3 rounded-2xl outline-none
                md:w-[450px]
                lg:w-[450px]"/>
                <span className="cursor-pointer m-1"><svg className="" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></span>
                {searchSuggestion && searchSuggestion.length > 0 &&
                    <ul className="absolute rounded-2xl  bg-gray-100 top-6 z-10">
                        {searchSuggestion.map((single, index) => 
                        <li key={index} className="p-2 rounded-2xl hover:bg-gray-200">{single}</li>)}
                    </ul>
                }
            </div>

            <div>
                <Link to= "/lazyLoaded">
                    <p className="font-bold ">LazyComponent</p>
                </Link>
            </div>

            <div className="cart-container">
                {/* <img className="inline w-[150px]" src='https://banner2.cleanpng.com/lnd/20241009/zu/eacc310eeb9e594fea142e7496af68.webp' alt="cart img" /> */}
                
                <Link to="/Cart">
                    {/* <span className="font-bold m-4 cursor-pointer text-2xl">Cart<sup>{cartList.length > 0 ? cartList.length : ""}</sup></span> */}
                    <span className="relative z-0">
                        <svg className="m-1" width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                        <sup className="absolute top-0 right-0">{cartList.length > 0 ? cartList.length : ""}</sup>
                    </span>
                </Link>
            </div>

        </div>
    )
};


export default NavBar ;