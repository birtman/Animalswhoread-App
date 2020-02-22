import React, { Component } from "react";

import { getArticles } from "../service/news";

class TestArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    };
  }

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data
        });
      },
      error => {
        alert("Errror", "Something went wrong!");
      }
    );
  }

  render() {
    console.log(this.state.data);
    return <div></div>;
  }
}

export default TestArticle;
