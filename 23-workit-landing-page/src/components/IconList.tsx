import IconFacebook from "./IconFacebook";
import IconInstagram from "./IconInstagram";
import IconTwitter from "./IconTwitter";

function IconList() {
  return (
    <div className="space-x-7 py-4">
      <IconFacebook className="fill-purple-500 group-hover:fill-purple-900" />
      <IconTwitter className="fill-purple-500 group-hover:fill-purple-900 " />
      <IconInstagram className="fill-purple-500 group-hover:fill-purple-900" />
    </div>
  );
}

export default IconList;
