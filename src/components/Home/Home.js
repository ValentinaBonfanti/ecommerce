
import { Link, Outlet } from "react-router-dom";
import products from "../../listProducts";
import ItemsCard from "../Items/ItemsCard";
const Home = () => {
  return (
    <>
  {
             products && products
            .map((item) => 
             {
                 return (
                 <div key={item.id}>
                 <ItemsCard
                 name={item.name}
                 img={item.img}
                 id={item.id}
                 description={item.description}
                 price={item.price}
                 
                 />
                 </div>
                 )
             })
             }
    </>
  );
};
export default Home;