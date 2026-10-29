import Logo from "./Logo";
import Notification from "./Notification";

const Header = () => {
  return (
    <header className="flex justify-between px-(--s-spacing) py-3 sticky top-0 bg-white tracking-tighter">
      <Logo />
      <Notification hasNotification={true} />
    </header>
  );
};

export default Header;
