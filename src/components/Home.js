import React from 'react'
import img1 from '../assets/img/1.png'
import { FaShoppingCart } from "react-icons/fa";
 

const Home = () => {
    return (
        <>
        <div className='add-to-cart'>
<FaShoppingCart className='cart-icon'/>
        </div>
            <h1>Home Components </h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={img1}></img>
                </div>
                <div className='text-wrapper item'>
                   <span>
                    I-Phone
                   </span>
                   <span>
                    Price $1000.00
                   </span>
                </div>
                <div className='btn-wrapper item'>
                  <button>Add to Cart </button>
                </div>
            </div>

        </>
    )
}

export default Home