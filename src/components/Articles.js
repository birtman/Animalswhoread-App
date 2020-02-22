import React from "react";

import { Link } from "react-router-dom";

const Articles = props => (
  <div className="container">
    <div className="row">
      {props.articles.map(article => {
        return (
          <div
            key={article.title}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="article__box">
              <img
                className="article__box-img"
                src={article.image_url}
                alt={article.title}
              />
              <div className="article__text">
                <h5 className="article__title">
                  {article.title.length < 20
                    ? `${article.title}`
                    : `${article.title.substring(0, 25)}...`}
                </h5>
                <p className="article__subtitle">
                  Publisher: <span>{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  View Recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
