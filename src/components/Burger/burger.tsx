// HamburgerMenu.tsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
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
      {/* ハンバーガーメニューボタン */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* ドロワー (サイドメニュー) */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { width: "20%" } }}
      >
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <ListItem button>
            <Link href="/" passHref>
              <ListItemText primary={<CloseIcon />} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/" passHref>
              <ListItemText primary="TOP" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/item" passHref>
              <ListItemText primary="ITEM" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/form" passHref>
              <ListItemText primary="FORM" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
