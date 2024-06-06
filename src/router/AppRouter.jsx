import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { RegisterPage } from "../auth/pages/RegisterPage"
import { EcomerceRoutes } from "../ecomerce/routes/EcomerceRoutes"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="auth/login/*" element={
                  <PublicRoute>
                    <Routes>
                        <Route path="/*" element={<LoginPage />} />
                    </Routes>
                  </PublicRoute>
                }
                />
        

            <Route path="auth/register/*" element={
                <PublicRoute>
                  <Routes>
                    <Route path="/*" element={<RegisterPage />} />
                  </Routes>
                </PublicRoute>
              }
            />

            <Route path="/*" element={
              <PrivateRoute>
                <EcomerceRoutes />
              </PrivateRoute>
            } 
            />

        </Routes>
    </>
  )
}
