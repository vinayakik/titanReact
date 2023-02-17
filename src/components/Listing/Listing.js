import React, { Component } from 'react';
import ListingDisplay from './ListingDisplay';
import './Listing.css';
import BrandFilter from '../filters/brandFilter';
import CostFilter from '../filters/costFilter';
import axios from 'axios';

//API url for listing page based on the collection selected
const lurl = "http://localhost:9800/watches?collectionId="

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listWatches: ''
        }
    }
    setDataFilter =(data)=>{
        this.setState({listWatches:data})
    }

    render() {
        
        return (
            <div class="container2">
                <div className="filter-block">
                    <p className="heading" style={{ textAlign: "center" }}>Filters</p>
                    <hr />
                    <p className="heading">Brand</p>
                    <BrandFilter collection_id={this.props.match.params.collection_id }
                    watchBasedOnBrand={(data)=>{this.setDataFilter(data)}}/>
                    <p className="heading">Price</p>
                    
                    <CostFilter  collection_id={this.props.match.params.collection_id }
                    watchBasedOnBrand={(data)=>{this.setDataFilter(data)}}/>
                </div>

                {/* Item list display */}
                <div class="content-list">
                    <ListingDisplay listData={this.state.listWatches} />
                </div>



            </div>
        )

    }

    //api calling with normal methos
    // componentDidMount() {
    //     let collection_id = this.props.match.params.collection_id;
    //     console.log("hello",collection_id);
        // console.log(`${lurl}${collection_id}`)
    //     sessionStorage.setItem('collection_id',collection_id);
    //     fetch(`${lurl}${collection_id}`, { method: 'GET' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             this.setState({ listWatches: data })
    //         })
    // }

    //API calling with Axios
    componentDidMount(){
        let collection_id = this.props.match.params.collection_id;
        sessionStorage.setItem('collection_id',collection_id);
        console.log(this.props)

        console.log(`${lurl}${collection_id}`)
        axios.get(`${lurl}${collection_id}`)
        .then((res) => {this.setState({listWatches:res.data})})

    }

}

export default Listing;