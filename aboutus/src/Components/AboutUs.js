import React from 'react'
import './AboutUs.css'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'


export default function AboutUs() {
  return (
    <div className="main">
          <div className="C animated-text">ABOUT US</div>
      <div className="content">
        {/* This is text */}
        <div className="text animated-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit eligendi odit fuga autem fugiat error blanditiis animi repellendus nam ex at numquam quisquam doloremque expedita nisi, quis recusandae, inventore reprehenderit. Quia dolore debitis culpa natus blanditiis beatae. Deserunt veritatis dolorem explicabo possimus tenetur temporibus!
        </div>
        {/* This is for images */}
        {/* <div className="image">
           <img id="img1"  />
           <img id="img2" src={image2}alt="Image 2" />
           <img id="img3" src={image3} alt="Image 3" />
           <img id="img4" src={image1} alt="Image 4" />
        </div> */}
        <div class="image">
  <img id="img1" src={image1} alt="Image 1" className="animated-image" />
  <img id="img2" src={image2} alt="Image 2" className="animated-image" />
</div>

        
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* next part */}

      <div className="content">
        
        {/* This is for images */}
        <div className="image">
           
           <img id="img3" src={image3} alt="Image 3" className="animated-image" />
           <img id="img4" src={image1} alt="Image 4" className="animated-image" />
        </div>
        {/* This is text */}
        <div className="text animated-text">
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quisquam doloremque expedita nisi, quis recusandae, inventore reprehenderit. Quia dolore debitis culpa natus blanditiis beatae. Deserunt veritatis dolorem explicabo possimus tenetur temporibus!
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

    </div>
  )
}