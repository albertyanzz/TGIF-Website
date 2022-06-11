import type { NextPage } from "next";
import { InfoCard } from "../components/InfoCard";

const Home: NextPage = () => {
  return (
    <div className="container">
      <main>
        <InfoCard />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
