import Image from "next/image";
import Link from "next/link";

type SubItem = {
  id: number;
  name: string;
  url: string;
  icon?: string;
};

interface NavListSubItemProps {
  subItems: SubItem[];
}

function NavListSubItem({ subItems }: NavListSubItemProps) {
  return (
    <div className={`absolute top-4 right-0`} role="menu">
      <div className="mt-6 w-max rounded-[10px] bg-white px-6 py-6 drop-shadow-[0px_10px_40px_rgba(0,0,0,15%)]">
        <ul className="flex flex-col items-start justify-start gap-4">
          {subItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="text-preset-6 flex flex-row items-center justify-center gap-4 text-gray-500 transition delay-75 ease-linear hover:text-gray-950"
                role="menuitem"
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`Icon ${item.name}`}
                    className="size-4"
                  />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavListSubItem;
