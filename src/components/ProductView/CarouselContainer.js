import React from 'react';
import Slider from "react-slick";
import Carousel from 'nuka-carousel';

export default class CarouselContainer extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    // slideIndex: 0
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
}

  render() {
    
    const product_images = this.props.images.map((product)=> {
      console.log("PRODUCTS.IMAGES", product)
      return(
        <div className="CarouselContainer__mappedImage" key="image">
          <img style={{maxHeight: 500}} src={product/*[i]*/} alt="image"></img>
        </div>
      )
    })

    console.log("CAROUSEL PROPS", this.props.images, "TO STRING", this.props.images)
    return (

      // <Slider {...this.state}>
      <div>
        {product_images}
      </div>
      // </Slider>
      // <Carousel 
        
      //   slideIndex={this.state.slideIndex}
      //   style={{ minHeight: "100vh"}}
      //   slideWidth={0.3}
      //   afterSlide={slideIndex => this.setState({ slideIndex })}
      // >

      // {product_images}
      
      // </Carousel>
    );
  }
}

