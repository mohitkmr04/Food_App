import {CDN_URL} from "../utils/constants.js";

const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,  sla } = resData.info;
    console.log(resData.info);
    const { deliveryTime } = sla || {}; 

    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400" >
            <img 
            className="res-logo rounded-lg"
            alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className=" overflow-wrap: break-words ">{cuisines.join(", ")}</h4>
            <h4>Rating - {avgRating}🌟</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time = {deliveryTime} mins</h4>
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;