import React, { useState } from "react";
import "./menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { motion } from "framer-motion";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const barVariants = {
    opened: {
      scale: 2,
    },

    closed: {
      scale: 1.5,
    },
  };

  const menuVariants = {
    opened: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),

    closed: {
      clipPath: "circle(30px at 248px 40px)",
      transition: {
        delay: 0.15,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div>
      <motion.svg
        initial={false}
        variants={barVariants}
        animate={isOpen ? "opened" : "closed"}
        onClick={() => setIsOpen((state) => !state)}
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
          fill="#fff"
        />
        <path
          d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
          fill="#fff"
        />
        <path
          d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
          fill="#fff"
        />
      </motion.svg>
      <motion.div
        defaultActiveKey="/home"
        className="flex-column menu"
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <Nav.Link className="menu-links" href="/home">
          Active
        </Nav.Link>
        <Nav.Link className="menu-links" eventKey="link-1">
          Link
        </Nav.Link>
        <Nav.Link className="menu-links" eventKey="link-2">
          Link
        </Nav.Link>
        <Nav.Link className="menu-links" eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </motion.div>
    </div>
  );
}
