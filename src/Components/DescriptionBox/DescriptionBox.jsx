import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div> 
            <div className="descriptionbox-nav-box fade">Reviews(189)</div>       
        </div>
        <div className="descriptionbox-description">
            <p> EKart is your one-stop destination for a seamless online shopping experience. We offer a diverse range of products across various categories, including fashion, electronics, home goods, beauty, and more, ensuring that you find exactly what you need, all in one place. With exclusive deals, user-friendly navigation, and secure payment options, Ekart makes shopping convenient, enjoyable, and safe. Join our community of savvy shoppers and explore a world of possibilities where quality meets affordability at your fingertips.</p>
        <p>EKart website that typically display product or services along with detailed descriptions,images,prices and only available variations(eg.sizes,colors).Each product usually has own dedicated page with relevant information</p>
        </div>
    </div>
  )
}

export default DescriptionBox