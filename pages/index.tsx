import type { NextPage } from "next";
import { InfoCard } from "../components/InfoCard";
import { TestimonialCard } from "../components/TestimonialCard";

const Home: NextPage = () => {
  return (
    <div className="container">
      <main>
        <TestimonialCard />
        {/* <InfoCard /> */}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
