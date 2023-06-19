
import { useState } from "react";
import Card from "./Card";

function Cards({course,category}){

const[likedCourses,setLikedCourses]=useState([]);
    function getCourses(){

if(category=== "All"){
    let allCourses=[];
    Object.values(course).forEach((array)=>{
       array.forEach((cd)=>{
        allCourses.push(cd);
       });
    });
    return allCourses;
}
else{
//specific category array data passes...
return course[category];


}   
}

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">

{getCourses().map((courseData)=>{
    return <Card courses={courseData} key={courseData.id}
     likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
})}

 </div>
    )
}
export default Cards;