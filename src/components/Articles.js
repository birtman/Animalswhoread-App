import React from "react";

import { Link } from "react-router-dom";

const Articles = props => (
  <div className="container">
    <div className="row">
      {props.articles.map(article => {
        return (
          <div
            key={article.title}
            className="col-md-6 col-sm-12 col-lg-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="articles__box">
              <img
                className="article__box-img"
                src={article.urlToImage}
                alt={article.title}
              />
              <div className="article__text">
                <h5 className="articles__title">
                  {article.title.length < 20
                    ? `${article.title}`
                    : `${article.title.substring(0, 20)}...`}
                </h5>
                <p className="articles__subtitle">
                  Stinky Human Author:{" "}
                  <span>
                    {article.author.length < 20
                      ? `${article.author}`
                      : `${article.author.substring(0, 10)}...`}
                  </span>
                </p>
              </div>
              <button className="article_buttons">
                <Link
                  to={{
                    pathname: `/article/${article.title}`,
                    state: { article: article.title }
                  }}
                >
                  View Article
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Articles;
