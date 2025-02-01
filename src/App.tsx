import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
    </div>
  );
}

export default App;
