import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { Products } from "../products/list";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAmazon} from '@fortawesome/free-brands-svg-icons'

export default function Product(){
    const {product} = useParams();
    const [data, setData] = useState({})
    const [quantity, setQuantity] = useState(1)
    useEffect(()=>{
            for (var i = 0; i < Products.data.length; i++) {
                if (Products.data[i].id === product) {
                    setData(Products.data[i])   
                }
            }
    }, [])
    function selected(value){
        setQuantity(value)
        const selections = document.querySelectorAll('.selection');
        selections.forEach((selection)=>{
            selection.style.backgroundColor = 'var(--brandcolor)'
        })
        selections[value - 1].style.backgroundColor = 'var(--brandcolordark)'
    }
        return(
            <div className="product-page">
                <div className="nnc"></div>
                <div className="main">
                    <img src={`/img/products/soap/${product}.jpg`} alt={product} className="img"/>
                    <div className="content">
                        <h1 className="head">{data.name}</h1>
                        <p className="type">{data.type}</p>
                        <p className="price">Price: ₹{data.price*quantity}</p>
                        <p className="price-secondary discount"></p>
                        <p className="quantity">Select Quantity</p>
                        <ul className="quantity">
                            <li className="selection" onClick={()=>{selected(1)}}>1</li>
                            <li className="selection" onClick={()=>{selected(2)}}>2</li>
                            <li className="selection" onClick={()=>{selected(3)}}>3</li>
                        </ul>
                        <a id="order" href={data.display ? data.display.amazonLinks[quantity - 1] : null}>
                            Order on Amazon
                            <FontAwesomeIcon icon={faAmazon} className="icon"/>
                        </a>
                        <p className="description standard-content">{data.display ? data.display.fullDescription : null}</p>
                        <p className="ingredients standard-content">Main Ingredients</p>
                        <ul className="ingredients">
                           {data.display && data.display.ingredients.map((ingredient)=>{
                               return(
                                   <li key={ingredient}>{ingredient}</li>
                               )
                           })}
                        </ul>
                    </div>
                </div>
            </div>
        )
}