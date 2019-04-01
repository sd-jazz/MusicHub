import React from 'react'
import './mappedImages.css'

const MappedImages = (props) => {
    return(
        <div className="MappedImages__">
            {props.image.map(product => {
                console.log("props.image", props.image, "product.image", product.image)
                return(
                    <div className="MappedImages__Products" key={props.image}>
                        <img src={props.image} alt={props.image}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default MappedImages

