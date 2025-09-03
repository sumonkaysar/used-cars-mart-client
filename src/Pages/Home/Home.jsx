import AdvertisedCars from "./AdvertisedCars/AdvertisedCars";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Contact from "./Contact/Contact";

const Home = () => {

  return (
    <div className="scroll-smooth">
      <Banner />
      <div className="max-w-[1500px] mx-auto">
        <AdvertisedCars />
        <Categories />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
