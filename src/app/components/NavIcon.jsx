"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

let NavIcon = ({ dest, icon }) => {
  const pathname = usePathname();

  const chosen = dest === "/" ? pathname === "/" : pathname.startsWith(dest);

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
