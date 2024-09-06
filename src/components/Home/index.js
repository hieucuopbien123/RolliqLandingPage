import Image from "next/image";
import RUSD from "../RUSD";
import Distinctive from "../Distinctive";
import HowTo from "../HowBorrowandSupply";
import Intro from "../Intro";
import LiQEcosystem from "../LiQEcoSystem";
import Partner from "../Partner";
export default function Home() {
  return (
    <div>
      <Intro />
      <Distinctive />
      <LiQEcosystem></LiQEcosystem>
      <HowTo></HowTo>
      <RUSD></RUSD>
      <Partner></Partner>
    </div>
  );
}
