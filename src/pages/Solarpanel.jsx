import React, { useEffect, useState } from "react";
import {
  Flex,
  Grid,
  Box,
  Text,
  Button,
  Icon,
  VStack,
  Image,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Product from "./Product";
import {
  Get_solarpanel_item,
  sortMysolarpanel,
} from "../redux/solarpanel/solarpanel.action";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// import Loading from "./Loading";
const Solarpanel = () => {
  const [reset, setReset] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const [data,setData] = useState([])

  const { isLoading, solarpanel, isError } = useSelector(
    (store) => store.solarpanel
  );
  const handleClick = (el) => {
    navigate(`/productdetails/${el.id}`);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value == "reset") {
      setReset((previous) => !previous);
      return;
    }
    dispatch(sortMysolarpanel(value));
  };

  useEffect(() => {
    dispatch(Get_solarpanel_item());
  }, [reset]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar />

      <div
        style={{
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "70px",
        }}
      >
        <Product />
        <VStack
          display={{ md: "none" }}
          margin={"auto"}
          padding={"20px"}
          width={"80%"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        >
          <Text
            marginTop={2}
            color={"teal"}
            id="medicinese"
            fontSize={35}
            fontWeight={"bold"}
          >
            Medicines
          </Text>
          <select name="" id="" onChange={(e) => handleChange(e)}>
            <option value="reset">Sort-By-Price</option>
            <option value="high">High to Low </option>
            <option value="low">Low to High</option>
          </select>
        </VStack>

        <Flex position={"relative"} justify={"center"} gap={2}>
          <VStack
            id="maindiv"
            align={"center"}
            display={{ base: "none", sm: "none", md: "block" }}
            paddingLeft={"5px"}
            textAlign={"center"}
            alignItems={"center"}
            width={"15%"}
            pb={10}
          >
            <Box
              id="filter"
              p={2}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              textAlign={"center"}
              width={"100%"}
            >
              <Text
                marginTop={2}
                color={"teal"}
                id="medicinese"
                fontSize={35}
                fontWeight={"bold"}
              >
                Solarpanel
              </Text>
              <select
                style={{ width: "100%" }}
                name=""
                id=""
                onChange={(e) => handleChange(e)}
              >
                <option value="reset">Sort-By-Price</option>
                <option value="high">High to Low </option>
                <option value="low">Low to High</option>
              </select>
            </Box>

            <VStack
              id="add"
              p={2}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              align={"start"}
              width={"100%"}
              marginLeft={"0px"}
              textAlign={"left"}
              marginTop={"20px"}
            >
              <Text fontWeight={"extrabold"}>Filter Results</Text>
              <HStack>
                <Checkbox /> <Text>Video</Text>
              </HStack>
              <HStack>
                <Checkbox /> <Text>Shop Now</Text>
              </HStack>
            </VStack>
            <VStack
              id="add"
              p={2}
              width={"100%"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              marginLeft={"0px"}
              align={"start"}
              marginTop={"20px"}
            >
              <Text fontWeight={"extrabold"}>Related Category</Text>
              <Text>Solar Panel Installation</Text>
              <Text>Solar Panel Cleaning Services</Text>
            </VStack>
            <VStack
              id="add"
              p={2}
              width={"100%"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              marginLeft={"0px"}
              align={"start"}
              marginTop={"20px"}
            >
              <Text fontWeight={"extrabold"}> Related Brands</Text>
              <Text>Waaree Solar Panels</Text>
              <Text>TATA Solar Panels</Text>
              <Text>Waaree Solar Panels</Text>
              <Text>Vikram Solar Panels</Text>
              <Text>Waaree Solar Panels</Text>
              <Text>Adani Solar Panels</Text>
              <Text>Waaree Solar Panels</Text>
              <Text>Luminous Solar Panels</Text>
              <Text>Loom Solar Panel</Text>
              <Text>Renewsys Solar Panels</Text>
              <Text>Panasonic Solar Panels</Text>
              <Text>Canadian Solar Panels</Text>
              <Text>Eastman Solar Panel</Text>
            </VStack>
          </VStack>

          <Grid
            m={"10px"}
            p={"5px"}
            width={"80%"}
            templateColumns={{
              base: "repeat(1 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {solarpanel.map((el) => {
              return (
                <Box id="probox" key={el.id} m="5px">
                  <VStack
                    textAlign={"center"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    h="auto"
                    p="5"
                  >
                    <Image
                      id="hov"
                      src={el.img_src}
                      h={{ sm: "125px", md: "185px", lg: "225px" }}
                      alt="product-image"
                    />
                    <Text fontSize={17}>{el.title}</Text>

                    <Text fontWeight={"bold"}>₹ {el.price}</Text>
                    <Box mb="8px">
                      {Array(5)
                        .fill("")
                        .map((_, i) => {
                          let rating = Math.ceil(Math.random() * 3);

                          return (
                            <Icon
                              as={AiFillStar}
                              key={i}
                              color={i <= rating ? "gold" : "gray.300"}
                            />
                          );
                        })}
                    </Box>
                    <Text color={"teal"} fontSize={14}>
                      Free shipping with $50.00 orders
                    </Text>

                    <Text>Call 08048970527</Text>
                    <Button
                      onClick={() => handleClick(el)}
                      bg={"rgb(6,128,128)"}
                      padding={"10px"}
                      borderRadius={2}
                      width={"70%"}
                    >
                      {"Contact Supplier >"}
                    </Button>
                  </VStack>
                </Box>
              );
            })}
          </Grid>
        </Flex>
      </div>

      <Footer />
    </>
  );
};

export default Solarpanel;
