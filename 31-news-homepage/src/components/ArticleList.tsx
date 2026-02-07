import Divider from "./Divider";

interface ArticleListItemProps {
  title: string;
  description: string;
  link: string;
}

function ArticleListItem(props: ArticleListItemProps) {
  return (
    <li>
      <a href={props.link} target="_self" className="group block space-y-2">
        <h4 className="text-preset-4 group-hover:text-gold-400 text-white transition-colors delay-75 ease-linear">
          {props.title}
        </h4>
        <p className="text-preset-6 text-grey-300">{props.description}</p>
      </a>
    </li>
  );
}

export default function ArticleList() {
  return (
    <div className="bg-navy-950 h-full w-full px-5 py-8 md:px-11 lg:px-6">
      <div className="flex items-center justify-center gap-0">
        <div className="space-y-8">
          <h3 className="text-gold-400 text-preset-3">New</h3>
          <ul className="space-y-8">
            <ArticleListItem
              link="/"
              title="Hydrogen VS Electric Cars"
              description="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <Divider />
            <ArticleListItem
              link="/"
              title="The Downsides of AI Artistry"
              description="What are the possible adverse effects of on-demand AI image generation?"
            />
            <Divider />
            <ArticleListItem
              link="/"
              title="Is VC Funding Drying Up?"
              description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
