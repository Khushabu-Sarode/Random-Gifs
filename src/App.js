import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className=" text-center mt-[40px] font-bold text-2xl ml-[15px] w-11/12 px-10 py-2 mr-[15px] absolute bg-white rounded-md">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gsp-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}


// install npm i axios 