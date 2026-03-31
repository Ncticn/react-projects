import Image from "next/image";

import BrandLogo from "@/assets/logo.svg";
import Link from "next/link";

import NavList from "@/data/NavList.json";

function FooterApp() {
  return (
    <footer>
      <div className="rounded-tr-[100px] bg-gray-950 py-18">
        <div className="mx-auto max-w-82 md:max-w-171 lg:max-w-278">
          <div className="flex flex-col items-center justify-start gap-18 md:flex-row md:items-start md:justify-between md:gap-0">
            <Link href={"#"} aria-label="Go to homepage">
              <Image src={BrandLogo} alt="Brand Logo" />
            </Link>

            <div className="grid w-fit grid-cols-1 gap-12 md:grid-cols-[repeat(3,143px)] md:gap-4 lg:grid-cols-[repeat(3,255px)] lg:gap-8">
              {NavList.map((item) => (
                <div
                  className="flex flex-col items-center justify-center gap-8 **:w-full md:items-start md:justify-start"
                  key={item.id}
                >
                  <h4 className="text-preset-6 leading-115% text-center font-bold text-white md:text-start">
                    {item.name}
                  </h4>
                  <ul className="flex flex-col items-center justify-center gap-0.5 md:items-start md:justify-start">
                    {item?.subList.map((subItem) => (
                      <li key={subItem.id}>
                        <Link
                          href={subItem.url}
                          className="text-preset-6 leading-200% block text-center font-normal text-white opacity-75 hover:underline md:text-start"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterApp;
