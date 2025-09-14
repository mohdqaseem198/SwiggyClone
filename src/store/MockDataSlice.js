import { createSlice } from "@reduxjs/toolkit";
import react, { useState } from "react";
import {MockData}  from "../Components/MockData";
import { json } from "react-router-dom";


const MockDataSlice = createSlice({
    name : 'MockData',

    initialState : {
        Data : MockData 
    },

    reducers:{
        RatingAction : ((state, action) => {
            const beforeFilter = state.Data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants =
                beforeFilter?.filter((single) => single?.info?.avgRating > 4);
        }),

        ClearFilter : ((state) => {
            state.Data = MockData;
        }),

        FastDelivery : ((state) => {
            const beforeFilter = state.Data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants =
                beforeFilter?.filter((single) => single?.info?.sla?.lastMileTravel < 13);
        }),

        PureVeg : ((state) => {
            const beforeFilter = state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

            state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants =
            beforeFilter.filter((single)=> single?.info?.veg == true);
        }),

        Offer : ((state) => {
            const beforeFilter = state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

            state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants =
            beforeFilter.filter((single) => single?.info?.aggregatedDiscountInfoV3?.header);
        }),

        ThreeToSix : ((state) => {
            const beforeFilter = state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

            state.Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants =
            beforeFilter.filter((single) => {
                const cost =  Number(single?.info?.costForTwo.split(" ")[0].replaceAll("₹", ""));
                return cost > 299 && cost < 599;
            });

            beforeFilter.map((single) => console.log(JSON.stringify(Number(single?.info?.costForTwo.split(" ")[0].replaceAll("₹", "")))));
        }),

    }

});

export const {RatingAction, ClearFilter, FastDelivery, PureVeg, Offer, ThreeToSix} = MockDataSlice.actions;
export default MockDataSlice.reducer;