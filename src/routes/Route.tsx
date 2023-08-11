import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import SuspenseContainer from "./SuspenseContainer";
import { Box } from "@chakra-ui/react";

const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));

const Router = () => {
  return (
    <Box bg="#F5F5F5" color="#1A1A1A" h="100vh" w="100vw">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/login"
            element={
              <SuspenseContainer>
                <Login />
              </SuspenseContainer>
            }
          />
          <Route
            path="/register"
            element={
              <SuspenseContainer>
                <Register />
              </SuspenseContainer>
            }
          />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Router;
