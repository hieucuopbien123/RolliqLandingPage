import StepComponent from "./StepComponent";
const ListStepBorrow = [
  "Make sure you have a minimum of $2000 worth of ETH prepared.",
  "Head over to the Ecosystem and direct yourself to Trove.",
  "Open a Trove by adding ETH as Collateral. You can borrow up to 110% your deposit.",
  "Confirm and verify the transaction to receive your rUSD loan.",
];
const ListStepSupply = [
  "Supply the rUSD borrowed in the Stability Pool. Your earning increases in proportion to the supplying amount.",
  "Confirm and authorize the transaction to start receiving your pool share.",
  "Claim your [Token] and benefit from liquidation and gas fee in ETH instantly!",
];
export default function HowTo() {
  return (
    <div
      className="pt-32 pb-10"
      style={{ backgroundColor: "#F1F2FC", position: "relative", zIndex: 1 }}
    >
      <div
        className="flex flex-col items-center min-[1000px]:flex-row gap-5 
      min-[1900px]:gap-2 justify-center min-[1900px]:mx-auto min-[1900px]:max-w-[1210px]
      min-[1300px]:gap-1 min-[1300px]:mx-auto min-[1300px]:max-w-[1150px]
      min-[500px]:max-w-[1000px] min-[500px]:mx-auto min-[1300px]:gap-1
      "
      >
        <div
          className="flex flex-col min-[1000px]:min-w-[355px] min-[1000px]:max-w-[50%]
          min-[1900px]:w-[50%]
          min-[1300px]:w-[50%]
          min-[500px]:w-[50%] 
        " 
        data-aos="fade-right"
        data-aos-duration="2000" data-aos-once="true"
        >
          <div
            className="min-[1900px]:w-[90%] flex flex-col gap-4
            min-[1300px]:w-[93%]
            max-[500px]:px-[15px]
          "
          >
            <div
              className="pb-10 fontCusom-bold 
              min-[1900px]:text-[48px]
              min-[1300px]:text-[44px]
              min-[500px]:text-[36px]
              max-[500px]:pb-4
              max-[500px]:text-center
              text-[32px]
            "
            >
              How to borrow rUSD
            </div>
            <div
              className="flex flex-col 
              min-[1900px]:gap-4
              min-[1300px]:gap-3
              min-[500px]:gap-2
            "
            >
              {ListStepBorrow.map((el, idx) => {
                const isFinalStep = idx == ListStepBorrow.length - 1;
                return (
                  <StepComponent
                    content={el}
                    num={idx + 1}
                    isFinalStep={isFinalStep}
                    key={idx}
                  ></StepComponent>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="min-[1900px]:w-[50%] text-center flex justify-center
          min-[1300px]:w-[50%]
          min-[1000px]:w-[50%]
        "
        >
          <div
            className="w-[417px] h-[500px] 
            min-[1900px]:w-[600px] min-[1900px]:h-[700px]
            min-[1300px]:w-[558px] min-[1300px]:h-[650px]
            max-[500px]:w-[327px] max-[500px]:h-[381px]
          "
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                className="absolute w-[416px] h-[498px]  
                  min-[1900px]:w-[600px] min-[1900px]:h-[700px]
                  min-[1300px]:w-[558px] min-[1300px]:h-[650px]
                  max-[500px]:w-[327px] max-[500px]:h-[381px]
                "
                style={{ zIndex: 1 }}
                src="./border4.svg"
              />
              <img
                className="absolute w-[379px] h-[453px] 
                  min-[1900px]:w-[558px] min-[1900px]:h-[650px]
                  min-[1300px]:w-[515px] min-[1300px]:h-[600px]
                  max-[500px]:w-[302px] max-[500px]:h-[352px]
                "
                style={{ zIndex: 1 }}
                src="./border3.svg"
              />
              <img
                className="absolute w-[337px] h-[402px] 
                    min-[1900px]:w-[515px] min-[1900px]:h-[600px]
                    min-[1300px]:w-[472px] min-[1300px]:h-[550px]
                    max-[500px]:w-[278px] max-[500px]:h-[327px]
                "
                style={{ zIndex: 1 }}
                src="./border2.svg"
              />
              <img
                className="absolute w-[294px] h-[352px]
                min-[1900px]:w-[472px] min-[1900px]:h-[550px]
                min-[1300px]:w-[429px] min-[1300px]:h-[500px]
                max-[500px]:w-[251px] max-[500px]:h-[301px]
                "
                style={{ zIndex: 1 }}
                src="./border1.svg"
              />
              <video
                autoPlay
                playsInline
                loop
                muted
                style={{ zIndex: 0, position: "absolute", opacity: 1 }}
                className="w-[252px] h-[302px] 
                  min-[1900px]:w-[429px] min-[1900px]:h-[500px]
                  min-[1300px]:w-[386px] min-[1300px]:h-[450px]
                  max-[500px]:w-[227px] max-[500px]:h-[277px]
                "
              >
                <source src="/c1.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
          {/* <div className="min-[450px]:hidden">
            <video
              autoPlay
              playsInline
              loop
              muted
              style={{
                zIndex: 0,
                position: "relative",
                opacity: 1,
                clipPath: "ellipse(48% 50% at 50% 50%)",
                maxWidth: "265px",
              }}
            >
              <source src="/c1.mp4" type="video/mp4"></source>
            </video>
          </div> */}
        </div>
      </div>


      <div className="mb-14"></div>


      <div
        className="flex flex-col items-center min-[1000px]:flex-row justify-center 
        min-[1900px]:max-w-[1210px] min-[1900px]:gap-2 min-[1900px]:mx-auto min-[1900px]:max-w-[1500px]
        min-[1300px]:gap-2 min-[1300px]:mx-auto min-[1300px]:max-w-[1150px] min-[1300px]:pb-[50px]
        min-[500px]:gap-1 min-[500px]:max-w-[1000px] min-[500px]:mx-auto
        "
      >
        <div
          className="w-[417px] h-[500px] min-[1900px]:w-[725px] 
            min-[1900px]:h-[870px] min-[1900px]:w-[50%] flex items-center
            min-[1300px]:w-[558px] min-[1300px]:h-[650px]
            max-[1000px]:order-2 order-1
            max-[500px]:w-[370px]"
        >
          <div
            className="w-[417px] h-[500px] 
            min-[1900px]:w-[600px] min-[1900px]:h-[700px]
            min-[1300px]:w-[558px] min-[1300px]:h-[650px]
            max-[500px]:w-[327px] max-[500px]:h-[381px] max-[500px]:w-[370px]
          "
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                className="absolute w-[416px] h-[498px] 
                min-[1900px]:w-[600px] min-[1900px]:h-[700px]
                  min-[1300px]:w-[558px] min-[1300px]:h-[650px]
                  max-[500px]:w-[327px] max-[500px]:h-[381px]
                "
                style={{ zIndex: 1 }}
                src="./border4.svg"
              />
              <img
                className="absolute w-[379px] h-[453px] 
                min-[1900px]:w-[558px] min-[1900px]:h-[650px]
                  min-[1300px]:w-[515px] min-[1300px]:h-[600px]
                  max-[500px]:w-[302px] max-[500px]:h-[352px]
                "
                style={{ zIndex: 1 }}
                src="./border3.svg"
              />
              <img
                className="absolute w-[337px] h-[402px] 
                min-[1900px]:w-[515px] min-[1900px]:h-[600px]
                  min-[1300px]:w-[550px] min-[1300px]:h-[550px]
                  max-[500px]:w-[278px] max-[500px]:h-[327px]
                "
                style={{ zIndex: 1 }}
                src="./border2.svg"
              />
              <img
                className="absolute w-[294px] h-[352px] 
                min-[1900px]:w-[472px] min-[1900px]:h-[550px]
                  min-[1300px]:w-[429px] min-[1300px]:h-[500px]
                  max-[500px]:w-[251px] max-[500px]:h-[301px]
                "
                style={{ zIndex: 1 }}
                src="./border1.svg"
              />
              <video
                autoPlay
                playsInline
                loop
                muted
                style={{ zIndex: 0, position: "absolute", opacity: 1 }}
                className="w-[252px] h-[302px] 
                min-[1900px]:w-[429px] min-[1900px]:h-[500px]
                  min-[1300px]:w-[386px] min-[1300px]:h-[450px]
                  max-[500px]:w-[227px] max-[500px]:h-[277px]
                "
              >
                <source src="/c2.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        {/* <div className="min-[450px]:hidden">
          <video
            autoPlay
            playsInline
            loop
            muted
            style={{
              zIndex: 0,
              position: "relative",
              opacity: 1,
              clipPath: "ellipse(48% 50% at 50% 50%)",
              maxWidth: "265px",
            }}
          >
            <source src="/c2.mp4" type="video/mp4"></source>
          </video>
        </div> */}



        <div className="flex flex-col 
          min-[1900px]:flex-1 min-[1900px]:max-w-[42%] 
          min-[1300px]:pl-[60px]
          min-[500px]:pl-[50px]
          max-[1000px]:order-1 order-2
          max-[500px]:px-[15px]
          min-[500px]:max-w-[480px]
          "
          data-aos="fade-left"
          data-aos-duration="2000" data-aos-once="true"
        >
          <div
            className="font-semibold pb-10 fontCusom-bold 
              min-[1900px]:text-[48px] min-[1900px]:leading-[48px]
              min-[1300px]:text-[44px] min-[1300px]:leading-[48px]
              min-[500px]:text-[36px]
              min-[500px]:leading-[48px]
              max-[500px]:pb-4
              max-[500px]:text-center
              text-[32px]
            "
          >
            How to supply rUSD to earn interest
          </div>
          <div className="flex flex-col min-[1900px]:gap-3 min-[1300px]:gap-2">
            {ListStepSupply.map((el, idx) => {
              const isFinalStep = idx == ListStepSupply.length - 1;
              return (
                <StepComponent
                  content={el}
                  num={idx + 1}
                  isFinalStep={isFinalStep}
                  key={idx}
                ></StepComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
