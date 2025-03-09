"use client";

import Link from "next/link";

export default function ScrollLink({
  id,
  children,
  onHandleSheetClose,
  className,
}) {
  const handleClick = (e) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={`#${id}`}
      className={className}
      onClick={onHandleSheetClose}
      passHref
    >
      <div onClick={handleClick}>{children}</div>
    </Link>
  );
}