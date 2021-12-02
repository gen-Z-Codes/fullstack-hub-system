import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/user/newUser/NewCustomer";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Messages from "./pages/messages/Messages";
import Transactions from "./pages/transactions/Transactions";
import Reports from "./pages/reports/Reports";
import Mail from "./pages/mail/Mail";
import Feedback from "./pages/feedback/Feedback";

function App() {
    return ( <
        Router >
        <
        Topbar / >
        <
        div className = "container" >
        <
        Sidebar / >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route>{" "} <
        Route path = "/users" >
        <
        UserList / >
        <
        /Route>{" "} <
        Route path = "/user/:userId" >
        <
        User / >
        <
        /Route>{" "} <
        Route path = "/newUser" >
        <
        NewUser / >
        <
        /Route>{" "} <
        Route path = "/products" >
        <
        ProductList / >
        <
        /Route>{" "} <
        Route path = "/product/:productId" >
        <
        Product / >
        <
        /Route>{" "} <
        Route path = "/newproduct" >
        <
        NewProduct / >
        <
        /Route>{" "} <
        Route path = "/messages" >
        <
        Messages / >
        <
        /Route>{" "} <
        Route path = "/transactions" >
        <
        Transactions / >
        <
        /Route>{" "} <
        Route path = "/reports" >
        <
        Reports / >
        <
        /Route>{" "} <
        Route path = "/mail" >
        <
        Mail / >
        <
        /Route>{" "} <
        Route path = "/feedback" >
        <
        Feedback / >
        <
        /Route>{" "} < /
        Switch > { " " } <
        /div>{" "} < /
        Router >
    );
}

export default App;