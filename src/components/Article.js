import React from "react";
import { Link } from "react-router-dom";

const API_KEY = "38c6325b37ef4200b8d0b52b8e8ab90b";

class Article extends React.Component {
  state = {
    activeArticle: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.article;
    const req = await fetch(
      `http://newsapi.org/v2/everything?q=${title}&apiKey=${API_KEY}`
    );

    const res = await req.json();
    this.setState({ activeArticle: res.articles[0] });
    console.log(this.state.article);
  };

  render() {
    const article = this.state.activeArticle;
    return (
      <div className="container">
        {this.state.activeArticle.length !== 0 && (
          <div className="active-article">
            <img
              className="active-article__img"
              src={article.urlToImage}
              alt={article.title}
            />
            <h3 className="active-article__title">{article.title}</h3>
            <h3 className="active-article__publisher">
              Stinky Author: <span>{article.author}</span>
            </h3>
            <p className="active-article__website">
              Website:
              <span>
                <a href={article.url}>{article.url}</a>
              </span>
            </p>
            <button className="active-article__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Article;
