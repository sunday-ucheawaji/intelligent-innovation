import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import SuspenseContainer from "./SuspenseContainer";
import { Box } from "@chakra-ui/react";
import RequireAuth from "./RequiredAuth";

const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const Profile = React.lazy(() => import("../pages/Profile"));
const DocumentViewer = React.lazy(() => import("../pages/DocumentViewer"));
const DocumentSigning = React.lazy(() => import("../pages/DocumentSigning"));

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
          <Route
            path="/profile"
            element={
              <SuspenseContainer>
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              </SuspenseContainer>
            }
          />
          <Route
            path="/documents"
            element={
              <SuspenseContainer>
                <RequireAuth>
                  <DocumentViewer />
                </RequireAuth>
              </SuspenseContainer>
            }
          />
          <Route
            path="/sign-document"
            element={
              <SuspenseContainer>
                <RequireAuth>
                  <DocumentSigning />
                </RequireAuth>
              </SuspenseContainer>
            }
          />

          <Route
            path="*"
            element={
              <SuspenseContainer>
                <Login />
              </SuspenseContainer>
            }
          />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Router;
