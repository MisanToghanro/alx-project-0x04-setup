import CounterApp from "./counter-app";
import { useCount } from "@/context/CountContext";




const Home: React.FC = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <CounterApp/>
         <h1 className="text-xl">Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    
  );
}
export default Home;
