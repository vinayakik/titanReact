import { render } from '@testing-library/react';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './details.css'

class DetailsDisplay extends Component{
    constructor(){
        super();

        this.state={
            cartStatus:''
        }
    }

    orderId=[];
    addToCart=(id)=>{
        console.log("Added to cart")
        this.orderId.push(id);
        console.log(this.orderId)
        this.setState({cartStatus:"Added to cart. Click on Proceed"})

        this.props.finalOrder(this.orderId);
    }

    renderCart=(orders)=>{
        if(orders){
            return orders.map((item,index)=>{
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }


    
    renderData = ({details}) => {
        // console.log("item detail",itemDetail);
        // console.log("props",details)
        if (details) {
            return details.map((item) => {
                return (
                    <div className="container3" key={item.id}>
                        <div className="watchImg">
                            <img src={item.watch_image} alt={item.watch_name} />
                        </div>

                        <div className="item-details">
                            <p className="brandName">SONATA</p>
                            <h1>{item.watch_name}</h1>
                            <p>{item.product_id}</p>
                            <p className="MRP">MRP {item.watch_price}</p>
                            <p className="description">{item.description}</p>
                            <span className="warranty">WARRANTY PERIOD : {item.warranty_months} Months</span>

                            <br />
                            <br />
                            <label for="netQty" className="net-label">Net Qty: </label>
                            <div className="unitQty" >
                                <input type="text" id="netQty" maxLength="1" size="1" name="quantity" value="1" />
                                <span>Unit</span>
                            </div>
                            <p>{this.state.cartStatus}</p>
                            <button className="add-to-cart" onClick={()=>{this.addToCart(item.watch_id)}}>ADD TO CART</button>


                        </div>

                         {/* Item Number {this.renderCart(this.orderId)}Added */}

                    </div>

                )
            })


        } else {
            return (
                <div>
                    <img src='/images/loader.gif' alt="loader" />
                    <h1>Loading....</h1>
                </div>
            )
        }

    }


// console.log(props);
render(){
    return (
        <>
            {this.renderData(this.props)}
        </>
    )
}

}

export default DetailsDisplay;
