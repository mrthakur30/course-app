import { useEffect, useState } from "react";
import dummyData from "../utils/data";
import { Course } from "../utils/store";
import Navbar from "../components/Navbar";
import image from "../assets/Coding.png"
import CourseCard from "../components/CourseCard";

function Home() {
  const [data, setData] = useState<Course[]>();


  useEffect(() => {
    setData(dummyData)
  },[])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text center text-3xl mt-5 font-bold">All Courses</h1>

        <div className="grid grid-cols-1 md:mx-3 mx-1 mt-5 md:grid-cols-3 gap-3">
              {
                data?.map((course) => (
                 <CourseCard
                   key={course.id} 
                   id={course.id}
                   name={course.name}
                   instructor={course.instructor}
                   image={image}
                 />
                ))
              }
        </div>
      </div>
    </div>
  );
}

export default Home;
