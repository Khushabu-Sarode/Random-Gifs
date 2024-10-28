import axios from "axios";
import React, { useEffect, useState }  from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  
   const [gif,setGif] = useState('');
   const [loading,setloading] = useState('false');
   
   async function fetchData(){
       setloading(true);
       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY} `;
       const {data} = await axios.get(url);
       const imageSource = data.data.images.downsized.url;
       setGif(imageSource);
       setloading(false);
    // console.log(output);
   }
   useEffect( () => {
    fetchData();
   },[])

   function clickHAndler(){
      fetchData();
   }

    return (
        <div className="w-1/2 mt-28 bg-green-500 rounded-md border border-black flex flex-col items-center gap-y-5" >
          <h1 className="text-2xl mt-[15px] underline uppercase font-semibold">Random Gif</h1>

          {
            loading ? (<Spinner/>) : (<img src={gif} width={450} />)
          }
          
          <button onClick={clickHAndler} className="w-10/12 opacity-90 rounded-lg text-lg py-2 mb-[20px]  bg-white ">
            Generate
          </button> 
        </div>
    )
}
export default Random;