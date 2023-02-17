import React from 'react';
import './catagories.css';

const Catagory=()=>{
    return(
        <>
        <div className="catagories">
      <div className="smart-watch watch-cat">
        <a href="#"><img src="images/homepage/categories/smart watch.jpg" alt="smart watch" className="responsive"/></a>
      </div>
      <div className="chain-watch watch-cat">
        <a href="#"><img src="images/homepage/categories/chain watch.jpg" alt="chain watch" className="responsive"/></a>
      </div>
      <div className="tommy-watch watch-cat">
        <a href="#"><img src="images/homepage/categories/tommy.jpg" alt="tommy watch" className="responsive"/></a>
      </div>
      <div className="fastrack-buds watch-cat">
        <a href="#"><img src="images/homepage/categories/fastrack buds.jpg" alt="fastrack buds" className="responsive"/></a>
      </div>
    </div>
        </>
    )
}

export default Catagory;