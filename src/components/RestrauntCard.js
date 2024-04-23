import { IMG_CDN_URL } from "../Config";


const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId})=>{
    // const{name,cuisines,avgRating,cloudinaryImageId} = restaurant;
       return(
           <div className="card">
               <img src={IMG_CDN_URL+ cloudinaryImageId} alt="card-img"/>
               <h2>{name}</h2>
               <p>{cuisines.join(" ,")}</p>
               <h4>{avgRating} stars</h4>
           </div>
       );
   };

   export default RestrauntCard;