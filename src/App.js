import React, { Component } from "react";
import "./App.scss";
import Ticker from "./components/Ticker";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Articles from "./components/Articles";

const API_KEY = "38c6325b37ef4200b8d0b52b8e8ab90b";

class App extends Component {
  state = {
    articles: []
  };

  // Making the API Call
  getArticles = async e => {
    const articleName = e.target.elements.articleName.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://newsapi.org/v2/everything?q=${articleName}&apiKey=${API_KEY}&pageSize=20`
    );

    const data = await api_call.json();
    this.setState({ articles: data.articles });
    console.log(this.state.articles);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form getArticles={this.getArticles} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
