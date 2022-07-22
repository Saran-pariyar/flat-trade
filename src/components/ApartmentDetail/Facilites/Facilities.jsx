import React from 'react'
import { FaBuilding,FaHeart,FaLifeRing } from 'react-icons/fa';
import "./facilities.css";

const Facilities = () => {
  return (
    <div className='facilities-section'>
      
<div className="facilities-flat-no facilities-icon-section">
<FaBuilding  className='main-icons' />
<h2>Flat No.</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>

</div>
<div className="facilities-benefit-2 facilities-icon-section">
<FaHeart className='main-icons' />
<h2>facilities-benefit - 2 </h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>
</div>
<div className="facilities-benefit-3 facilities-icon-section">
<FaLifeRing  className='main-icons' />
<h2>facilities-benefit - 3</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>
</div>
<div className="facilities-benefit-3 facilities-icon-section">
<FaLifeRing  className='main-icons' />
<h2>facilities-benefit - 4</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>
</div>
<div className="facilities-benefit-3 facilities-icon-section">
<FaLifeRing  className='main-icons' />
<h2>facilities-benefit - 5</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>
</div>

    </div>
  )
}

export default Facilities