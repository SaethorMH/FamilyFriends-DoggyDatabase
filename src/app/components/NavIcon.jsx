import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStar,
  faComment,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const icons = {
  house: faHouse,
  star: faStar,
  user: faUser,
  comment: faComment,
};

const NavIcon = ({ dest, icon, chosen = false }) => {
  return (
    <Link href={dest}>
      <FontAwesomeIcon
        icon={icons[icon]}
        className={`text-2xl ${chosen ? "text-accent" : "text-gray-400"}`}
      />
    </Link>
  );
};

export default NavIcon;
