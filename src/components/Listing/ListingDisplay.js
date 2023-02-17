import React from 'react';
import { Link } from 'react-router-dom';
import './Listing.css';

const ListingDisplay = (props) => {

        const renderData = ({listData}) => {
        console.log("item list  ",listData);

                if (listData) {
                        if (listData.length > 0) {
                        // if (true) {

                                return listData.map((item) => {
                                        return (
                                                <Link to={`/details/${item.watch_id}`}>
                                                        <div className="list_card" key={item.id}>
                                                                <div className="imageDiv">
                                                                        <img src={item.watch_image}
                                                                                alt="watch photo" />
                                                                </div>
                                                                <div className="L_card-content">
                                                                        <p className="watchName">{item.watch_name}</p>
                                                                        <p>₹ {item.watch_price}</p>
                                                                </div>
                                                        </div>
                                                </Link>
                                        )
                                })
                        } else {
                                return (
                                        <div>
                                                <h2>No Data as per filter</h2>
                                        </div>
                                )
                        }
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
        return (
                <>
                        {renderData(props)}
                </>
        )
}

export default ListingDisplay;