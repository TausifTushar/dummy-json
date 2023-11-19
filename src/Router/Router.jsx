import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Product from "../Components/Product/Product";
import ProductDetails from "../Components/ProductDetails/ProductDetails";



const router = createBrowserRouter([

   
        {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
              path: "/Product",
              loader: ()=>fetch('https://dummyjson.com/products'),
              element: <Product></Product>  
            },
            {
                path: "/Product/:id",
                loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
                element: <ProductDetails></ProductDetails>
            }
        ]
       }
    
])

export default router