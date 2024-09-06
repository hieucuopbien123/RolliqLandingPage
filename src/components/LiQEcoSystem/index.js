import Image from "next/image";
import LiQCard from "./LiQCard";
const liquiEcoList = [
  {
    imgSrc: "/b1.mp4",
    title: "Borrow",
    content:
      "Access rUSD loans up to 90% of deposited ETH collateral, with low and one-time fees",
    link: "",
  },
  {
    imgSrc: "/b2.mp4",
    title: "Supply",
    content:
      "Deposit rUSD into the Stability Pool and earn liquidation gains plus $RIQ rewards in return",
    link: "",
  },
  {
    imgSrc: "/b3.mp4",
    title: "Stake",
    content:
      "Stake $RIQ and earn the revenue from issuance fees (in rUSD) and redemption fees (in ETH)",
    link: "",
  },
  {
    imgSrc: "/b4.mp4",
    title: "Vote",
    content:
      "Participate in RolliQ governance and vote on new proposals, new assets, and protocol upgrades",
    link: "",
  },
];

export default function LiQEcosystem() {
  return (
    <div
      className="pt-20 px-10 md:px-20 max-[500px]:px-2"
      style={{
        backgroundColor: "#F1F2FC",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          fontWeight: "600",
          textAlign: "center",
        }}
        className="fontCusom-bold pb-2 
        min-[1900px]:text-[48px] min-[1900px]:pt-16 
        min-[1300px]:text-[44px] min-[1300px]:pt-12
        text-[36px]
        max-[500px]:text-[32px] whitespace-nowrap"
      >
        ROLLIQ Ecosystem
      </div>
      <div
        className="pb-8 text-[16px] md:text-[20px] fontCusom-bold 
        min-[1900px]:text-[20px] min-[1900px]:pt-1 min-[1900px]:pb-16
        min-[1300px]:text-[16px] min-[1300px]:pb-12
        min-[500px]:text-[12px] min-[500px]:pb-8"
        style={{ textAlign: "center", fontWeight: "400", margin: "0px 24px" }}
      >
        Experience an community-managed, cost-effective and streamlined decentralized liquidity protocol.
      </div>
      {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 container mx-auto" style={{justifyItems: "center"}}> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 
      min-[1900px]:gap-[24px] justify-items-center w-fit mx-auto
      min-[1300px]:gap-[24px]
      min-[500px]:gap-[24px]">
        {Array(4)
          .fill(1)
          .map((el, idx) => {
            return (
              <LiQCard
                imgSrc={liquiEcoList[idx].imgSrc}
                content={liquiEcoList[idx].content}
                title={liquiEcoList[idx].title}
                key={idx}
              ></LiQCard>
            );
          })}
      </div>
    </div>
  );
}
