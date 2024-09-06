import Image from "next/image";
import DistincCard from "./DistincCard";
const distinctiveList = [
  {
    imgSrc: "/a1.mp4",
    header: "0% Interest",
    content:
      "Obtain liquidity against deposited collateral with no interest or recurring fees",
  },
  {
    imgSrc: "/a2.mp4",
    header: "Censorship-resistance ",
    content:
      "rUSD is a decentralized stablecoin driven by advanced price stability algorithm",
  },
  {
    imgSrc: "/a3.mp4",
    header: "Good Collateral Ratio",
    content:
      "Borrow up to 90% of collateral’s value with effective liquidation mechanism",
  },
];
export default function Distinctive() {
  return (
    <div
      className="px-[20px]"
      style={{ backgroundColor: "#F1F2FC", position: "relative", zIndex: 1 }}
    >
      <div
        style={{
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "40px",
        }}
        className="fontCusom-bold 
        min-[1900px]:text-[48px] min-[1900px]:pb-[30px] 
        min-[1300px]:text-[45px] min-[1300px]:pb-[26px]
        text-[36px]
        min-[500px]:pb-[15px]
        max-[500px]:text-[32px]"
      >
        Distinctive Upsides
      </div>
      <div className="flex flex-wrap justify-center 
      min-[1900px]:gap-[24px] 
      min-[1300px]:gap-[24px] 
      gap-[24px]
      max-[500px]:gap-[24px]
      mx-auto">
        {Array(3)
          .fill(1)
          .map((el, idx) => {
            return (
              <DistincCard
                imgSrc={distinctiveList[idx].imgSrc}
                header={distinctiveList[idx].header}
                content={distinctiveList[idx].content}
                key={idx}
              />
            );
          })}
      </div>
    </div>
  );
}
