import React, { Component } from 'react';
import "./search.css";

const lurl = "http://localhost:8055/getLocationList";
const rurl = "http://localhost:8055/getRestaurantByCityName/:city";

export default class Search extends Component {

    constructor() {
        super()
         this.state = {
           locations: "",
           restaurant: ""
         }
        
    }

    
    renderCity = (data) => {
     console.log(data)
     if(Array.isArray(data)){
        return data.map((item) => {
            return (
                <option key={item._id} value={item.state_id}>{item.state}</option>
            )
        })
     }
    }

   
    renderRest = (data) => {
        console.log(data)
     if(Array.isArray(data)){
         return data.map((item) => {
             return (
                 <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option>
             );
         });
     }
    }

    handleCity = (event) => {
     // console.log("handleCity")
        const stateId =  event.target.value;
        console.log(stateId);
        fetch(`${rurl}/${stateId}`, { method: "GET"})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({ restaurant: data });
            console.log(data);
        })
        
    }
  render() {
    return (
      <div>
         <div className="row text-center">
         <div className="col-12">
            <p className="logo px-4 py-2">e!</p>
         </div>
      </div>

       <div className="row text-center">
        <div className="col-md-12">
           <p className="title">Find the best resturants,cafes, and bars</p>
        </div>
       </div>
        
      <div className="row text-center datalist">
        <div className="col-sm-4">
       
         <select onChange={this.handleCity}>
           <option>SELECT</option>
           {this.renderCity(this.state.locations)}
           
         </select>
        </div>

        <div className="col-sm-5">
         <select>
            <option>Search for Restaurants</option>
             {this.renderRest(this.state.restaurant)} 
         </select>
      </div>
      </div>
    </div>
    )
  }

  componentDidMount(){
    fetch(`${lurl}` , { method : "GET" })
    .then((res) => res.json())
    .then((data) => this.setState({ locations: data.location }));
  }
}
