import type { NextPage } from "next";
import { InfoCard } from "../components/InfoCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className="container">
      <main>
        {/* <TestimonialCard /> */}
        {/* <InfoCard /> */}
        <Button />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
