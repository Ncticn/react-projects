import IllustrationAIContent from "../assets/images/illustration-ai-content.webp";

function CardAI() {
  return (
    <div className="h-full w-full rounded-[10px] bg-yellow-500 px-6 py-6">
      <div className="flex h-full flex-col items-start justify-start gap-6 lg:justify-between lg:gap-0">
        <h2 className="text-preset-2 text-black">
          Write your content using AI.
        </h2>
        <img
          src={IllustrationAIContent}
          alt="Image Illustration AI Content"
          className="max-w-55 object-contain lg:max-w-full"
        />
      </div>
    </div>
  );
}

export default CardAI;
