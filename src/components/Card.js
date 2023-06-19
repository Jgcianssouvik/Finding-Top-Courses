import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Card({courses,likedCourses,setLikedCourses}){



function clickHandler(){

    if(likedCourses.includes(courses.id)){
        //already liked..
        setLikedCourses((prev)=>prev.filter((cid)=>(cid!==courses.id)));
        toast.warning("Liked Removed");
    }
    else{
//insert liked

if(likedCourses.length===0){
    setLikedCourses([courses.id]);
}
else{
    setLikedCourses((prev)=>[...prev,courses.id])
}
toast.success("Liked Courses Successfully")
    }
}


    return(
        <div className="w-[300px] bg-black rounded-md overflow-hidden opacity-100">
<div className="relative "><img src={courses.image.url}/>
<div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
    <button onClick={clickHandler}>
    {
        likedCourses.includes(courses.id) ?( <FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder ontSize="1.75rem"/>)
    }
   </button>
</div>


</div>


<div className="p-4">
<h2 className="text-white font-semibold text-lg leading-6">{courses.title}</h2>
<p className="text-white mt-2 ">

{
    courses.description.length>100 ?(courses.description.substr(0,100))+"...":(courses.description)
}
 </p>


</div>
 </div>
    )
}
export default Card;