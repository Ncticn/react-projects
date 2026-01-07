function SectionFeature() {
  const items = [
    {
      id: "1",
      title: "Actionable insights",
      description:
        "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
    },
    {
      id: "2",
      title: "Data-driven decisions",
      description:
        "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
    },
    {
      id: "3",
      title: "Always affordable",
      description:
        "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
    },
  ];
  return (
    <section className="section-features px-5 pt-16 pb-16 md:px-11 md:pb-11 md:pt-14 lg:px-20 lg:pt-22 lg:pb-36">
      <div className="max-w-2xl lg:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-8">
          {items.map((item) => (
            <div className="feature-item flex flex-col items-center justify-start gap-6 md:gap-14 md:flex-row lg:flex-col">
              <div className="feature-item-count shrink-0 rounded-full border border-purple-500 w-12 h-12 flex items-center justify-center">
                <span className="text-purple-900 font-fraunces font-semibold md:text-xl lg:text-2xl leading-none tracking-0">
                  {item.id}
                </span>
              </div>
              <div className="feature-item-content text-purple-900 not-md:text-center md:text-start lg:text-center space-y-4 md:space-y-7">
                <h3 className="text-preset-3">{item.title}</h3>
                <p className="text-preset-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SectionFeature;
