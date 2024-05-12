import { useEffect, useState } from "react";
import type { RootState } from '../utils/store'
import Navbar from "../components/Navbar";
import image from "../assets/Coding.png"
import CourseCard from "../components/CourseCard";
import { useSelector } from "react-redux";
import { Course } from "../utils/store";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { courseCompleted } from "../features/student/studentSlice";

function Dashboard() {
  const [data, setData] = useState<Course[]>();
  const enrolledCourses = useSelector((state: RootState) => state.student)
  const dispatch = useDispatch();

  useEffect(() => {

    setData(enrolledCourses);
  }, [enrolledCourses]);

  if (!enrolledCourses || !data) {
    return;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text center text-3xl mt-5 font-bold">Dashboard</h1>
        {data.length !== 0 ?
          <div className="grid grid-cols-1 md:mx-3 mx-1 mt-5 md:grid-cols-3 gap-3">
            {
              data?.map((course) => (
                <div className="flex flex-col gap-1">
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    name={course.name}
                    instructor={course.instructor}
                    image={image}
                  />
                  {
                    !course.isCompleted ?
                      <Button
                        variant="contained"
                        onClick={() => dispatch(courseCompleted({ id: course.id }))}>
                        {"Mark as Completed"}
                      </Button>
                      :
                      <Button>Completed</Button>
                  }
                </div>
              ))
            }
          </div>
          :
          <div>
            No courses found
          </div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
