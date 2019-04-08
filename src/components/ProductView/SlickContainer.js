import React from 'react';
import ImageZoom from 'react-medium-image-zoom'
import './slickContainer.css'

export default class CarouselContainer extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      empty: []
    };
  }
  render(){

    const mapped_images = this.props.images.map((product) => {
        console.log("PRODUCT", product, "THIS.PROPS", this.props)

    //     return(
    // <div>
    //   <ImageZoom key={this.props.id}
    //     image={{
    //       src: {product},
    //       alt: 'Golden Gate Bridge',
    //       className: 'img',
    //       style: { width: '50em' }
    //     }}
    //     zoomImage={{
    //       src: {product},
    //       alt: 'Golden Gate Bridge'
    //     }}
    //   />
    // </div>
    //   )

        return(
          <div className="SlickContainer_mappedImage" key={this.props.id}>
              <img src={product} alt={this.props.id} className="SlickContainer__singleImage" />
          </div>
      )

    })

      return(
        <div >
            <div className="SlickContainer__images">
                {mapped_images}
            </div>
        </div>
      )
  }
}
  
