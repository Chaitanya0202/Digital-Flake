import { useTheme } from "@emotion/react";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { GrCube } from "react-icons/gr";
import { PiListBulletsBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = () => {
  const theme = useTheme();
  const location = useLocation(); // Get the current location

  const arrowStyle = {
    opacity: 0.3, // Reduced opacity for the arrow icon
  };

  const isActive = (path) => location.pathname === path; // Check if the path is active

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#F4F4F4",
          color: "#000000",
          boxSizing: "border-box",
        },
        "& .MuiListItemIcon-root": {
          color: "#000000",
          opacity: 0.5,
        },
      }}
    >
      <Navbar />
      <List sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", marginTop: 10 }}>
        <ListItemButton
          component={Link}
          to="/home"
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: isActive('/home') ? '#FFF9C4' : 'transparent', // Middle-level yellow color
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  color: (theme) => theme.palette.primary.main,
                  opacity: 0.5,
                },
              }}
              primary="HOME"
            />
            <BiSolidRightArrow style={arrowStyle} />
          </Box>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/category"
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: isActive('/category') ? '#FFF9C4' : 'transparent', // Middle-level yellow color
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  color: (theme) => theme.palette.primary.main,
                  opacity: 0.5,
                },
              }}
              primary="CATEGORY"
            />
            <BiSolidRightArrow style={arrowStyle} />
          </Box>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/subcategory"
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: isActive('/subcategory') ? '#FFF9C4' : 'transparent', // Middle-level yellow color
          }}
        >
          <ListItemIcon>
            
            <PiListBulletsBold  className="text-2xl" />
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  color: (theme) => theme.palette.primary.main,
                  opacity: 0.5,
                },
              }}
              primary="SUBCATEGORY"
            />
            <BiSolidRightArrow style={arrowStyle} />
            {/* <BiCategoryAlt className="text-2xl" /> */}
          </Box>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/product"
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: isActive('/product') ? '#FFF9C4' : 'transparent', // Middle-level yellow color
          }}
        >
          <ListItemIcon>
          <GrCube className="text-2xl" />
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  color: (theme) => theme.palette.primary.main,
                  opacity: 0.5,
                },
              }}
              primary="PRODUCT"
            />
            <BiSolidRightArrow style={arrowStyle} />
          </Box>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
