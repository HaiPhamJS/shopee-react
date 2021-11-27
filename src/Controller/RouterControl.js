import React from "react";
import Home from "../Components/Home/Home";
import ProductPage from "../Components/Product/ProductPage";

const RouterControl = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/home',
        exact: false,
        main: () => <Home />
    },
    {
        path: '/product/:id',
        exact: false,
        main: () => <ProductPage />
    }
]

export default RouterControl