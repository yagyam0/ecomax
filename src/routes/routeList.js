import Home from "../pages/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Order from "../pages/Order";
import placeOrder from "../pages/Order/placeOrder";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const ROUTE_PATHS = {
    HOME: '/',
    CONTACT: '/Contact',
    ABOUT: '/About',
    ORDERS: '/Orders',
    PRODUCT: '/Product/:productId',
    PLACEORDER: '/Order-Summary',
    COLLECTIONS: '/Collections',
    CART: '/Cart',
    LOGIN: '/Login',
    SIGNUP: '/Signup',
}

export const routeList = [
    {
        path: ROUTE_PATHS.HOME,
        component: Home,
        isPrivate: false
    },
    {
        path: ROUTE_PATHS.COLLECTIONS,
        component: Collections,
        isPrivate: false
    },
    {
        path: ROUTE_PATHS.ORDERS,
        component: Order,
        isPrivate: true
    },
    {
        path: ROUTE_PATHS.PRODUCT,
        component: Product,
        isPrivate: true
    },
    {
        path: ROUTE_PATHS.CART,
        component: Cart,
        isPrivate: false
    },
    {
        path: ROUTE_PATHS.PLACEORDER,
        component: placeOrder,
        isPrivate: true
    },
    {
        path: ROUTE_PATHS.LOGIN,
        component: Login,
        isPrivate: false
    },
    {
        path: ROUTE_PATHS.CONTACT,
        component: Contact,
        isPrivate: false
    },
    {
        path: ROUTE_PATHS.ABOUT,
        component: About,
        isPrivate: false
    }
]