import React, {Component} from 'react'
import ReactMapboxGl, { Layer, Feature} from "react-mapbox-gl";
import "./map.css"

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
    scrollZoom: false,
    doubleClickZoom: false,
    // minZoom: 10,
    // maxZoom: 12
  });
  

class map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -111.98,
      lat: 33.44
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


  render() {
    // const { lng, lat } = this.state;
    const {lng,lat} = this.state;
    
    return (
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
    );
  }
}

export default map;