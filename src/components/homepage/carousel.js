import React from 'react';


const Carousel=()=>{
    return(
        <>
            <div className="container1">
      <div id="devCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#devCarousel" data-slide-to="0" className="active carousel_control"></li>
          <li data-target="#devCarousel" data-slide-to="1" className="carousel_control"></li>
          <li data-target="#devCarousel" data-slide-to="2" className="carousel_control"></li>
          <li data-target="#devCarousel" data-slide-to="3" className="carousel_control"></li>
          <li data-target="#devCarousel" data-slide-to="4" className="carousel_control"></li>

        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src="images/homepage/wallpaper1.jpg" alt="one" />
          </div>
          <div className="item">
            <img src="images/homepage/wallpaper6.jpg" alt="one" />
          </div>
          <div className="item">
            <img src="images/homepage/wallpaper3.jpg" alt="one" />
          </div>
          <div className="item">
            <img src="images/homepage/wallpaper8.jpg" alt="one" />
          </div>
          <div className="item">
            <img src="images/homepage/wallpaper5.jpg" alt="one" />
          </div>
        </div>
        <a className="left carousel-control" href="#devCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#devCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
        </>
    )

}
export default Carousel;