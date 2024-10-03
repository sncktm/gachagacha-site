// HamburgerMenu.tsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { width: "20%", backgroundColor: "#FFE8EC" } }}
      >
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <ListItemButton>
            <Link href="/" passHref>
              <ListItemText primary={<CloseIcon />} />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link href="/" passHref>
              <ListItemText primary="TOP" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link href="/item" passHref>
              <ListItemText primary="ITEM" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link href="/form" passHref>
              <ListItemText primary="FORM" />
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}
