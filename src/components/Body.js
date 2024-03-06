import  ResCard, {PromotedRes} from "./Rescard";
import { useState, useEffect } from "react";
import { BODY_RES_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import FakeCard from "./Shimmer";





// console.log("normal");

export const Body = () => {
    const[listOfRes, setlistOfRes] = useState([]);
    const[filterL, setfilterL] = useState([])
    const[searchValue, setsearchValue] = useState("");
    //custom hook to track the user online/offline status
    const onlineStatus = useOnlinestatus();

    const RescardWithopen = PromotedRes(ResCard);

   
    useEffect(()=> {
        fetchData();
    } ,[]);



    const fetchData =async() => {
       const data =  await fetch(BODY_RES_URL);
       const jsonD = await data.json();
       setlistOfRes(jsonD?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
       setfilterL(jsonD?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     
       console.log(jsonD?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    // //
    // const isBottom = () => {
    //     return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    // }

    // //
    // window.addEventListener("scroll", () => {
    //     if(isBottom){
    //         fetchData();
    //     }
    // })
   

    if(onlineStatus === false) {
        return(
            //make an offline page 
            <h1>you are an offline</h1>
        )
    } 

 


    return listOfRes.length === 0 ? <FakeCard/> :  (
        
        <div className="body">
            <div className="filter flex justify-center p-4 m-4 gap-4">
                <div className="search-bar">
                    <input data-testid="onchangeInput" type="text" className="border border-solid border-orange-300 rounded-sm " value = {searchValue} onChange={
                        (e)=> {
                            setsearchValue(e.target.value);
                            const newList =  listOfRes.filter((res) =>res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                            );
                            
                             
                               setfilterL(newList);
                        }
                    }/>
                    
                    
                    <button onClick={() => {
                        //filter the restaurant cards and update the UI
                        const newList =  listOfRes.filter((res) =>res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                        );
                        
                         
                           setfilterL(newList);

                    }} className="px-2 bg-orange-400 py-2 m-4 text-gray-950 rounded-md">Search</button>

                    <button className="px-2 bg-orange-400 py-2 text-gray-950 m-2 rounded-md" onClick={() => {
                    const listOfResy = filterL.filter((res) => res.info.avgRating> 4);
                    setfilterL(listOfResy);
                }}>Top rated restaurant</button>
                   
                    </div>
                   
                
               
              
            </div>
            
           
            <div className="flex flex-wrap gap-2">
                
                    
                        {
                            filterL.map((single) => <Link   key={single?.info?.id} to={"/restaurant/" + single?.info?.id} className="link">
                              
                              {
                                single.info.aggregatedDiscountInfoV3 ? <RescardWithopen resData={single}/> :
                                 <ResCard resData={single}/>
                              }

                               
                              
                                </Link>)
                              
                        }
                      
                    

                  
                
            </div>
        </div>
    )
}

export default Body;