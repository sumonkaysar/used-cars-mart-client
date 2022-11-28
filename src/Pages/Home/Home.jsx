import AdvertisedCars from "./AdvertisedCars/AdvertisedCars";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Contact from "./Contact/Contact";

const Home = () => {

  return (
    <div>
      <Banner />
      <AdvertisedCars />
      <Categories />
      <Contact />
    </div>
  );
}

export default Home;
