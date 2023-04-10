import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/products/Products";
import FeaturedProducts from "./components/products/FeaturedProducts";
import NewProducts from "./components/products/NewProducts";
import { Users } from "./components/users/Users";
import UserDetails from "./components/users/UserDetails";
import AdminUser from "./components/users/AdminUser";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/services/authservice";
import Login from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/AboutPage"));

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="ordersummary" element={<OrderSummary />}></Route>
          <Route path="products" element={<Products />}>
            {/* Index route is used when one of the nested route is required to be loaded
              for a parent route */}
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<AdminUser />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
