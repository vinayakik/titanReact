import React, { Component } from 'react';
import axios from 'axios'

const url = 'http://localhost:9800/collectionFilter'

class BrandFilter extends Component {
    constructor() {

        super();
    }
    brandFilter=(event)=>{
        console.log("changed the filter to ",event.target.value)
        let collection_id=this.props.collection_id;
        let brand_name=event.target.value;
        let brandURL=""
        if(brand_name===""){
            brandURL=`${url}/${collection_id}`;
        }else{
            brandURL=`${url}/${collection_id}?brandId=${brand_name}`
        }

        axios.get(brandURL)
            .then((res)=>{this.props.watchBasedOnBrand(res.data)})
        console.log(brandURL);
        
    }

    render() {
        return (
            <>
                <div className="brand-filter filters" onChange={this.brandFilter}>
                    <div>
                        <label for="All">
                            <input type="radio" id="All" name="brand_name" value="" />All
                        </label>
                    </div>
                    <div>
                        <label for="Titan">
                            <input type="radio" id="Titan" name="brand_name" value="1" />Titan
                        </label>
                    </div>

                    <div>
                        <label for="Sonata">
                            <input type="radio" id="Sonata" name="brand_name" value="2" />Sonata
                        </label>
                    </div>

                    <div>
                        <label for="Tommy">
                            <input type="radio" id="Tommy" name="brand_name" value="3" />Tommy Hilifiger
                        </label>
                    </div>

                    <div>
                        <label for="Xylys">
                            <input type="radio" id="Xylys" name="brand_name" value="4" />Xylys
                        </label>
                    </div>

                    <div>
                        <label for="Fastrack">
                            <input type="radio" id="Fastrack" name="brand_name" value="5" />Fastrack
                        </label>
                    </div>

                </div>
            </>
        )
    }
}

export default BrandFilter;