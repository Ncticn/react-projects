import CardBalance from "./components/CardBalance";

function App() {
  return (
    <main>
      <section className="flex h-screen items-center justify-center">
        <CardBalance currency="$" />
      </section>
    </main>
  );
}

export default App;
