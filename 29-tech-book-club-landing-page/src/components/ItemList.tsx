import IconCheck from "./IconCheck";

interface ItemListProps {
  listSpace: "16" | "24";
  listItems: string[];
}

function ItemList({ listSpace, listItems }: ItemListProps) {
  return (
    <ul
      className={`${listSpace === "16" ? "space-y-4" : "space-y-4 md:space-y-6"}`}
    >
      {listItems.map((item, index) => (
        <li
          className="flex h-full w-full items-center justify-start gap-3.5"
          key={index}
        >
          <div className={`${listSpace === "16" ? "max-w-6" : "max-w-8"}`}>
            <IconCheck />
          </div>
          <p className="text-preset-5 text-neutral-700">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
