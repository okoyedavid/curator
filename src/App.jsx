import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

import SpinnerFullPage from "./ui/SpinnerFullPage.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserPage from "./features/Dashboard/UserPage.jsx";

const MainLayout = lazy(() => import("./ui/HomeLayout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Error = lazy(() => import("./ui/Error"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      staleTime: 0,
    },
  });
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <Error />, // Catch errors for all child routes under MainLayout
      children: [
        { element: <HomePage />, path: "/" },
        { element: <Login />, path: "/login" },
      ],
    },
    {
      element: <Dashboard />,
      path: "/dashboard",
      errorElement: <Error />,
      children: [
        { element: <UserPage />, path: "user" }, // Relative path without /dashboard
      ],
    },
  ]);

  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: `var(--white-clr-1)`,
              color: `var(--blue-clr-2)`,
            },
          }}
        />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
