import Banner from "../components/Banner";
import Header from "../components/Header";
import ServiceAdvertisement from "../components/ServiceAdvertisement";

const Home = () => {
  return (
    <div className=" ">
      <Header></Header>
      <div className="bg-[#12151e] ">
        <Banner></Banner>
        <ServiceAdvertisement></ServiceAdvertisement>
      </div>
    </div>
  );
};

export default Home;
