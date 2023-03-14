import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="#" className="logo">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
