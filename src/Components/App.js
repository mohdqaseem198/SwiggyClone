import react , {Suspense, lazy} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { MockData } from "./MockData";
import Restaurant from "./Restaurant";
import { Provider } from "react-redux";
import AppStore from "../store/ReduxStore";
import Cart from "./Cart";

const LazyComp = react.lazy(() => import("./LazyComponent"));


const App = () => {
    return (
            <Provider store={AppStore}>
                <div>
                    <RouterProvider router={appRouter}/>
                </div>
            </Provider>
            //  <div>
            //     <Header />
            //     <Main />
            //     <Footer />
            // </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Header /> ,

        children:[{
            path:"/",
            element : 
                <>
                <Main />
                <Footer />
                </>
        },

        {
        path:"/restaurant/:id",
        element:<Restaurant />
        },

        {
            path:"/Cart",
            element:<Cart />
        },

        {
            path : "/lazyLoaded",
            element:<LazyComp />
        }

    ],

    }
]);

export default App;