import { products } from "@/utils/products";
import Container from "./components/Container";
import Hero from "./components/Hero";
import ProductCard from "./components/products/ProductCard";

const Home = () => {

  return (
  <div className="p-8">
    <Container>
      <div>
      <Hero/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 
       lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-6 gap-8">
        {
          products.map((product:any) => {
            return <ProductCard data={product} />
          })
        }
      </div>
    </Container>
  </div>);
}
export default Home;
