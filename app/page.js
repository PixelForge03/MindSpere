import Header from "./components/header"
import React from "react"
import Beranda from "./pages/beranda"
import Service from "./pages/service"
import Solution from "./pages/solution"
import Kontak from "./pages/Kontak"


const page = () => {
  return (
    <>
   
    <Beranda/>
    <Service/>
    <Kontak/>
    </>
  )
}

export default page;