import React from 'react';
import Carousel from 'nuka-carousel';

export default class CarouselContainer extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    slideIndex: 0
  };
}

// product_images = (props) => {

  // console.log("MAPPED IMAGES", this.props.images)
  // const { images } = this.props
  // console.log("DECONSTRUCT", images)
  // images.toString()

//   return(
//       <div className="CarouselContainer__productContainer">
//           {this.props.images.map(product => {
//               console.log("product", product, "PROPS", this.props, "IMAGES TO STRING")
//               return(
//                   <div className="CarouselContainer__Products" >
//                       <img src={product.images} alt={product.images}></img>
//                   </div>
//               )
//           })}
//       </div>
//   )
// }

// componentDidMount = () => 
// { setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 0); }


  render() {
    console.log("RENDER", this.props.images)
    const product_images = this.props.images.map((product, i)=> {
      console.log("PRODUCTS.IMAGES", product)
      return(
          <img style={{minHeight: 250}} src={product[i]} alt="No Image to Display"></img>
      )
    })

    console.log("CAROUSEL PROPS", this.props.images, "TO STRING", this.props.images)
    return (
      <Carousel 
        
        slideIndex={this.state.slideIndex}
        style={{ minHeight: "100vh"}}
        slideWidth={0.3}
        afterSlide={slideIndex => this.setState({ slideIndex })}
      >

      {product_images}
      
      </Carousel>
    );
  }
}

