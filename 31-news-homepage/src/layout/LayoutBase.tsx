import CardArticle from "../components/CardArticle";
import ArticleList from "../components/ArticleList";
import HeaderBase from "../components/HeaderBase";
import Homepage from "../pages/Homepage";

const articleItems = [
  {
    id: "1",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    imgUrl: "/images/image-retro-pcs.jpg",
  },
  {
    id: "2",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    imgUrl: "/images/image-top-laptops.jpg",
  },
  {
    id: "3",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    imgUrl: "/images/image-gaming-growth.jpg",
  },
];

export default function LayoutBase() {
  return (
    <>
      <HeaderBase />
      <main>
        <Homepage />
      </main>
      <aside>
        <ArticleList />
      </aside>
      <footer>
        <div className="flex flex-col gap-10 lg:flex-row">
          {articleItems.map((articleItem) => (
            <CardArticle
              count={"0" + articleItem.id}
              description={articleItem.description}
              title={articleItem.title}
              imgUrl={articleItem.imgUrl}
              key={articleItem.id}
            />
          ))}
        </div>
      </footer>
    </>
  );
}
