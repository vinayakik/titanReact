import React from 'react';
import './ourCollection.css'

const OurCollection =()=>{
    return(
        <>
                <h1 className="text-center our-collections-head">OUR COLLECTIONS</h1>

<ul className="our-collections">
  <li><a data-toggle="tab" href="#men" id="men1" onclick={window['selectedCollection']}>MEN</a></li>
  <li><a data-toggle="tab" href="#women" onclick={window['selectedCollection']}>WOMEN</a></li>
  <li><a data-toggle="tab" href="#luxury" onclick={window['selectedCollection']}>LUXURY</a></li>
</ul>

<div className="tab-content">
  <div id="men" className="tab-pane active">
    <div className="collection-tile">
      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/men/slim-watch.jpg" alt="Slimmest Watches"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Slimmest Watches</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/men/grand-watch.jpg" alt="Titan Grand Master"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Titan Grand Master</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/men/regalia-watch.jpg" alt="Regalia"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Regalia</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/men/maritime.jpg" alt="Maritime"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Maritime</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div id="women" className="tab-pane fade">
    <div className="collection-tile">
      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/women/raga-moment.jpg" alt="Raga moment"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Raga moment</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/women/Ashvi-watch.jpg" alt="Ashvi"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Ashvi</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/women/Raga-silver.jpg" alt="Raga silver"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Raga Silver</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/women/raga-chic.jpg" alt="Raga Chic"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Raga Chic</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div id="luxury" className="tab-pane fade">
    <div className="collection-tile">
      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/luxury/edge-mechanical.jpg" alt="Edge Mechanical"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Edge Mechanical</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/luxury/midnight-gold.jpg" alt="Midnight gold"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Midnight Gold</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/luxury/nebula.jpg" alt="Nebula"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Nebula</p>
          </div>
        </a>
      </div>

      <div className="watches">
        <a href="#">
          <div className="watch-image">
            <img src="images/homepage/collections/luxury/xylys.jpg" alt="xylys"/>
          </div>
          <div className="watch-name">
            <p className="text-center">Xylys</p>
          </div>
        </a>
      </div>
    </div>
  </div>

</div>
        </>
    )

}
export default OurCollection;