import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
import Styles from "./Admin.module.css"
import { BsSpeedometer2,BsShop,BsBoxSeam,BsFillPeopleFill } from "react-icons/bs";
import { HamburgerIcon} from '@chakra-ui/icons'
import { ImLocation } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import Dashboard from './Dashboard';
import Shops from "./Shops"


const Sidebar = () => {
    const[dashboard,setDashboard]=React.useState(true);
    const[shops,setShops]=React.useState(false);
    const[products,setProducts]=React.useState(false);
    const[categories,setCategories]=React.useState(false);
    const[location,setLoaction]=React.useState(false);
    const[Customers,setCustomers]=React.useState(false);
    const[Users,setUsers]=React.useState(false);
    const[Admin,setAdmin]=React.useState(false);
  return (
    <div className={Styles.Sidebar}>
        <Box mt={6}  h="700px" bgColor="white">
            <VStack spacing={10}>

            <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<BsSpeedometer2/>}>Dashboard</Button>
            {/* <hr/>
           <Text textStyle="SidebarHead" m="15px">PRODUCT LIST</Text>
            <hr/> */}
           <Button textAlign="initial" bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<BsShop/>}>Shops</Button>

           <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<BsBoxSeam/>}>Products</Button>

           <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<HamburgerIcon/>}>Categories</Button>

           <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<ImLocation/>}>Location</Button>

           <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<BsFillPeopleFill/>}>Customers</Button>

           <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<FaUserShield/>}>Users List</Button>

           <Button bgColor="white" fontFamily="Cambria" w="100%" size={"md"} _hover={{bgColor:"#2e3192",color:"white"}} leftIcon={<MdAdminPanelSettings/>}>Admin List</Button>
            </VStack>
        </Box>
    </div>
  )
}

export default Sidebar