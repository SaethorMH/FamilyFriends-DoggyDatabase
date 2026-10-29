import Link from "next/link";
const Logo = () => {
  return (
    <Link href={`/`}>
      <h1 className="var(--font-mono) text-lg font-extrabold text-(--color-text)">
        FamilyFriends
      </h1>
    </Link>
  );
};

export default Logo;
