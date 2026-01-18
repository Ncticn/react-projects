import CardTestimonial from "./components/CardTestimonial";
import testimonials from "./data/ClientTestimonials.json";
function App() {
  return (
    <>
      <main>
        <section aria-label="Section Testimonials Grid">
          <div className="mx-auto max-w-76.25 md:max-w-161.75 lg:max-w-278.5">
            <div className="grid-wrapper">
              {testimonials.map((testimonial) => (
                <CardTestimonial
                  {...testimonial}
                  clientQueue={testimonial.id}
                  key={testimonial.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
