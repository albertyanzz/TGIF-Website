import type { NextPage } from "next";
import { InfoCard } from "../components/InfoCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Button } from "../components/Button";
import { SpotlightCard } from "../components/SpotlightCard";
import { SpotlightIcon } from "../components/SpotlightIcon";

const Home: NextPage = () => {
  return (
    <div className="container">
      <main>
        {/* <TestimonialCard /> */}
        {/* <InfoCard /> */}
        {/* <Button /> */}
        <SpotlightCard />
        {/* <SpotlightIcon /> */}
      </main>
    </div>
  );
};

export default Home;
