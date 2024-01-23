export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-50 mx-auto w-screen p-4 backdrop-blur">
      <ul className="flex justify-center gap-x-8 px-8 text-xl">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
