import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);


    if(!resInfo) return <Shimmer/>;

    console.log("Cards data:", resInfo);
    const { name, cuisines, costForTwoMessage} = resInfo.cards?.[2]?.card?.card?.info;
    console.log("Name = ",name)

    const itemCard = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    // console.log("ItemCard = ",resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

   return(
    <div className="text-center">
    
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
        {/* Categories Accordions */ }
        {categories.map((category, index) =>(
            //Controlled Component
            <RestaurantCategory
             key={category?.card?.card?.title}
             data={category?.card?.card}
             showItems = {index===showIndex && true}
             setShowIndex={()=> setShowIndex(index)}
        />
        ))}
        
    </div>
   )
};

export default RestaurantMenu;

