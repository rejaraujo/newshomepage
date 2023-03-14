import NavLinks from "./NavLinks";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const menuIcon = (
    <CgMenu
      className="hamburger-open"
      size="2.7em"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className="hamburger-close"
      size="2.7em"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className="mobilenavigation">
      {open ? closeIcon : menuIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
