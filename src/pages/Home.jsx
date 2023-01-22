import { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../redux/apiCalls";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzastate;

  // fetch pizzas from database
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
      {loading ? (
        <div className="flex justify-center h-screen w-screen mt-10">
          <Loading />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-[10em] w-screen mt-10">
          <Error />
        </div>
      ) : (
        pizzas.map((pizza) => <Pizza pizza={pizza} key={pizza._id} />)
      )}
    </div>
  );
};

export default Home;
