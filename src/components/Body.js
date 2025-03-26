import RestaurantCard, {withPromotedLabel} from "./RestaurantCard.js" 
import { useEffect, useState} from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Body = () => {

  const [listOfRestaurants,setListOfRestraunts] = useState([]);
  const [filteredRestraunt,setFilteredRestraunt] = useState([]);
  const [searchText,setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log("Body::",listOfRestaurants);

  useEffect(() => {
    // console.log("USEEEE EFEctt");
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log("Data = "+data);
    const json = await data.json();
    // console.log("JSON = "+ json); hello mohitv ff

    // console.log(json.data.cards[4]);

    //Optional Chanining
    setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return(
    <h1>
      Looks like you're offline!! Please check your internet connection;
    </h1>
  )

  if(listOfRestaurants.length===0){
    return <Shimmer/>
  }

  const {loggedInUser,setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0? <Shimmer/>:(
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input
                 type="text"
                 className="search-box border-solid border-black" 
                 value={searchText} 
                 onChange={(e) => {
                  setSearchText(e.target.value);
                 }}
                 />
                <button className="px-4  bg-green-100 m-4 rounded-lg"
                  onClick = {()=> {
                  // Filter the restraunt cards and update the UI
                  //searchText
                  console.log(searchText);

                  const filteredRestraunt = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );

                  setFilteredRestraunt(filteredRestraunt); 
                }}>Search</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
                onClick={()=>{
                let filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating>4.2
                );
                setListOfRestraunts(filteredList);
                }}
              >
              Top Rated Restaurants</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <label>UserName: </label>
                <input
                 className="border border-black p-2"
                 value={loggedInUser}
                 onChange={(e)=>setUserName(e.target.value)}
                />
              </div>
              
            </div>
            <div className="res-container flex flex-wrap">
              {
                filteredRestraunt.map((restaurant) => (
                <Link 
                key={restaurant.info.id}
                to={"/restaurants/"+restaurant.info.id}>
                  {/** If the restaurant is promoted then add a promoted label to it */}
                  {restaurant.info.isOpen?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard  resData={restaurant}/>)}
                </Link>
              ))}
              
            </div>
        </div>
    );
};

export default Body;

