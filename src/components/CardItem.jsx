//CardItem.js : Card individuales
//Cards.js  : hold all cards


import React from 'react'
import { Link } from 'react-router-dom'

/*This is basically the image and the description */
function CardItem(props) {
  return (
    <>
               
        <li className='cards__item'>
            <Link className="cards__item__link" 
                  to={props.path}>

              <figure className="cards__item__pic-wrap" data-category={props.label}> {/* data-category,  NameClase :: after asi: .cards__item__pic-wrap::after { content: attr(data-category);  */}
                <img src={props.src}
                     alt="Travel Image" 
                     className="cards__item__img" />
              </figure>

              <div className="cards__item__info">
                <h5 className="cards__item__text">
                    {props.text}
                 </h5>
              </div>

            </Link>
        </li>        

    </>
  )
}

export default CardItem
