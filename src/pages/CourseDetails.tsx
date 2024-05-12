import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import dummyData from "../utils/data";
import { useEffect, useState } from "react";
import { Course } from "../utils/store";
import image from "../assets/Coding.png"
import CollapsibleCard from "../components/CollapsibleCard";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { enrollCourse } from "../features/student/studentSlice";

function CourseDetails() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [courseData, setCourseData] = useState<Course>();

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredCourse = dummyData.find((course) => course.id === parseInt(id));
    setCourseData(filteredCourse);
  }, [id]);

  if (!courseData) {
    return;
  }

  return (
    <div>
      <Navbar />

      <div className="flex md:flex-row flex-col-reverse p-2 bg-zinc-100 rounded-md mx-2 my-5 justify-between">
        <div className="flex flex-col mx-4 my-4 gap-3">
          <h1 className="text-2xl font-bold">{courseData.name}</h1>
          <p className="font-semibold">By {courseData.instructor}</p>
          <p>Description : {courseData.description}</p>
          <p>Duration : {courseData.duration}</p>
          <p>Status : {courseData.enrollmentStatus}</p>
          <span className="flex gap-2">
            Prereq : {courseData.prerequisites.map((item) => {
              return <span className="text-slate-800">{item}</span>
            })}
          </span>
          <p>Location : {courseData.location}</p>

          <Button
            variant="contained"
            className="bg-slate-800 w-20 text-white"
            onClick={() => {
              dispatch(enrollCourse({ course: courseData}))
            }}
          >
            Enroll
          </Button>

          <div className="mt-7">
            <h1 className="font-semibold">Syllabus</h1>
            <ul className="divide-y border my-4 border-black divide-slate-700">
              {courseData.syllabus.map((item, index) => {
                return (
                  <li key={index}>
                    <CollapsibleCard item={item} />
                  </li>)
              })}
            </ul>
          </div>
        </div>
        <img src={image} className="md:w-1/2 h-1/4" alt="" />
      </div>
    </div>
  );
}

export default CourseDetails;
