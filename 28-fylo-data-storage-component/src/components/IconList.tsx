import IconDocument from "./IconDocument";
import IconFolder from "./IconFolder";
import IconUpload from "./IconUpload";

export default function IconList() {
  const iconList = [<IconDocument />, <IconFolder />, <IconUpload />];
  return (
    <div className="flex flex-row items-stretch justify-start gap-4">
      {iconList.map((_, i) => (
        <a
          href="/"
          target="_self"
          className="flex size-12 items-center justify-center rounded-[10px] bg-blue-950 text-blue-600 transition-all delay-100 ease-linear hover:bg-blue-600 hover:text-blue-950"
          key={i}
        >
          {_}
        </a>
      ))}
    </div>
  );
}
