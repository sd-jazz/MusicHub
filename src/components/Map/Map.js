import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import "./App.css"

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -111.98,
      lat: 33.44,
      zoom: 12
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [lng, lat],
      zoom,
    });

    const radius = new mapboxgl.Marker()
    .setLngLat([0,0])
    .addTo(map);

    
  }

  render() {

    return (
      <div>
        <div className="map-container" ref={el => this.mapContainer = el}/>
      </div>
    );
  }
}

export default map;