import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./QuickDisplay.css";

export const QuickDisplay =( props ) => {

   const listMeal = ({ mealData }) => {
    console.log(mealData)
   if(Array.isArray(mealData)){
    return mealData.map((item) => {
        <Link key={item.mealtype_id} >
           <div className="card" >
            <img className="titleItem" src={item.meal_image} alt={item.mealtype} />
            <h3 className="titleheading">{item.mealtype}</h3>
            <p>{item.content}</p>
           </div>
        </Link>
        
    })
   }
   }
   return (
    <>
     <div className="row mainCard">
        {listMeal(props)}
      </div>
    </>
   )
}
