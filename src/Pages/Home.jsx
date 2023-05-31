// import React, { useEffect, useState } from "react";
// import { HomeDataCard } from "../Components/HomeDataCard";
// import { HomeData, slider as images } from "../Redux/HomeData";
// import "../Styles/Home.css";
// import SimpleImageSlider from "react-simple-image-slider";
// import Navbar from '../Components/Navbar/Navbar';
// import SingleCard from "../Components/SingleCard";

// import Footer from '../Components/Footer/Footer'
// // import { LoginOrSignUp } from './Pages/LoginOrSignUp';

// const Home = () => {
//   const [OmgDeals, setOmgDeals] = useState([]);
//   const [HoliDeals, setHoliDeals] = useState([]);
//   const [BrandsToBag, setBrandsToBag] = useState([]);
//   const [ShopByCategory, setShopByCategory] = useState([]);
//   const [GrandBrand, setGrandBrand] = useState([]);
//   const [BudgetToBuys, setBudgetToBuys] = useState([]);

//   useEffect(() => {
//     HomeData().then((res) => {
//       setOmgDeals(res.HomePageOmgDeals);
//       setHoliDeals(res.HoliDeals);
//       setBrandsToBag(res.HomePageBrandsToBag);
//       setShopByCategory(res.HomePageShopByCategory);
//       setGrandBrand(res.HomePageGrandBrands);
//       setBudgetToBuys(res.HomePageBudgetToBuys);
//     });
//   }, []);

//   return (
//     <div className="grandFather">
//       <Navbar />
//       <SimpleImageSlider
//         width="100%"
//         height="400px"
//         images={images}
//         showBullets={true}
//         showNavs={true}
//         autoPlay={true}
//       />

//       <div className="OmgDealsFather">
//         {/* <h1 className="imgh1">Omg Deals</h1> */}
//         {/* <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/23/deb37d26-3686-447f-a3c2-b9db546e04c41677161708006-Crazy-Deal--3-.gif" alt="Crazy-Deal" /> */}
//         <div className="OmgDeals">
//           {OmgDeals.length > 0 &&
//             OmgDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
//         </div>
//       </div>
//       {/* <SingleCard /> */}

      
//         {/* <h1 className="imgh1">Holi Deals</h1> */}

//       {/* <div className="BrandsToBagFather">
//         <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/e6f16109-5957-4397-a990-89645ff067bb1677051268935-Pick-Your-Holi-Look.gif" alt="Pick-Your-Holi-Look" padding="0" marginBottom="0px" />
//         <div className="HoliDeals">
//           {HoliDeals.length > 0 &&
//             HoliDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
//         </div>
//       </div> */}
//         {/* <h1 className="imgh1">Brand to bag</h1> */}

//       {/* <div className="BrandsToBagFather">
//         <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/05bae013-eb04-4ffb-abe5-374ce442ce451677057222226-Brands-On-The-Way-Up.gif" alt="Brands-On-The-Way-Up" padding="0" marginBottom="0px" />
//         <div className="BrandsToBag">
//           {BrandsToBag.length > 0 &&
//             BrandsToBag.map((el) => <HomeDataCard key={el.id} {...el} />)}
//         </div>
//       </div> */}
//         {/* <h1 className="imgh1">Shop By Category</h1> */}

//       {/* <div className="ShopByCategoryFather">
//         <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/21/66491508-9d0a-4306-82dd-ceb264d0f74d1676999339669-Featured-Favourites.gif" alt="Featured-Favourites" />
//         <div className="ShopByCategory">
//           {ShopByCategory.length > 0 &&
//             ShopByCategory.map((el) => <HomeDataCard key={el.id} {...el} />)}
//         </div>
//       </div> */}
//         {/* <h1 className="imgh1">Grand Brand</h1> */}

//       {/* <div className="GrandBrandFather">
//         <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/21/fb150811-a572-4c6f-b380-10f2e52fe4fa1676999339539-Best-loved-Brands.gif" alt="Best-loved-Brands" />
//         <div className="GrandBrand">
//           {GrandBrand.length > 0 &&
//             GrandBrand.map((el) => <HomeDataCard key={el.id} {...el} />)}
//         </div>
//       </div> */}
//         {/* <h1 className="imgh1">Budget To Buys</h1> */}

//       {/* <div className="BudgetToBuysFather">
//         <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/b5423f93-3dff-4f31-833a-8323249e19871677046260062-Summer-Bargains.gif" alt="Summer-Bargains" />
//         <div className="BudgetToBuys">
//           {BudgetToBuys.length > 0 &&
//             BudgetToBuys.map((el) => <HomeDataCard key={el.id} {...el} />)}
//         </div>
//       </div> */}

//       {/* 3 days-delivery */}
//       {/* <img className="Delivery" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/17/32b8f01e-4b71-446b-b103-668ed70873c71676653509048-M-Express-3-Days.gif" alt="Delivery-Express-3-Days" /> */}
//       {/* Payment */}
//       {/* <img className="Delivery" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/22/6d1c4d3d-6fd9-4b52-8dc0-4c8b7e2453e61677061466410-RTB--4-.jpg" alt="order & payment" /> */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import prodStyle from "../Styles/Products.module.css";
import SingleCard from "../Components/SingleCard";
 import { HomeDataCard } from "../Components/HomeDataCard";
 import { HomeData, slider as images } from "../Redux/HomeData";
 import SimpleImageSlider from "react-simple-image-slider";

import { Box,Checkbox, Flex, Grid, Heading, Select, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFilteredProducts,
  getMainData,
  getMensProducts,
  getMensProductsSorted,
} from "../Redux/Product/Product.action";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
import Pagination from "../Components/Pagination";
import { useCallback } from "react";
import Navbar from "../Components/Navbar/Navbar";
import SampleBrand from "./SampleBrand";
import Footer from "../Components/Footer/Footer";

let brands = [
  "HRX by Hrithik Roshan",
  "Roadster",
  "HIGHLANDER",
  "LOCOMOTIVE",
  "United Colors of Benetton",
  "H&M",
  "The Indian Garage Co",
  "Lee",
  "Levis",
  "WROGN",
  "High Star",
];

const Home = () => {
    const [OmgDeals, setOmgDeals] = useState([]);
   const [BudgetToBuys, setBudgetToBuys] = useState([]);
     const [HoliDeals, setHoliDeals] = useState([]);


  const { loading, error, totalPages, products, filteredBrandData } =
    useSelector((store) => store.mens);
  // page state
  /* current page is for pagination */
  const [currentPage, setCurrentPage] = useState(1);

  /* SValue  is for sorting */
  const [sValue, setSValue] = useState("");

  /* brand is for brand filter */
  const [brand, setBrand] = useState();

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  //console.log(products, currentPage);

    useEffect(() => {
    HomeData().then((res) => {
      setOmgDeals(res.HomePageOmgDeals);
       setHoliDeals(res.HoliDeals);
      // setBrandsToBag(res.HomePageBrandsToBag);
      // setShopByCategory(res.HomePageShopByCategory);
      // setGrandBrand(res.HomePageGrandBrands);
       setBudgetToBuys(res.HomePageBudgetToBuys);
    });
  }, []);

  useEffect(() => {
    // if (products.length === 0) {
    dispatch(getMensProducts(currentPage));
    dispatch(getMainData());
    // }
  }, [dispatch, currentPage]);

  //console.log(brands);

  // pagination starts here

  useEffect(() => {
    dispatch(getMensProducts(currentPage));
  }, [dispatch, currentPage]);

  const handlePage = (val) => {
    setCurrentPage((prev) => prev + val);
  };
  // pagination ends here

  // sorting filter start
  useEffect(() => {
    //console.log(sValue);
    dispatch(getMensProductsSorted(sValue, currentPage));
  }, [dispatch, sValue, currentPage]);

  const handleChange = (e) => {
    setSValue(e.target.value);
  };
  // sorting filter ends here

  /*brand filter starts here */

  useEffect(() => {
    dispatch(getFilteredProducts(brand));
  }, [brand, dispatch]);

  const handleCheck = (e) => {
    e.preventDefault();
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
      setBrand(e.target.value);
    }
  };
  //console.log("isChecked", checked);
  /*brand filter ends here */

  /* handleClear starts here*/
  const handleClear = useCallback(() => {
    dispatch(getMensProducts(currentPage));
  }, [dispatch, currentPage]);
  /* handleClear ends here*/

  if (loading)
    return (
      <>
        <LoadingPage />
      </>
    );
  if (error)
    return (
      <>
        <PageNotFound />
      </>
    );

  return (
    //     <div className="grandFather">
//       <Navbar />
//       <SimpleImageSlider
//         width="100%"
//         height="400px"
//         images={images}
//         showBullets={true}
//         showNavs={true}
//         autoPlay={true}
//       />
    <div>
      <Navbar />
<div className="big-image">
            <SimpleImageSlider
        width="100%"
         height="400px"
        images={images}
         showBullets={true}
         showNavs={true}
        autoPlay={true}
       />
</div>
           <div className="OmgDealsFather">
       {/* <h1 className="imgh1">Omg Deals</h1> */}
         {/* <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/23/deb37d26-3686-447f-a3c2-b9db546e04c41677161708006-Crazy-Deal--3-.gif" alt="Crazy-Deal" /> */}
         <div className="OmgDeals">
          {OmgDeals.length > 0 &&
            OmgDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
         </div>
       </div>

       <div className="BrandsToBagFather">
        <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/e6f16109-5957-4397-a990-89645ff067bb1677051268935-Pick-Your-Holi-Look.gif" alt="Pick-Your-Holi-Look" padding="0" marginBottom="0px" />
         <div className="HoliDeals">
           {HoliDeals.length > 0 &&
             HoliDeals.map((el) => <HomeDataCard key={el.id} {...el} />)}
         </div>
      </div>

        {/* <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/e6f16109-5957-4397-a990-89645ff067bb1677051268935-Pick-Your-Holi-Look.gif" alt="Pick-Your-Holi-Look" padding="0" marginBottom="0px" /> */}

      <Box
        className={prodStyle.product_container}
        mt={{ base: '5rem', sm: "5rem", md: "3.9rem", lg: "7.2rem" }}
      >
        <Flex
          position={"relative"}
          padding={"0 1rem 0.5rem 1rem"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {/* <Box
            borderBottom={"3px solid grey"}
            height={"45px"}
            backgroundColor={"white"}
            textAlign={"left"}
            zIndex={"100"}
            w={"20%"}
            position={"absolute"}
            top={2}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "inline-block",
            }}
          >
            <Text
              // height={"60px"}
              display={"inline-block"}
              fontSize={"1.5rem"}
              fontWeight={"bold"}
              color={"pink.400"}
            // mt={"5rem"}
            >
              {" "}
              Mens -
            </Text>{" "}
            ({totalPages})
          </Box>
          <Box
            display={{ sm: "none", base: 'none', md: 'none', lg: "inline-block" }}
            position={"absolute"}
            w={"20%"}
            top={"4rem"}
            zIndex={"100"}
            backgroundColor={"#FFF"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"baseline"}
              pl={"0.1rem"}
            >
              <Text fontSize={"1.2rem"} fontWeight={700} textAlign={"left"}>
                Filters
              </Text>
              <Text
                onClick={() => handleClear()}
                fontSize={"0.9rem"}
                fontWeight={"700"}
                color={"red"}
              >
                Clear All
              </Text>
            </Flex>

            <Box border={"0px solid gray"}>
              <Heading
                fontSize={"1rem"}
                textAlign="left"
                mb={"0.5rem"}
                pt={"1rem"}
                pl={"0.5rem"}
              >
                Brands
              </Heading>

              <Flex flexDirection={"column"} textAlign={"left"}>
                {brands?.map((brand, i) => (
                  <Checkbox
                    textAlign={"left"}
                    fontSize={"0.7rem"}
                    key={i}
                    pl={"1rem"}
                    value={brand}
                    // isChecked
                    onChange={(e) => handleCheck(e)}
                  >
                    {brand}
                  </Checkbox>
                ))}
              </Flex>
            </Box>
          </Box> */}
          {/* filters end */}

          <Box
            // border={"0px solid gray"}
            // w={{ lg: "80%", sm: "100%", md: "100%", base: '100%' }}
            // ml={{ base: 0, sm: 0, md: 0, lg: "22%" }}
          >
            <div className={prodStyle.products}>
              <Flex
                justifyContent={"space-between"}
                borderBottom={"2px solid gray"}
                zIndex={14}
                backgroundColor={"white"}
                mb={"1rem"}
              >
                {/* <Box
                  w={{ base: '100%', sm: "100%", md: "100%", lg: "100%" }}
                  m={"0.5rem"}
                  display={'flex'}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  px={2}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  border={"0px solid gray"}
                  boxShadow={'sm'}
                >
                  <Box width={'100%'} border={'0px solid red'} >
                    <Text ml={2} textAlign={"left"}>
                      <b>Sort By :</b>
                    </Text>
                    <Select
                      variant="solid"
                      placeholder="All"
                      p={2}
                      bg={"gray.200"}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="rating">Rating </option>
                      <option value="discount">Better Discount</option>
                      <option value="PriceLTH">Price:Low To High</option>
                      <option value="PriceHTL">Price:High To Low</option>
                    </Select>
                  </Box>
                  <Box border={'0px solid black'} width={'100%'} >
                    <Text
                      ml={2}
                      textAlign={"left"}
                      display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                      }}
                    >
                      <b>Filters :</b>
                    </Text>
                    <Stack
                      display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                      }}
                    >
                      <SampleBrand brands={brands} handleCheck={handleCheck} />
                    </Stack>
                  </Box>
                  <Box border={'0px solid green'} width={'100%'} display={{ base: 'inline-block', sm: 'inline-block', md: 'inline-block', lg: 'none' }} justifyContent={'flex-end'} textAlign={{ base: 'center', sm: 'center', md: 'right' }} >
                    <Text
                      display={"inline-block"}
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      color={"pink.400"}

                    >
                      {" "}
                      Mens -
                    </Text>{" "}
                    ({totalPages})
                  </Box>
                </Box> */}
              </Flex>

              <Grid
                gridTemplateColumns={{
                  base: "repeat (1,1fr)",
                  lg: "repeat(4 ,1fr) ",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                }}
                gap={"0.9rem"}
                m={'auto'}
                mt={{ lg: "0rem", sm: "1rem", md: "1rem" }}
              >
                {checked ? (
                  <>
                    {filteredBrandData &&
                      filteredBrandData?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
                ) : (
                  <>
                    {products &&
                      products?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
                )}
              </Grid>





              
            </div>
            {/* <Box>
              <Pagination
                handlePage={handlePage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </Box> */}
          </Box>
        </Flex>

        {/* </div> */}
      </Box>


 <div className="BudgetToBuysFather">
         <img className="GifImg" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2023/2/22/b5423f93-3dff-4f31-833a-8323249e19871677046260062-Summer-Bargains.gif" alt="Summer-Bargains" />
        <div className="BudgetToBuys">
          {BudgetToBuys.length > 0 &&
                       BudgetToBuys.map((el) => <HomeDataCard key={el.id} {...el} />)}
        </div>
       </div> 
 {/* 3 days-delivery */}
      <img className="Delivery" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/17/32b8f01e-4b71-446b-b103-668ed70873c71676653509048-M-Express-3-Days.gif" alt="Delivery-Express-3-Days" />
      {/* Payment */}
      <img className="Delivery" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/2/22/6d1c4d3d-6fd9-4b52-8dc0-4c8b7e2453e61677061466410-RTB--4-.jpg" alt="order & payment" />
          
      <Footer />
    </div>
  );
};

export default Home;


