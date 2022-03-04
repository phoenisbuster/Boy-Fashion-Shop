import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Blog from '../components/Blog'
import Categories from "../components/Categories";
import Products from "../components/Products";
import Watch from "../components/Watch";
import Newsletter from "../components/NewSletter"; 
import Footer from "../components/Footer";
import Newarrival from '../components/Newarrival';

function Home() {
  return (
    <div className="App">
      <Slider />
      <Products/>
      <Categories />
      <Newarrival/>
      <Blog/>
     
    </div>
  );
}

export default Home;
