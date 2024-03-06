import { CDN_URL } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartslices";



const ItemList = ({itemsData}) => {
    // console.log(itemsData);
    const dispatch = useDispatch();
    const handle = (single) => {
        dispatch(addItem(single));
    }
    
    return (
        <div>
           {
            itemsData.map((single) =>  <div className="m-4 p-4  border-gray-200 border-b-2">
                
                <span className="text-gray-600 font-semibold">{single.card.info.name}</span>
                <p> ₹{single.card.info.price/100}</p>
                <p className="text-xs text-gray-400 text-wrap w-[450px]">{single.card.info.description}</p>
                <div className="flex justify-end">
                <img src={CDN_URL + single.card.info.imageId} className="w-[150px] h-[100px]   relative bottom-20  rounded-md"/>
                <button className="absolute  bg-orange-500 text-white rounded-lg p-1 m-1 hover:bg-orange-800"onClick={ () => handle(single)}>Add+</button>
                
                </div>

            </div>)
           }
        </div>
    )
}


export const Hg = () => {
   
    
    return(props) => {
        const dispatch = useDispatch();
    const handle = (itemNameToRemove) => {
        dispatch(removeItem(itemNameToRemove))
        console.log(itemNameToRemove)
    }
        return(
            <div>
                
                {props.itemsData.map((single) => (
                    <div key={single.id} className="m-4 p-4 border-gray-200 border-b-2">
                        <span className="text-gray-600 font-semibold">{single.card.info.name}</span>
                        <p> ₹{single.card.info.price/100}</p>
                        <p className="text-xs text-gray-400 text-wrap w-[450px]">{single.card.info.description}</p>
                        <div className="flex justify-end">
                            <img src={CDN_URL + single.card.info.imageId} className="w-[150px] h-[100px] relative bottom-20 rounded-md"/>
                            <button className="absolute bg-red-600 text-white rounded-lg p-1 m-1 hover:bg-red-800 " onClick={() => handle(single.card.info.name)}>Rem-</button>
                        </div>
                    </div>
                ))}
               
            </div>
        )
    }
}

export default ItemList;