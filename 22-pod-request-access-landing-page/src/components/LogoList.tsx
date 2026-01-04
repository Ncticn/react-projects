type Logo = {
  id: string;
  name: string;
  url: string;
};

interface LogoListProps {
  logoItems: Logo[];
}
function LogoList({ logoItems }: LogoListProps) {
  return (
    <ul className="md:pt-6 flex items-center justify-between md:justify-start md:gap-10 w-fit">
      {logoItems.map((logo) => (
        <li key={logo.id}>
          <img
            src={logo.url}
            alt="Sponsor Brand Logo"
            className="max-w-fit h-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default LogoList;
