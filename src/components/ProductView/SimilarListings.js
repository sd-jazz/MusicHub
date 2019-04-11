import React from 'react'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import './SimilarListings.css'

const SimilarListings = (props) => {
    return(
        <div className="MappedImages__">
            {props.similar.map(product => {
                console.log("SIMILAR OFFERINGS", product)
                return(
                    <div className="SimilarListings__Product" key={product.name}>
                        <img src={product.images[0]} alt={product.name} className="SimilarListings__Image"></img>
                    </div>
                    
                    // <Link key={product.listing_id}  to={`/productview/${product.listing_id}`}className='home__card'><Card product={product} /></Link>

                    // let mappedListings = listings.map(listing => {
                        // return <Link key={listing.listing_id}  to={`/productview/${listing.listing_id}`}className='home__card'><Card listing={listing} /></Link>
                    // })
            
                )
            })}
        </div>
    )
}



export default SimilarListings

