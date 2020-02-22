import React, { Component } from "react";
import "./App.scss";
import Ticker from "./components/Ticker";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import {
  articles_url,
  category,
  country_code,
  _api_key
} from "./config/rest_config";
/*
class App extends Component {
  state = {
    articles: []
  };
  getArticles = async e => {
    const articleName = e.target.elements.articleName.value;
    e.preventDefault();
    const api_call = await fetch(
      `${articles_url}?country=${country_code}&q=${articleName}&apiKey=${_api_key}`
    );

    const data = await api_call.json();
    this.setState({ articles: data.articles });
    console.log(this.state.articles);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("articles");
    const articles = JSON.parse(json);
    this.setState({ articles });
  };
  componentDidUpdate = () => {
    const articles = JSON.stringify(this.state.articles);
    localStorage.setItem("articles", articles);
  };
*/
class App extends Component {
  state = {
    userInput: "animals",
    retrievedNews: [],
    articles: {}
  };

  componentDidMount() {
    this.handleUserInput();

    // fetch(
    //   "http://newsapi.org/v2/everything?q=animals&apiKey=38c6325b37ef4200b8d0b52b8e8ab90b"
    // )
    //   .then(response => response.json())
    //   .then(newsResults =>
    //     this.setState({ retrievedNews: newsResults.articles })
    //   )
    //   .catch(error =>
    //     console.error(`Ooops, no news about this animal: ${error}`)
    //   );
  }

  handleChange = event => this.setState({ userInput: event.target.value });

  handleUserInput = () => {
    //let userInput = this.state.userInput ? this.state.userInput : "animals";

    fetch(
      `http://newsapi.org/v2/everything?q=${this.state.userInput}&apiKey=38c6325b37ef4200b8d0b52b8e8ab90b`
    )
      .then(response => response.json())
      .then(newsResults =>
        this.setState({ retrievedNews: newsResults.articles })
      )
      .catch(error =>
        console.error(`Ooops, no news about this animal: ${error}`)
      );
  };

  render() {
    return (
      <form>
        <section className="App">
          <Ticker />​
          <Header />
        </section>
        <input
          type="text"
          placeholder="friends'n'foes stalking"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleUserInput}>
          Paw paw to Stalk Your Friends'n'Foes!
        </button>
        ​{this.state.retrievedNews.map(element => element.content)}​
        {this.state.retrievedNews.map(element => (
          <img key={element.id} src={element.urlToImage} alt="animal" />
        ))}
      </form>
    );
  }
}

/*rendering data
  render() {
    return (
      <section className="App">
        <Ticker />​
        <Header />
      </section>
    );
  }
}*/

export default App;
