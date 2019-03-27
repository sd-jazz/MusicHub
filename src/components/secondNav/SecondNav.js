import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './secondNav.css'
import { connect } from 'react-redux'; 
import { get_listing_type } from '../../redux/reducer'

class SecondNav extends Component {
    constructor(){
        super()

        this.state = {
            showMenu: false,
            orchestral: false,
            guitars: false,
            keyboards: false,
            drums: false,
            other: false,
            audio: false,
            services: false
        }
        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }
    showMenu(prop, val){
        this.setState({
            [prop]: !val
        })
    }
    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target))

        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    }
    render(){
        console.log()
        const {orchestral, guitars, keyboards, drums, other, audio, services} = this.state
        return (
            <div className="secondNav">
                <div className="secondNav__mainList">
                    <h3 className="secondNav__orchestralH" onClick={() => this.showMenu("orchestral", orchestral)}>Orchestral</h3>
                    <h3 className="secondNav__guitarsH" onClick={() => this.showMenu("guitars", guitars)}>Guitars</h3>
                    <h3 className="secondNav__keyboardsH" onClick={() => this.showMenu("keyboards", keyboards)}>Keyboards</h3>
                    <h3 className="secondNav__drumsH" onClick={() => this.showMenu("drums", drums)}>Drums</h3>
                    <h3 className="secondNav__otherH" onClick={() => this.showMenu("other", other)}>Other</h3>
                    <h3 className="secondNav__audioH" onClick={() => this.showMenu("audio", audio)}>Audio</h3>
                    <h3 className="secondNav__servicesH" onClick={() => this.showMenu("services", services)}>Services</h3>
                </div>
                <div className="secondNav__subList" ref={element => {this.dropdownMenu = element}}>
                    <div className={orchestral ? "secondNav__orchestral" : "secondNav__orchestral hidden"}>
                        <ul><h4>Brass</h4>
                            <Link to={`/catagory_view/french_horns`}><li>French Horns</li></Link>
                            <Link to={`/catagory_view/trombones`}><li>Trombones</li></Link>
                            <Link to={`/catagory_view/trumpets`}><li>Trumpets</li></Link>
                            <Link to={`/catagory_view/tubas`}><li>Tubas</li></Link>
                        </ul>
                        <ul><h4>Percussion</h4>
                            <Link to={`/catagory_view/bass_drums`}><li>Bass Drums</li></Link>
                            <Link to={`/catagory_view/bongos`}><li>Bongos</li></Link>
                            <Link to={`/catagory_view/marimbas`}><li>Marimbas</li></Link>
                            <Link to={`/catagory_view/snares`}><li>Snares</li></Link>
                            <Link to={`/catagory_view/timpani`}><li>Timpani</li></Link>
                            <Link to={`/catagory_view/xylophones`}><li>Xylophones</li></Link>
                        </ul>
                        <ul><h4>Strings</h4>
                            <Link to={`/catagory_view/basses`}><li>Basses</li></Link>
                            <Link to={`/catagory_view/cellos`}><li>Cellos</li></Link>
                            <Link to={`/catagory_view/vioalas`}><li>Violas</li></Link>
                            <Link to={`/catagory_view/violins`}><li>Violins</li></Link>
                        </ul>
                        <ul><h4>Woodwinds</h4>
                            <Link to={`/catagory_view/bass_clarinets`}><li>Bass Clarinets</li></Link>
                            <Link to={`/catagory_view/bassoons`}><li>Bassoons</li></Link>
                            <Link to={`/catagory_view/clarinets`}><li>Clarinets</li></Link>
                            <Link to={`/catagory_view/flutes`}><li>Flutes</li></Link>
                            <Link to={`/catagory_view/saxaphones`}><li>Saxophones</li></Link>
                        </ul>
                    </div>
                    <div className={guitars ? "secondNav__guitars" : "secondNav__guitars hidden"}>
                        <ul className="">
                            <Link to={`/catagory_view/bass_guitars`}><li>Bass Guitars</li></Link>
                            <Link to={`/catagory_view/acoustic_guitars`}><li>Accoustic Guitars</li></Link>
                            <Link to={`/catagory_view/electric_guitars`}><li>Electric Guitars</li></Link>
                        </ul>
                    </div>
                    <div className={keyboards ? "secondNav__keyboards" : "secondNav__keyboards hidden"}>
                        <ul className="">
                            <Link to={`/catagory_view/pianos`}><li>Pianos</li></Link>
                            <Link to={`/catagory_view/electric_pianos`}><li>Electric Pianos</li></Link>
                        </ul>
                    </div>
                    <div className={drums ? "secondNav__drums" : "secondNav__drums hidden"}>
                    <ul className="">
                        <Link to={`/catagory_view/bass_drums`}><li>Bass Drums</li></Link>
                        <Link to={`/catagory_view/cymbals`}><li>Cymbals</li></Link>
                        <Link to={`/catagory_view/hi_hats`}><li>Hi-Hats</li></Link>
                        <Link to={`/catagory_view/kits`}><li>Kits</li></Link>
                        <Link to={`/catagory_view/snares`}><li>Snares</li></Link>
                        <Link to={`/catagory_view/tom_toms`}><li>Tom-toms</li></Link>
                    </ul>
                    </div>
                    <div className={other ? "secondNav__other" : "secondNav__other hidden"}>
                        <ul className="">
                            <Link to={`/catagory_view/harmonicas`}><li>Harmonicas</li></Link>
                            <Link to={`/catagory_view/tambourines`}><li>Tambourines</li></Link>
                        </ul>
                    </div>
                    <div className={audio ? "secondNav__audio" : "secondNav__audio hidden"}>
                        <ul className="">
                            <Link to={`/catagory_view/cables`}><li>Cables</li></Link>
                            <Link to={`/catagory_view/headphones`}><li>Headphones</li></Link>
                            <Link to={`/catagory_view/microphones`}><li>Microphone</li></Link>
                            <Link to={`/catagory_view/midi`}><li>MIDIs</li></Link>
                            <Link to={`/catagory_view/turntables`}><li>Turntables</li></Link>
                        </ul>
                    </div>
                    <div className={services ? "secondNav__services" : "secondNav__services hidden"}>
                        <ul className="">
                            <Link to={`/catagory_view/performers`}><li>Performers</li></Link>
                            <Link to={`/catagory_view/dj`}><li>DJ</li></Link>
                            <Link to={`/catagory_view/tuning`}><li>Tuning</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reducerState) => {
    return {
        listing_type: reducerState.listing_type
    }
}

export default connect (mapStateToProps, { get_listing_type })(SecondNav); 