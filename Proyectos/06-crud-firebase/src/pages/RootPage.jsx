import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

const RootPage = () => {
  return (
    <>

    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootPage