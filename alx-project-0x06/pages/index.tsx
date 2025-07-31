import CounterApp from "./counter-app";
import { CountProvider } from "@/context/CountContext";

const Home: React.FC = () => {
  return (
    <CountProvider>
      <CounterApp />
    </CountProvider>
  );
};

export default Home;

