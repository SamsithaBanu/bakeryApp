import React from "react";
import AllCategories from "../../components/Homepage/AllCategories";
import BannerList from "../../components/Homepage/BannerList";
import HorizondalProducts from "../../components/Homepage/HorizondalProducts";
import VerticalProducts from "../../components/Homepage/VerticalProducts";
import { HomeCommonStyled } from "./HomeCommonStyled";
import { WeddingCakes } from "../../components/Homepage/WeddingCakes/WeddingCakes";
import Desserts from "../../components/Homepage/Desserts/Desserts";
import frontpage from "../../assests/frontpage.png";
import Categories from "../../components/Homepage/Categories";
import Slogans from "../../components/Homepage/Slogans";
import CategoryWiseProduct from "../../components/Homepage/CategoryWiseProduct";
import AboutUs from "../../components/Homepage/AboutUs";
import CoffeeMenu from "../../components/Homepage/CoffeeMenu";
import PancakesList from "../../components/Homepage/PancakesList";
import frontlevelpage from '../../assests/frontlevelpage.png'
import Newsletter from "../../components/Homepage/Newsletter";
import Contact from "../../components/Contact";
import { Link } from "react-router-dom";
import VerticalRecipes from "../../components/Homepage/VerticalRecipes/VerticalRecipes";
import recipe from '../../assests/recipe banner.png'

const Home = () => {
  return (
    <HomeCommonStyled>
      <Link className="homeCommon" to={'/product-listing'}>
        <img
          src={frontlevelpage}
          className="w-full h-full"
          alt={"banner"}
          style={{ height: "550px" }}
        />
      </Link>
      <Categories />
      <HorizondalProducts category={"Waffles"} headings="Our Pastries" />
      <CategoryWiseProduct
        heading="Cakes"
        subHeading="Our cakes are crafted to perfection, blending rich flavors and moist textures for a heavenly experience"
        align="left"
      />
      <CategoryWiseProduct
        heading="Muffins"
        subHeading="Our muffins are bursting with flavor and packed with wholesome ingredients, perfect for a delightful snack or breakfast treat."
        align="right"
      />
      <Slogans isFromRecipe={false}/>
      <CategoryWiseProduct
        heading="Waffles"
        subHeading="Our waffles are a perfect balance of golden crunch and soft, airy goodness, ideal for any time of the day."
        align="left"
      />
      <CategoryWiseProduct
        heading="Cookies"
        subHeading="Our cookies are baked to golden perfection, offering a delightful mix of textures and flavors in every bite"
        align="right"
      />
      <CoffeeMenu category='Coffee'/>
      <Link className="homeCommon" to={'/recipe-listing'} style={{borderRadius: '8px'}}>
        <img
          src={recipe}
          // className="w-full h-full"
          alt={"banner"}
          style={{ padding: '10px 13%', borderRadius: '8px'}}
        />
      </Link>
      {/* <WeddingCakes /> */}
      <AboutUs />
      <VerticalRecipes />
      <Slogans isFromRecipe />
      <PancakesList category={'Pancakes'} headings='Perfect Pancakes'/>
      <Newsletter />
      <Contact />

      {/* <AllCategories />
      <BannerList />
      <HorizondalProducts category={'Waffles'} headings='Delicious Waffles' />
      <VerticalProducts category={'Cakes'} headings="Scrumptious Cakes"/>
      <WeddingCakes />
      <HorizondalProducts category={'Muffins'} headings='Moist Muffins'/>
      <VerticalProducts category={'Cookies'} headings={'Delicious Cookies'}/>
      <Desserts/>
      <HorizondalProducts category={'Puffs'} headings='Fluffy Puffs'/>
      <VerticalProducts category={'Pancakes'} headings={'Perfect Pancakes'}/> */}
    </HomeCommonStyled>
  );
};

export default Home;
