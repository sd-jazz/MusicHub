import React from "react";
import axios from "axios";
// import Home from "../Home/Home";

export default function HocDataFetcher(Component, url) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      };
    }

    componentDidMount = () => {
      axios.get(url).then(res => {
        this.setState({
          data: res.data
        });
      });
    };

    render() {
      return <Component data={this.state.data} />;
    }
  };
}
