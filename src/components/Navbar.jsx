import React,{useContext} from "react";
import { Stack,Switch,FormControlLabel,Box } from "@mui/material";
import { Link } from "react-router-dom";
import ThemeContext from '../context/Theme';
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  const a= useContext(ThemeContext);
  return(
  <>
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
  <Box alignContent="center" paddingLeft="30px">
  <FormControlLabel control={<Switch defaultChecked  sx={{borderRadius:"30px"}} onChange={()=>a.handleState()}/>} style={{color:a.mode?"white":"black"}} label= {a.mode?"Enable LightMode":"Enable DarkMode"} />
  </Box>
  </>
)};

export default Navbar;
