import Logo from "./Logo";
import Notification from "./Notification";

const Header = () => {
  return (
    <header className="flex justify-between px-(--s-spacing) py-3 outline-amber-400 outline-4">
      <Logo />
      <Notification hasNotification={false} />
    </header>
  );
};

export default Header;
