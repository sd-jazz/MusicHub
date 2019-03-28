import React,{Component} from "react";
import {Button} from "semantic-ui-react";


class Modal extends Component {
    constructor(){
        super()
        this.state = {
            image: "",
            title: "",
            price: 0,
            type: "orchestral",
            condition: "new",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render(){
        return(
        <div>
<Button>Upload a photo</Button>
                            <label>
                                Title:
                            <input name="title" type="text" onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                Price:
                                <input type="number"/>
                            </label>
                            <label>
                                Type:
                                <select name="type" value={this.state.type} onChange={this.handleInputChange}>
                                    <option value="orchestral">Orchestral</option>
                                    <option value="guitar">Guitar</option>
                                    <option value="eyboards">Keyboards</option>
                                    <option value="drums">Drums</option>
                                    <option value="other">Other</option>
                                    <option value="audio">Audio</option>
                                    <option value="services">Services</option>
                                </select>
                            </label>
                            <label>
                                Condition:
                                <select>
                                    <option value="new">New(Never used)</option>
                                    <option value="open box">Open-box(Never used)</option>
                                    <option value="used">Used</option>
                                    <option value="recertified">Recertified</option>
                                    <option value="for parts">For parts</option>
                                </select>
                            </label>
                            <button onClick={()=>console.log(this.state)}>Upload</button>

        </div>
        )

    }
    }

export default Modal;