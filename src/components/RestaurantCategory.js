import {  useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log("ResCat: ",data);
    const handleClick = () => {
        setShowIndex();
    };

    return(
        <div>
            {/* Header */}
            <div className="w-8/12 mx-auto m-4 bg-gray-50 shadow-lg p-4 flex flex-col justify-center items-center">
                <div className="flex flex-row  justify-between w-full cursor-pointer" 
                    onClick={handleClick}
                >
                    <p className="font-bold text-lg">{data.title} ({data.itemCards.length})</p>
                    <p>🔽</p>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            {/* Accordion Body */}

        </div>
    );
};

export default RestaurantCategory;