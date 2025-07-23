import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">Fintech</div>
      <div className="links">
        {links.map((link, idx) => (
          <a  key={`${link.title}-${idx}`} className="links-item" href={link.href}>
            {link.title}
          </a>
        ))}
        <button className="btn">Start Free Trail</button>
      </div>
    </div>
  );
};

export default Navbar;
