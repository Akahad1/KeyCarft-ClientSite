import AllProduct from "../components/Home/AllProduct";
import Banner from "../components/Home/Banner";
import CustomerReviews from "../components/Home/CustomerReviews";

import FeaturedBrands from "../components/Home/FeaturedBrands";
import ServiceAdvertisement from "../components/Home/ServiceAdvertisement";
import WhyChoose from "../components/Home/WhyChoose";

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
