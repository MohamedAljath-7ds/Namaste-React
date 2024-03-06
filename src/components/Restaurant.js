import useRestaurantmenu from "../utils/useRestauranmenu";
import FakeCard from "./Shimmer";
import { ITEM_URL } from "../utils/constans";
import { useParams } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ResItem from "./ResItem";
import { useState } from "react";


const RestaurantMenu  = () => {

    //state variable
    const[disp, setDisp] = useState(null);
    
    const{resId} = useParams();

    const restaurantMenu = useRestaurantmenu(resId);
   
    //if state variable is null before making an api call
    if(restaurantMenu === null){
        return <FakeCard/>
    }
    
    
     const{info} = restaurantMenu?.cards[0]?.card.card;
    
     const{itemCards} = restaurantMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;
     const categories = restaurantMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((category) => category.card?.["card"]?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    //  console.log(itemCards)
    console.log(categories);
     console.log(info);
    return(
        <div>
        <div  className="flex justify-center">
            <div className="m-1 p-4   w-[800px]">
                <h1 className="font-bold p-7 text-2xl relative right-8">{info.name}</h1>
                <h3 className="font-bold p-2 text-lg relative right-2">{info.name}</h3>
                <p className="text-xs text-gray-400">{info.cuisines}</p>
                <p className="text-xs text-gray-400">{info.locality}</p>
                {/* <p className="text-xs text-gray-400">{info.expectationNotifiers[0].text}</p> */}
                <div className="flex justify-end relative bottom-24">
                <div className="w-20 h-20 rounded-md border border-solid border-black p-2 flex ">
                <FontAwesomeIcon icon={faStar} style={{color: "#63E6BE",}} />
                <p className="text-lg text-green-500 relative bottom-2 p-1">{info.avgRating}</p>
                <p className="text-xs relative top-7 right-9">{info.totalRatingsString}</p>
                </div>
                
                </div>
            </div>
           
         
        </div>
        <div className="flex justify-center">
            <div>
                {categories.map((c, index) => <ResItem key={c.card.id} data = {c?.card?.card} 
                disp = {index===disp ? true  : false}
                
                setDisp = {() => disp===index ? setDisp(null) : setDisp(index) }
               
               
                
                

                />)}
            </div>
            
        </div>
        </div>
    );
};

export default RestaurantMenu;