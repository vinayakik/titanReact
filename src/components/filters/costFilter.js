import React, { Component } from 'react';
import axios from 'axios'

const url = 'http://localhost:9800/collectionFilter'

class CostFilter extends Component {
    constructor() {

        super();
    }
    costFilter=(event)=>{
        console.log("changed the filter to ",event.target.value)
        let collection_id=this.props.collection_id;
        let cost=(event.target.value).split('-');
        let Lcost=cost[0];
        let Hcost=cost[1];

        let costURL=""
        if(event.target.value===""){
            costURL=`${url}/${collection_id}`;
        }else{
            costURL=`${url}/${collection_id}?lprice=${Lcost}&hprice=${Hcost}`
        }

        axios.get(costURL)
            .then((res)=>{this.props.watchBasedOnBrand(res.data)})
        console.log(costURL);
        
    }

    render() {
        return (
            <>
                
                <div className="price-filter filters" onChange={this.costFilter}>
                        <div>
                            <input type="radio" name="price_range" value="1000-3000" id="1000" />
                            <label for="1000"> 1000-3000</label>
                        </div>
                        <div>
                            <input type="radio" name="price_range" value="3000-6000" id="3000" />
                            <label for="3000"> 3000-6000</label>
                        </div>
                        <div>
                            <input type="radio" name="price_range" value="6000-10000" id="6000" />
                            <label for="6000"> 6000-10000</label>
                        </div>
                        <div>
                            <input type="radio" name="price_range" value="+" id="All2" />
                            <label for="All2">All Price</label>
                        </div>
                    </div>

            </>
        )
    }
}

export default CostFilter;