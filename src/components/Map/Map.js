import React, {Component} from 'react'
import ReactMapboxGl, { Layer, Feature} from "react-mapbox-gl";
import "./map.css"
import axios from "axios";



const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
    scrollZoom: false,
    doubleClickZoom: false,
    interactive: false
    // minZoom: 10,
    // maxZoom: 12
  });
  

class map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: null,
      lat: null
    //   geojson: {
    //     type: 'FeatureCollection',
    //     features: [{
    //       type: 'Feature',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: [-111.98, 33.44]
    //       },
    //       properties: {
    //         title: 'Mapbox',
    //         description: 'Radius'
    //       }
    //     }]
    //   }
    }
    // this.mapContainer = React.createRef();
  }

  componentDidMount() {
    // this.getCoords();
    
    // const { lng, lat, zoom } = this.state;

    // const map = new mapboxgl.Map({
    //   container: this.mapContainer.current,
    //   style: 'mapbox://styles/mapbox/dark-v9',
    //   center: [lng, lat],
    //   zoom,
    // });

    

//     // const el = this.mapContainer
//     geojson.features.forEach((marker) => {
        
//       // create a HTML element for each feature
//     //   console.log(this.mapContainer)
      
//     //   el.current.className = 'marker'
//       // make a marker for each feature and add to the map
      
//     });

//     map.scrollZoom.disable();
//     map.doubleClickZoom.disable();

//     // new mapboxgl.Marker(el)
//     // .setLngLat(geojson.features[0].geometry.coordinates)
//     // .addTo(map);
//     // const radius = new mapboxgl.Marker()
//     // .setLngLat([lng,lat])
//     // .addTo(map);

//   }
  }
  componentDidUpdate(){
    this.getCoords();
  }

  getCoords = () => {
    // console.log("props", this.props)
    const mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.props.zipcode}.json?access_token=pk.eyJ1IjoiYmNrZW5uZWR5OTciLCJhIjoiY2p0eHV6a3dzMXR0cjQ1bXAzY2M4N2IyZyJ9.WS1Qf8wiBeDFOhFh5S-pzw`
      axios.get(mapbox).then(res=>{
        if(this.state.lng !== res.data.features[0].center[0]){
          
          this.setState({
            lng: res.data.features[0].center[0],
            lat: res.data.features[0].center[1]
          })
        }
        // console.log(this.state.lng, this.state.lat)
      })

    }


  render() {
    // const { lng, lat } = this.state;
    const {lng,lat} = this.state;
    console.log(this.state)
    
    return (
      <div>
      {this.state.lng&&this.state.lat ? 
        <Map
        style="mapbox://styles/mapbox/dark-v9"
        scrollZoom="false"
        zoom={[12]}
        center={[lng, lat]}
        containerStyle={{
          height: "250px",
          width: "100%",
          display: "flex",
          left: 0,
          justifyContent:"center",
          alignItems: "center"
        }}>
          <Layer
          style
            type="circle"
            paint={{
                'circle-radius': 100,
                'circle-color': 'lightblue',
                'circle-opacity': 0.5,
              }}
            id="marker"
            >
            <Feature coordinates={[lng, lat]}/>
          </Layer>
      </Map>

      :
      null
      }
      </div>
    );
  }
}

export default map;