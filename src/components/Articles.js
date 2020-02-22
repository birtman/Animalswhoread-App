import React from "react";

const Articles = props => (
  <div className="container">
    <div className="row">
      {props.articles.map(article => {
        return (
          <div key={article.title} className="col-md-6 col-sm-12 col-lg-4">
            <div className="article__box">
              <img
                className="article__box-img"
                src={article.urlToImage}
                alt={article.title}
              />
              <div className="article__text">
                <h5>{article.title} </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Articles;
