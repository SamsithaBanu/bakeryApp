import React, { useState, useEffect } from "react";
import { PancakesListStyled } from "./PancakesListStyled";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import { Link } from "react-router-dom";
import pancake_center from '../../assests/pancake_center.png';

const PancakesList = ({ category, headings }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const CategoryWiseProduct = await fetchCategoryWiseProduct(category);
      setData(CategoryWiseProduct?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getSpliing = (prod) => {
    if (prod?.length > 22) {
      return "...";
    } else return null;
  };

  return (
    <PancakesListStyled>
      <div className="pancakesWrapper" id='menu'>
        <div className="topWrapper">
          <i><div className="header">{headings}</div></i>
          <div className="subHeader">
          Pancakes are a beloved breakfast staple enjoyed by people all over the world. These delightful, fluffy treats are made from a simple batter of flour, eggs, milk, and a touch of baking powder. Cooked on a griddle or frying pan, pancakes can be customized to suit any taste with a variety of toppings and mix-ins
          </div>
        </div>
        <div className="bottomWrapper">
          <div className="leftWrapper">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data?.slice(0, 2).map((item, index) => (
                <Link key={index} className="cardWrapper" to={"/product/" + item?._id}>
                  <div className="cardImage">
                    <img src={item?.productImage} alt="product Image" />
                  </div>
                  <div className="cardDetails">
                    <div className="name">
                      {item?.productName.substring(0, 20)}
                      {getSpliing(item?.productName)}
                    </div>
                    <div className="category">{item?.category}</div>
                    <div className="cta">
                      <Link
                        className=""
                        to={"/product/" + item?._id}
                      >
                        Show more
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="centerWrapper">
            <img src={pancake_center} alt="puffs" />
          </div>
          <div className="rightWrapper">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data?.slice(2, 4).map((item, index) => (
                <Link key={index} className="cardWrapper" to={"/product/" + item?._id}>
                  <div className="cardImage">
                    <img src={item?.productImage} alt="product Image" />
                  </div>
                  <div className="cardDetails">
                    <div className="name">
                      {item?.productName.substring(0, 20)}
                      {getSpliing(item?.productName)}
                    </div>
                    <div className="category">{item?.category}</div>
                    <div className="cta">
                      <Link
                        className=""
                        to={"/product/" + item?._id}
                      >
                        Show more
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </PancakesListStyled>
  );
};

export default PancakesList;
