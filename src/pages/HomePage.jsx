import Reviews from "../features/collection/Reviews";
import Features from "../features/Home/Features";
import Home from "../features/Home/Home";
import TopSellers from "../features/Home/TopSellers";

function HomePage() {
  return (
    <>
      <Home />
      <Features />
      <TopSellers />
      <Reviews />
    </>
  );
}

export default HomePage;
