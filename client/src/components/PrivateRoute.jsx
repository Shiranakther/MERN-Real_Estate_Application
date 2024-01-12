import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoute() {
    const {CurrentUser} = useSelector((state) => state.user);
  return ( current ? <Outlet/> : <Navigate to='/sign-in' />
    
  )
}
