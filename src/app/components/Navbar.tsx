import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center p-2 bg-white gap-4 rounded-3xl px-5 items-center"
    >
      <Link href="/">Home</Link>
      <Link href="/">Projects</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
    <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
