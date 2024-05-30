import { Navigate, Route, Routes } from "react-router-dom"
import EcomerceApp from "../pages/EcomerceApp"


export const EcomerceRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="ecomerce" element={<EcomerceApp />} />
            <Route path="/*" element={<Navigate to="/ecomerce" />} />
        </Routes>
    
    </>
  )
}
