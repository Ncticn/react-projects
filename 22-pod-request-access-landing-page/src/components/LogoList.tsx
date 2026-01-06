type Logo = {
  id: string;
  name: string;
  url: string;
};

interface LogoListProps {
  logoItems: Logo[];
  className?: string;
}
function LogoList({ logoItems, className }: LogoListProps) {
  return (
    <ul
      className={`${
        className ? className : ""
      } md:pt-6 flex items-center justify-between md:justify-start md:gap-10 w-full`}
    >
      {logoItems.map((logo) => (
        <li key={logo.id}>
          <img
            src={logo.url}
            alt="Sponsor Brand Logo"
            className="object-contain max-w-14 md:max-w-full opacity-50"
          />
        </li>
      ))}
    </ul>
  );
}

export default LogoList;
