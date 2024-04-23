import { restrauntList } from "../Config";
import { rlist } from "../Config";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    // console.log(searchText);
    // console.log(restaurants)

    const filterData = restaurants.filter((restaurant)=>{
        return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    return filterData;
}

const Body = ()=>{
    // create useState hook -> react local state variable
    const [searchText, setSearchText] = useState("");
    const [Filterrestaurants, FiltersetRestaurants]= useState([]);
    // const [restaurants, setRestaurants]= useState(restrauntList);
    const [allrestaurants, allsetRestaurants]= useState([]);


    // useEffect with empty dependency which show it can't depend any one and it will only one time after render all thing
    useEffect(()=>{
      getRestraunts();
    }, []);

    // use async function because we fetch the data at here 
     async function getRestraunts(){
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      // use optional chaining at here if data is not at here so it breaks so we used it
      // setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      allsetRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      FiltersetRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


      console.log(json);
     }


     // not rendering componenet (Early return)
     if(!allrestaurants) return null;
     // Conditional rendering
     // if resturant data === 0 so used shimmer ui 
     // else used actual data ui
    return(allrestaurants?.length===0)?<Shimmer/>:(
     <>
      <div className="search-container">
          <input type="text" 
          placeholder="search" 
          value={searchText} 
          className="search-input"
          onChange ={(e)=>{
            setSearchText(e.target.value);
            {console.log(e.target.value)}
          }}
          /> 
          <button type="button" onClick={()=>{
            const data = filterData(searchText, allrestaurants);
            // if(searchText !=""){
                FiltersetRestaurants(data);
            // }if(searchText==""){
            //     setRestaurants(restrauntList);
            // }
            
          }}>Search</button>

          {/* <h1>{searchClick}</h1> */}


      </div>
        <div className="restraunt-list">
       {
        Filterrestaurants.map((restaurant)=>{
            return (Filterrestaurants.length===0)?<h1>No Restaurant Match</h1>: <RestrauntCard {...restaurant.info} key ={restaurant.info.id}/>
        })
       }        
     </div>
     </>
    );
    };

    export default Body;