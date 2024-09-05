import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import App from '../App';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import ForgorPassword from '../pages/Login/ForgotPassword';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import AllUserDuplicate from '../pages/AdminPanel/AllUserDuplicate';
import AllProductDup from '../pages/AdminPanel/AllProductDup';
import ProductCategories from '../pages/Products/ProductCategories';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import MyCart from '../pages/MyCart/MyCart';
import SearchProduct from '../pages/SearchProduct';
import ProductListing from '../pages/ProductListing/ProductListing';
import AllRecipes from '../pages/AdminPanel/AllRecipes';
import RecipeListing from '../pages/RecipeListing/RecipeListing';
import MyWishlist from '../pages/MyWishlist/MyWishlist';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "",
                element: <Home />,   
            },
            {
                path: "login",
                element: <Login />,   
            },
            {
                path: "register",
                element: <Register />,   
            },
            {
                path: "forgotPassword",
                element: <ForgorPassword />
            },
            {
                path : "product-category",
                element : <ProductCategories/>
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path: "product-listing",
                element: <ProductListing />
            },
            {
                path: "cart",
                element: <MyCart />
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path: "recipe-listing",
                element: <RecipeListing />
            },
            {
                path: "wishlist",
                element: <MyWishlist />
            },
            {
                path: "recipe/:id",
                element: <RecipeDetails />
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children:[
                    {
                       path:"all-users",
                       element: <AllUserDuplicate /> 
                    },
                    {
                        path:"all-products",
                        element: <AllProductDup /> 
                     },
                     {
                        path:"all-recipes",
                        element: <AllRecipes /> 
                     },
                ]
            }
        ]
}
]);

export default router;