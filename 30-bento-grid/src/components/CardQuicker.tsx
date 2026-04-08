import IllustrationCreatePost from "../assets/images/illustration-create-post.webp";

function CardQuicker() {
  return (
    <div className="h-full w-full rounded-[10px] bg-yellow-100 px-8 py-8 not-lg:md:px-6 not-lg:md:py-6">
      <div className="flex h-full flex-col items-start justify-center gap-6 lg:items-center">
        <h2 className="text-preset-2 text-black">
          Create and schedule content{" "}
          <i className="text-purple-500">quicker.</i>
        </h2>

        <img
          src={IllustrationCreatePost}
          alt="Image Illustration Create Post"
          className="max-w-48 object-contain"
        />
      </div>
    </div>
  );
}

export default CardQuicker;
