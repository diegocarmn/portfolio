import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center p-2 bg-white gap-4 rounded-3xl px-5"
    >
      <Link href="/">Home</Link>
      <Link href="/">Projects</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
    </nav>
  );
};

export default Navbar;
