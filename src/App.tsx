import { Companies } from "./components/Companies";
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
        <Companies />
      </main>
    </div>
  );
}

export default App;
