import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartslices";
import { Hg } from "./ItemList";

const Cart = () => {
    const Rem = Hg(ItemList);
    const carts = useSelector((store) => store.cart.items);
    console.log(carts)
    const dispatch = useDispatch();
    const handle = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl text-slate-600 m-4 p-4">Items that you Added</h1>
            <div className="text-center m-4">
            <span><button className="m-2 p-2 bg-slate-700 text-white rounded-lg"  onClick={handle}>Clear Cart</button></span>
            
            </div> 
           
            <div className={carts.length!=0 ? "w-6/12 m-auto border rounded-md shadow-lg" : "w-6/12 m-auto relative left-56"}>
            {carts.length ===0 && <h1 className="font-bold text-red-600">No items in your cart go and purchase soon!!!</h1>}
            <Rem itemsData = {carts}/>
            </div>
        </div>
    )
}

export default Cart;