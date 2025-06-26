import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Block 1 */}
      <div className="banner-block">
        <img src="/images/img1.png" alt="Banner 1" />
        <img src="/images/img2.png" alt="Banner 2" />
         <img src="/images/img8.png" alt="Banner 7" />
      </div>

      {/* Block 2 - Wide */}
      <div className="banner-block wide">
        <img src="/images/hero.img.png" alt="Banner 3" className="wide-top" />
        <div className="wide-bottom-row">
          <img src="/images/img3.png" alt="Banner 4" />
          <img src="/images/img4.png" alt="Banner 5" />
        </div>
        
      </div>

      {/* Block 3 */}
      <div className="banner-block">
        <img src="/images/img5.png" alt="Banner 6" />
        <img src="/images/img6.png" alt="Banner 7" />
         <img src="/images/img7.png" alt="Banner 7" />
      </div>
    </div>
  )
}

export default Banner
