import React, { Component } from "react";
import "./Card.css";
export default class Card extends Component {

  render() {

    return (
      <div className='card'>
        <article className="card__outerContainer">
          <img src={this.props.listing.images[0]}
            //src="https://images.reverb.com/image/upload/s--kvuZaEhH--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1457007138/aaq4bjcndmkldatp4a13.jpg"
            className="card__image"
            alt="image" />
          <div className="card__fullContainer">
            <div className="card__titleContainer">
              <h1 className="card__title">{this.props.listing.listing_name}</h1>
            </div>
            <div className="card__container">
                <h5 className="card__price">${this.props.listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
              <h5 className="card__location">Phoenix, AZ</h5>
            </div>
          </div>
        </article>
      </div>
    );

  }
}
