import IconFacebook from "./IconFacebook";
import IconInstagram from "./IconInstagram";
import IconPinterest from "./IconPinterest";
import IconTwitter from "./IconTwitter";

function FooterBase() {
  const navItems = ["About", "Services", "Projects"];
  const socialItems = [
    {
      name: "Facebook",
      component: <IconFacebook />,
    },
    {
      name: "Instagram",
      component: <IconInstagram />,
    },
    {
      name: "Twitter",
      component: <IconTwitter />,
    },
    {
      name: "Pinterest",
      component: <IconPinterest />,
    },
  ];

  return (
    <footer>
      <div className="bg-green-300 py-18.5">
        <div className="flex flex-col items-center justify-start gap-20">
          <div className="flex flex-col items-center justify-start gap-10">
            <a href="/" target="_self" aria-label="Go to Homepage">
              <img
                src="/logo-dark.svg"
                alt="Brand Logo"
                className="block object-contain"
              />
            </a>

            <ul className="flex flex-row items-center justify-center gap-14">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    target="_self"
                    aria-label={`Go to ${item}`}
                    className="text-preset-10 block text-green-500 transition-colors delay-75 ease-linear hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="social-links">
            <ul className="flex flex-row items-stretch justify-start gap-6">
              {socialItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    target="_self"
                    aria-label={`Go to ${item.name}`}
                    className="block object-contain text-green-600 transition-colors delay-75 ease-linear hover:text-white"
                  >
                    {item.component}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBase;
