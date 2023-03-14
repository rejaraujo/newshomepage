import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/#home">Home</Link>
        </li>
        <li>
          <Link href="#new">New</Link>
        </li>
        <li>
          <Link href="#popular">Popular</Link>
        </li>
        <li>
          <Link href="#trending">Trending</Link>
        </li>
        <li>
          <Link href="#categories">Categories</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
