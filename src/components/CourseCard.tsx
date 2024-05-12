import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  instructor: string;
  image: string;
}

const CourseCard: React.FC<Props> = ({ id, name ,instructor, image}) => {
  return (
    <Link
      to={'/course/'+id} 
      className="bg-white group hover:bg-slate-200 transition-all shadow-md rounded-md p-3">
      <img src={image} alt="coding" className="w-full" />
      <h1 className="text-2xl text-slate-800 font-bold">{name}</h1>
      <p>{instructor}</p>
    </Link>
  );
}

export default CourseCard;
