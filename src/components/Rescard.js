import { CDN_URL } from "../utils/constans";

export const ResCard = ({resData}) => {
      
    const{name,cloudinaryImageId,cuisines,locality,areaName,avgRating,costForTwo} = resData?.info;
    console.log(resData.info)
          

    return (
        <div  data-testid="rescard" className="p-4 m-4 w-[250px]  rounded-sm bg-gray-200 hover:bg-orange-500  transition text-center shadow-lg">
            <img className = "rounded-md w-[100%]" src = {CDN_URL + cloudinaryImageId} alt="food"/>
            <h3 className="p-4 font-bold text-orange-950">{name}</h3>
            <h4 className=" text-orange-950">{cuisines.join(", ")}</h4>
            <h4 className=" text-orange-950">{locality}</h4>
            <h4 className=" text-orange-950">{costForTwo}</h4>
            <h4 className=" text-orange-950">{areaName}</h4>
            <h4 className=" text-orange-950">{avgRating}</h4>
        </div>
    );
};

//higher order component => component as an input return new component 
export const PromotedRes = (ResCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white rounded-lg m-2 p-2">Offers Going on !!!</label>
                <ResCard {...props}/>
            </div>
        )
    }
}





export default ResCard;









// export const PromotedRes = (ResCard) => {
//     return (props) => {
//         return(
//             <div>
//                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
//                 <ResCard {...props}/>
//             </div>
           
//         )
//     }
// }
