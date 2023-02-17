import React, { Component } from 'react';
import './placeOrder.css';
import axios, { toFormData } from 'axios';

const cartURL = "http://localhost:9800/cart";
const orderURL = "http://localhost:9800/placeOrder";

class PlaceOrder extends Component {
    constructor(props) {
        super(props);

        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]

        this.state = {
            id: Math.floor(Math.random() * 10000),
            name: sessionData?sessionData[0]:'',
            email: sessionData?sessionData[1]:'',
            cost: 0,
            phone: sessionData?sessionData[2]:'',
            address: "Hno 62 Bangalore",
            menuItem: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        // console.log("from checkout",obj.menuItem)
        fetch(orderURL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(console.log('order added'))
            // .then(this.props.history.push('/viewBooking'))
    }


    renderItem = (data) => {

        if (data) {
            return data.map((item) => {
                return (
                    <div className="cart_card">
                        <div className="cart-imageDiv">
                            <img src={item.watch_image} alt={item.watch_name} />
                        </div>
                        <div className="cart-card-content">
                            <p className="watchName">{item.watch_name}</p>
                            <p className="product-id">NP9400494204QL01</p>
                            <span>₹</span>
                            <span className="watch-price">{item.watch_price}</span>
                            <br /><br /> <br />
                            <div className="qty-control">
                                <button className="decrement" onClick={this.changeQty}>-</button>
                                <input className="qtyInput" type="number" min="1" max='2' value="1" disabled />
                                <button className="increment" onClick={this.changeQty}>+</button>
                            </div>
                            <br />
                            <div >
                                <p>Total </p>
                                <span>₹</span>
                                <span className="each-total">{item.watch_price} </span>
                            </div>
                        </div>

                    </div>


                    // <div classNameName="orderItems" key={item.menu_id}>
                    //     <img src={item.watch_image} alt={item.watch_name} />
                    //     <h3>{item.watch_name}</h3>
                    //     <h4>Rs. {item.watch_price}</h4>
                    // </div>
                )
            })
        }
    }
    // // To increment and decrement the count in cart
    // changeQty(){
    //     let allIncrementButtons = document.querySelectorAll(".increment");
    //     let allDecrementButtons = document.querySelectorAll(".decrement");
    //     let allQtyInputs = document.querySelectorAll(".qtyInput");


    //     for (let i = 0; i < allIncrementButtons.length; i++) {
    //         allIncrementButtons[i].addEventListener('click', function () {
    //             allQtyInputs[i].stepUp();
    //             this.calculateEachTotal();
    //             // grandTotal()
    //         })
    //     }

    //     for (let i = 0; i < allDecrementButtons.length; i++) {
    //         allDecrementButtons[i].addEventListener('click', function () {
    //             allQtyInputs[i].stepDown();
    //             this.calculateEachTotal();
    //             // grandTotal()
    //         })
    //     }
    // }



    // // To calculate each total---------------------------------

    // calculateEachTotal() {
    //     let eachPrice = document.querySelectorAll(".watch-price");
    //     let eachCount = document.querySelectorAll(".qtyInput");
    //     let eachTotal = document.querySelectorAll(".each-total");


    //     for (let i = 0; i < eachPrice.length; i++) {
    //         let count = eachCount[i].value;
    //         let price = eachPrice[i].innerHTML;
    //         eachTotal[i].innerHTML = count * price;
    //     }
    // }

    // // Calculate grand total

    // grandTotal(); //function will be called when window will load

    // grandTotal() {
    //     console.log("function called Grand total")
    //     let total = 0;
    //     let eachTotal = document.querySelectorAll(".each-total");
    //     for (let i = 0; i < eachTotal.length; i++) {
    //         total = total + Number(eachTotal[i].innerHTML);
    //     }
    //     console.log("total bill",total);
    //     this.setState({ cost: 1000 })
    //     // document.querySelector(".grandTotal").text(total);
    // }

    // findTotal(data){
    //     data.map((item) => {
    //         let totalPrice = totalPrice + parseFloat(item.watch_price);
    //         return 'ok'
    //     })
    // }
    render() {

        return (
            <>
                <div className="container3" onLoad={this.grandTotal}>
                    <div className="content-cart">
                        {this.renderItem(this.state.menuItem)}
                        {console.log(this.state.menuItem)}
                    </div>

                    <div className="billing-block">
                        <p className="heading" style={{ textAlign: "center" }}>Order Summary</p>
                        <hr className="order-summary-hr" />
                        <div className="cart-price-detail-section">
                            <div className="cart-total-price">
                                <p>Order Total</p>
                                <p>
                                    <span>
                                        ₹
                                    </span>
                                    <span className="grandTotal">{this.state.cost}</span>
                                </p>

                            </div>
                            <div className="cart-total-price">
                                <p>Shipping</p>
                                <p> FREE</p>
                            </div>

                            <div className="cart-you_pay">
                                <p className="you-pay">You Pay</p>
                                <p >
                                    <span>
                                        ₹
                                    </span>
                                    <span className="grandTotal" >{this.state.cost}</span>
                                </p>

                            </div>

                        </div>
                        {/* <button className="proceed-to-checkout" onClick={this.checkout}>PROCEED TO CHECKOUT</button> */}

                        {/* Billing details--------- */}
                        <br />
                        <br />
                        <form action='http://localhost:4100/paynow' method='POST'>
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.id}/>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname" className="control-label">FirstName </label>
                                    <input className="form-control" id="fname" name="name" value={this.state.name}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email" className="control-label">Email</label>
                                    <input className="form-control" id="email" name="email" value={this.state.email}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone" className="control-label">Phone</label>
                                    <input className="form-control" id="phone" name="phone" value={this.state.phone}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address" className="control-label">Address</label>
                                    <input className="form-control" id="address" name="address" value={this.state.address}
                                        onChange={this.handleChange} />
                                </div>

                            </div>
                        <button className="proceed-to-checkout" type='submit' onClick={this.checkout}>PROCEED TO CHECKOUT</button>

                        </form>
                    </div>

                </div>
            </>
        )
    }

    componentDidMount() {
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })

        let orderID = { id: orderId }


        fetch(cartURL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body:orderID
            body: JSON.stringify(orderID)
            // body:orderID
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("response", data)
                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.watch_price);
                    console.log(totalPrice)
                    return 'ok'
                })
                this.setState({ menuItem: data, cost: totalPrice })
                console.log(menuItem)
                console.log("data", data)

            })

    }

    // componentDidMount() {
    //     let menuItem = sessionStorage.getItem('menu');
    //     let orderId = [];


    //     menuItem.split(',').map((item) => {
    //         orderId.push(parseInt(item));
    //         return 'ok'
    //     })
    //     // let orderID=JSON.stringify(orderId)
    //     let orderID = { id: orderId }
    //     console.log("order ids", orderID)

    //     axios.post(cartURL, orderID)
    //         .then(data => {
    //             console.log("response", data)
    //             let totalPrice = 0;
    //             // totalPrice=this.findTotal(data);
    //             // data.map((item) => {
    //             //     totalPrice = totalPrice + parseFloat(item.watch_price);
    //             //     return 'ok'
    //             // })
    //             // let totalPrice = 1000

    //             this.setState({ menuItem: data })
    //         })
    // }

}

export default PlaceOrder;