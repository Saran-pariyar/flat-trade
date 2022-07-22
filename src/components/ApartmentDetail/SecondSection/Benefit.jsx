import React from 'react'
import { FaBuilding,FaHeart,FaLifeRing } from 'react-icons/fa';
import "./benefit.css";

const Benefit = () => {
  return (
    <div className='benefit-section'>
      
<div className="flat-no icon-section">
<FaBuilding  className='main-icons' />
<h2>Flat No.</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>

</div>
<div className="benefit-2 icon-section">
<FaHeart className='main-icons' />
<h2>Benefit - 2 </h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>
</div>
<div className="benefit-3 icon-section">
<FaLifeRing  className='main-icons' />
<h2>Benefit - 3</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tempore ipsam vitae necessitatibus temporibus. Hic velit deleniti accusantium omnis aspernatur?</p>
</div>

    </div>
  )
}

export default Benefit