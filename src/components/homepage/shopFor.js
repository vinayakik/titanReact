import React, { Component } from 'react';
import './shopFor.css';
import ShopForDisplay from './shopForDisplay';

const shopURL = "http://localhost:9800/shopFor";


class ShopFor extends Component {
    constructor() {
        super()

        this.state = {
            watchtypes: ""
        }
    }

    render() {
        // console.log("From render")
        // console.log(this.state.watchtypes)
        return (
            <>
                <div className="shop-container">
                    <h1 className="shop-for">SHOP FOR</h1>
                    <div className="card-container">
                        <ShopForDisplay watchData={this.state.watchtypes}  />
                    </div>
                </div>
        </>
    )
    }

    //calling the API

    componentDidMount() {
        fetch(shopURL, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ watchtypes: data })
            })
    }
}



export default ShopFor;