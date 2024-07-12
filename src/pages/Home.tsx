import AllProduct from "../components/AllProduct";
import Banner from "../components/Banner";
import CustomerReviews from "../components/CustomerReviews";
import FeaturedBrands from "../components/FeaturedBrands";
import ServiceAdvertisement from "../components/ServiceAdvertisement";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
  return (
    <div className=" ">
      <div>
        <Banner></Banner>
        <ServiceAdvertisement></ServiceAdvertisement>
        <AllProduct></AllProduct>
        <FeaturedBrands></FeaturedBrands>
        <CustomerReviews></CustomerReviews>
        <WhyChoose></WhyChoose>
      </div>
    </div>
  );
};

export default Home;
