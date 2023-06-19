//import "./App.css";
import React from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter";
import Cards from "./components/Cards";

import { filterData } from "./data";
import { apiUrl } from "./data";

import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

//import toast from 'react-toastify'
//import { ToastContainer } from "react-toastify";

function App() {

  //using useState hook to render the courses in card components
  const [course, setCourse] = useState([]);

  // store variable to show spinner 
  const[loader,setLoader] = useState(true)

const[category,setCategory]=useState(filterData[0].title);

async function getData(){
  setLoader(true);
try{

let response=await fetch(apiUrl);
let data=await response.json();
setCourse(data.data);
}
catch(error){
  //toast.error("Something went Wrong");
console.log("Error Occurs!!")
}
setLoader(false)
}


useEffect(()=>{
  getData();
},[]);


  return (
   <div className="flex flex-col min-h-screen  bg-gray-700">

<div>
  <Navbar/>
</div>

<div className='opacity-90'>

<div>
  <Filter data={filterData}  category={category} setCategory={setCategory}/>
</div>

<div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]  flex-wrap">

{
  loader ? <Spinner/>: <Cards course={course} category={category} />
}
 
</div>

</div>







   </div>
  );
}

export default App;
