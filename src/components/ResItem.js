
import ItemList from "./ItemList";
const ResItem = ({data, disp, setDisp}) => {

    const toggles = () => {
        
        setDisp();
    }

    
  
    return (
        <div>
            {/*Accordian Header */}
        <div className="m-4 p-4 w-[800px]  shadow-lg  bg-gray-100  cursor-pointer" >
            
            <div className="flex justify-between transition  ease-out" onClick={toggles}>
            <span className="font-bold text-md   text-gray-600">{data.title}({data.itemCards.length})</span>
            <span className="">{disp ? "🔼" : "🔽"}</span>
            </div>
            <div className="">         
            {   
            //if my disp(items) is present then only show my card other wise not
             disp &&  <ItemList itemsData = {data.itemCards} />
            }
            </div>


         
        </div>
            
        </div>
    )
}

export default ResItem;