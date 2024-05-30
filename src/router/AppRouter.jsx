import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { RegisterPage } from "../auth/pages/RegisterPage"
import { EcomerceRoutes } from "../ecomerce/routes/EcomerceRoutes"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="auth/login/*" element={
                    <Routes>
                        <Route path="/*" element={<LoginPage />} />
                    </Routes>
                }
                />
        

            <Route path="auth/register/*" element={
                  <Routes>
                    <Route path="/*" element={<RegisterPage />} />
                  </Routes>
              }
            />

            <Route path="/*" element={
                <EcomerceRoutes />
            } 
            />

        </Routes>
    </>
  )
}
