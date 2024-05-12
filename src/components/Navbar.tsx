import { Button } from "@mui/material";
import {  useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  
  const {pathname} = useLocation();
  
  return (
    <div className='w-full shadow h-14 bg-slate-200 p-2'>
       <Button className="" onClick={()=>navigate('/')}>Courses</Button>
        <Button
        variant="contained"
         className="float-right"
         onClick={()=> navigate(pathname==='/dashboard'?'/':'/dashboard')}
         >
           {pathname==='/dashboard'?'Home':'Dashboard'}
        </Button>
    </div>
  );
}

export default Navbar;
