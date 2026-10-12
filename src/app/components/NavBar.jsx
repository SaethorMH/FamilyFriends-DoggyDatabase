import NavIcon from "./NavIcon";
const NavBar = () => {
  return (
    <nav className="flex justify-evenly fixed w-full bottom-0 py-6 rounded-t-4xl backdrop-blur-[0.4rem]">
      <NavIcon dest="/" icon="house" chosen />
      <NavIcon dest="/detailview" icon="star" />
      <NavIcon dest="/commments" icon="comment" />
      <NavIcon dest="/profile" icon="user" />
    </nav>
  );
};

export default NavBar;
