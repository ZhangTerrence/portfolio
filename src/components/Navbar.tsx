"use client";

export const Navbar = () => {
  const scrollToView = (section: number) => {
    document.getElementsByTagName("section")[section].scrollIntoView();
  };

  return (
    <nav className="fixed inset-x-0 z-50 mx-auto flex h-16 w-screen items-center justify-end p-4 backdrop-blur">
      <ul className="flex justify-center gap-x-8 px-8 text-xl">
        <li className="cursor-pointer" onClick={() => scrollToView(1)}>
          About
        </li>
        <li className="cursor-pointer" onClick={() => scrollToView(2)}>
          Projects
        </li>
        <li className="cursor-pointer" onClick={() => scrollToView(3)}>
          Contact
        </li>
      </ul>
    </nav>
  );
};
