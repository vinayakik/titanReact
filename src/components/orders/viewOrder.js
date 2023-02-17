import React, { Component } from 'react';
import axios from 'axios';

import Display from './displayOrder';

const orderApi = "http://localhost:9800/orders";
const updateOrderApi="http://localhost:9800/updateOrder"

class ViewOrder extends Component{
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }


    render(){
        return(
            <>
            <Display orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){

        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status": query[0].split('=')[1],
                    "date": query[2].split('=')[1],
                    "bank_details": query[3].split('=')[1]
                }

                let id = query[1].split('=')[1].split('_')[1];
            console.log("id",id, "status",data.status,"date",data.date,"bank_details",data.bank_details)

                fetch(`${updateOrderApi}/${id}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    // body: JSON.stringify(data)
                    body: JSON.stringify(data)

                })
            }
        }
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]
        console.log(sessionData)


        axios.get(`${orderApi}?email=${sessionData[1]}`).then((res) => {this.setState({orders:res.data})})
    
        // axios.get(`${orderApi}`).then((res)=>{this.setState({orders:res.data})})
        // // axios.get(`${orderApi}`).then((res)=>{console.log(res.data)})

    }
}

export default ViewOrder;