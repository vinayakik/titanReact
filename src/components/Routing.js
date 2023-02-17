import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/homepage/home';
import Listing from '../components/Listing/Listing';
import Details from '../components/Details/details';
import PlaceOrder from './orders/placeOrder'
// import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder';
import Login from './Login/login';
import Register from './Login/register';

import ShopForDisplay from './homepage/shopForDisplay';


const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
        <ShopForDisplay/>
        
            <Route exact path="/" component={Home}/>
            <Route exact path="/listing/:collection_id" component={Listing}/>
            <Route exact path="/details/:watch_id" component={Details}/>
            <Route exact path="/placeOrder/:watch_name" component={PlaceOrder} />
            {/* <Route path="/placeOrder/:restName" component={PlaceOrder}/> */}
            <Route path="/viewBooking" component={ViewOrder}/>
            <Route path="/login" component={Login}/> 
            <Route path="/register" component={Register}/> 
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;