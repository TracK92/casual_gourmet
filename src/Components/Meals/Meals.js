import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./meals.css";
import { fetchCategories } from "../../Redux/Meals/categoriesslice";
import { useNavigate } from "react-router-dom";

const Meals = () => {
  const { categories, loading } = useSelector((state) => state.mealsCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleCocktails = () => {
    navigate("/cocktails");
  };

  const handleRegularDrinks = () => {
    navigate("/regular");
  };

  return (
    <div>
      {/* meals section */}
      <button
        className="trial"
        style={{
          padding: "60px",
          width: "550px",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        Trial
      </button>
      <h1 style={{ textDecoration: "underline", color: "red" }}>Meals</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        categories.map((category) => (
          <div key={category.idCategory}>
            <h1>{category.strCategory}</h1>
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="categoriesImg"
            />
          </div>
        ))
      )}

      {/* drinks section */}
      <h1 style={{ textDecoration: "underline", color: "red" }}>Drinks</h1>
      <button className="alcoholic" onClick={handleCocktails}>
        Cocktails
      </button>
      <button className="non_alcoholic" onClick={handleRegularDrinks}>
        Regular Drinks
      </button>
    </div>
  );
};

export default Meals;
