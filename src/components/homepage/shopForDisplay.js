import React from 'react';
// import './shopFor.css';
import { Link } from 'react-router-dom';

const ShopForDisplay = (props) => {

    const listWatch = ({ watchData }) => {
        // console.log("watchData",typeof(watchData))
        if (watchData) {
            return watchData.map((item) => {
                return (
                
                    <Link to={`/listing/${item.collection_id}`}>
                        <div className="card" key={item.id}>
                            <div className="card-image">
                                <img src={item.watch_image} alt="men watches" />
                            </div>
                            <div className="card-content">
                                <Link href="#">{item.watchType}</Link>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <>
            {listWatch(props)}
        </>
    )
}
export default ShopForDisplay;