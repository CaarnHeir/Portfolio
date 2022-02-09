import React from "react";

class index extends React.Component {

  componentDidMount(){
    const apiURL = 'http://127.0.0.1:8000/api/';
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <h1>BLOG PAGE</h1>;
  }
};

export default index;