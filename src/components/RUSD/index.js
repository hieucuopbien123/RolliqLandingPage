import Image from "next/image";
const rusdList = [
  "rUSD is mined via third-party platforms, giving it a truly decentralized character and providing it enhanced safety and freedom from centralized control.",
  'Rolliq applies stable algorithms to maintain a "stable" rUSD price over time.',
  "With ETH as collateral, users may easily borrow rUSD to achieve their financial goals.",
];
export default function RUSD() {
  return (
    <div
      style={{ backgroundColor: "#8E90C2", position: "relative", zIndex: 1 }}
    >
      <div
        className="pt-14 pl-2 pr-6 flex flex-col md:flex-row gap-5 textinepmtypadding 
        min-[1900px]:gap-20
        md:gap-16
        max-[500px]:px-[15px]
      "
      >
        <div
          className="text-center whitespace-nowrap fontCusom-bold
            min-[1900px]:text-[48px] min-[1900px]:min-w-[50%] min-[1900px]:pl-[5%] min-[2100px]:pl-[10%]
            min-[1300px]:text-[44px] md:min-w-[50%] md:pl-[5%]
            text-[36px]
            max-[500px]:text-[32px] max-[500px]:text-left
          "
          style={{
            fontWeight: "400",
            zIndex: 2,
          }}
        >
          What is rUSD?
        </div>
        <div
          className="md:max-w-[45%] lg:max-w-[40%] flex flex-col 
          min-[1900px]:gap-8 min-[1900px]:max-w-[30%]
          md:gap-6 md:max-w-[45%] lg:max-w-[35%]
          min-[500px]:gap-4
        "
        >
          <div
            className="mb-6
              min-[1900px]:text-[20px] min-[1900px]:pt-[30px] fontCusom-bold relative 
              md:text-[18px] min-[3000px]:pt-[22px]
              min-[500px]:text-[16px] min-[500px]:pt-[10px]
              max-[500px]:text-[16px]
            "
            style={{ zIndex: 2 }}
          >
            rUSD is a stablecoin pegged to the value of the US dollar, serving as a means of loan repayment, liquidity provision, and profit maximization.
          </div>
          <div
            className="flex flex-col 
            min-[1900px]:gap-1
          "
          >
            {rusdList.map((el, idx) => {
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
                  <img
                    src={"/check.svg"}
                    style={{
                      marginRight: "10px",
                      position: "relative",
                      // top: "-14px",
                      zIndex: 10,
                    }}
                    className="w-[32px] h-[32px] max-[500px]:w-[24px] max-[500px]:h-[24px]"
                    
                    data-aos="fade-up"
                    // data-aos-duration="1000" data-aos-once="true"
                  ></img>
                  <div
                    style={{ zIndex: 10 }}
                    className="fontCusom-Medium 
                      min-[1900px]:text-[16px] min-[1900px]:pl-6
                      md:text-[14px] md:pl-5
                      min-[500px]:text-[14px] min-[500px]:pl-4
                      max-[500px]:text-[14px]
                    "
                  >
                    {el}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="epmtypadding"></div>
      <div className="overflow-hidden w-full p-7 lg:p-10 xl:p-14 
      min-[1900px]:pb-32 min-[1900px]:pt-24
      min-[1300px]:pb-28 min-[1900px]:pt-22
      min-[500px]:pb-24 min-[500px]:pt-18
      max-[500px]:pb-14
      max-[500px]:pt-48
      ">
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{
            zIndex: 0,
            position: "relative",
            opacity: 1,
          }}
          className="scalevid"
        >
          <source src="/d1.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="md:py-3"></div>
    </div>
  );
}
