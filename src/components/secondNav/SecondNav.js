import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import { connect } from react-redux 
import './secondNav.css'

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
                            <li>French Horns</li>
                            <li>Trombones</li>
                            <li>Trumpets</li>
                            <li>Tubas</li>
                        </ul>
                        <ul><h4>Percussion</h4>
                            <li>Bass Drums</li>
                            <li>Bongos</li>
                            <li>Marimbas</li>
                            <li>Snares</li>
                            <li>Timpani</li>
                            <li>Xylophones</li>
                        </ul>
                        <ul><h4>Strings</h4>
                            <li>Basses</li>
                            <li>Cellos</li>
                            <li>Violas</li>
                            <li>Violins</li>
                        </ul>
                        <ul><h4>Woodwinds</h4>
                            <li>Bass Clarinets</li>
                            <li>Bassoons</li>
                            <li>Clarinets</li>
                            <li>Flutes</li>
                            <li>Saxophones</li>
                        </ul>
                    </div>
                    <div className={guitars ? "secondNav__guitars" : "secondNav__guitars hidden"}>
                        <ul className="">
                            <li>Bass Guitars</li>
                            <li>Accoustic Guitars</li>
                            <li>Electric Guitars</li>
                        </ul>
                    </div>
                    <div className={keyboards ? "secondNav__keyboards" : "secondNav__keyboards hidden"}>
                        <ul className="">
                            <li>Pianos</li>
                            <li>Electric Pianos</li>
                        </ul>
                    </div>
                    <div className={drums ? "secondNav__drums" : "secondNav__drums hidden"}>
                    <ul className="">
                        <li>Bass Drums</li>
                        <li>Cymbals</li>
                        <li>Hi-Hats</li>
                        <li>Kits</li>
                        <li>Snares</li>
                        <li>Tom-toms</li>
                    </ul>
                    </div>
                    <div className={other ? "secondNav__other" : "secondNav__other hidden"}>
                        <ul className="">
                            <li>Harmonicas</li>
                            <li>Tambourines</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={audio ? "secondNav__audio" : "secondNav__audio hidden"}>
                        <ul className="">
                            <li>Cables</li>
                            <li>Headphones</li>
                            <li>Microphone</li>
                            <li>MIDIs</li>
                            <li>Turntables</li>
                        </ul>
                    </div>
                    <div className={services ? "secondNav__services" : "secondNav__services hidden"}>
                        <ul className="">
                            <li>Performers</li>
                            <li>DJ</li>
                            <li>Tuning</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondNav; 