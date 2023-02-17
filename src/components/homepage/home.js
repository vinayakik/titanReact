import React, { Component } from 'react';
import Header from '../header';
import Carousel from './carousel';
import ShopFor from './shopFor';
import Catagory from './catagories';
import Clock from './clock';
import OurCollection from './ourCollection';
import Footer from '../footer';
import DeliveryOffer from './deliveryOffers';



const Home =()=>{
    return (
        <>
            {/* <Header /> */}
            <Carousel />
            <ShopFor />
            <Catagory />
            <Clock />
            <OurCollection />
            <DeliveryOffer />
            {/* <Footer /> */}
        </>
    )
}

// class Home extends Component {
//     constructor() {
//         super();

//         // this.state = {
//         //     color: "black"
//         // }


//     }
//     // colorChange = (event) => {
//     //     this.setState({ color: event.target.value })
//     //     // console.log("function called")
//     // }

//     render() {
//         // const myStyle = {
//         //     color: this.state.color
//         // }
//         return (
//             <>
//                 {/* <Header /> */}
//                 <Carousel />
//                 <ShopFor />
//                 <Catagory />
//                 <Clock />
//                 <OurCollection />
//                 <DeliveryOffer />
//                 {/* <Footer /> */}
//             </>
//         )
//     }
// }



export default Home;