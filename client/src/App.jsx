import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import SpinnerFullPage from "./shared/ui/SpinnerFullPage";
import ScrollToTop from "./shared/ui/ScrollToTop";
const AppLayout = lazy(() => import("./layout/AppLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const UserSettings = lazy(() => import("./pages/UserSettings"));
const ProtectedRoute = lazy(() => import("./shared/ui/ProtectedRoute"));
const BookingSuccess = lazy(() => import("./pages/BookingSuccess"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const TourDetails = lazy(() => import("./pages/TourDetails"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/tours/:tourId" element={<TourDetails />} />
              <Route
                path="/my-account/:userId"
                element={
                  <ProtectedRoute>
                    <UserSettings />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/booking/booking-success"
              element={
                <ProtectedRoute>
                  <BookingSuccess />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
              style: {
                backgroundColor: "#55c57a",
                color: "#f7f7f7",
              },
            },
            error: {
              duration: 5000,
              style: {
                backgroundColor: "#e74c3c",
                color: "#fff",
              },
            },
            style: {
              fontSize: "20px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
