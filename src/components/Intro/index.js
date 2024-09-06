import Link from "next/link";
export default function Intro() {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 0,
        }}
        className="max-[500px]:hidden"
      >
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{ objectFit: "cover" }}
          className="backgroundTopResponsive w-[100%] h-[100%]"
        >
          <source src="./banner.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: "-10px",
          zIndex: 0,
        }}
        className="min-[500px]:hidden"
      >
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{ objectFit: "contain", transform: "scale(3)" }}
        >
          <source src="./banner.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div
        className="backgroundBig"
      >
        <div className="flex justify-between items-center flex-wrap gap-3 pt-6 px-2
        px-[30px]
        sm:px-[40px] md:px-[50px] lg:px-[60px]
        min-[1300px]:px-32 min-[1900px]:px-90
        max-[500px]:px-[20px]
        ">
          <img
            src={"/Logo.svg"}
            className="
            w-[130px] 
            sm:w-[140px]
            md:w-[150px] lg:w-[160px]
            min-[1300px]:h-[40px] min-[1300px]:w-[210px] 
            min-[1900px]:h-[48px] min-[1900px]:w-[230px]
            max-[500px]:w-[120px]
            "
          ></img>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <div
              className="flex justify-center items-center py-2 px-4"
              style={{
                backgroundColor: "#1E2185",
                borderRadius: "100px",
              }}
            >
              <p
                style={{
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
                className="fontCusom-bold
                text-[14px]
                min-[1900px]:text-[20px] min-[1900px]:px-[10px] min-[1900px]:py-[8px] 
                min-[1300px]:text-[16px] min-[1300px]:px-[5px] min-[1300px]:py-[6px]
                max-[500px]:text-[14px] hover:opacity-80 duration-300
                "
              >
                Go to Ecosystem
              </p>
            </div>
          </Link>
        </div>
        <div className="max-[500px]:py-[40%]"></div>
        <div className="flex justify-center mt-5 min-[500px]:mt-10 fontCusom-Regular min-[500px]:tracking-[1px] text-center fontCusom-Regular
        min-[500px]:pt-[14]
        text-[42px] sm:text-[44px] md:text-[46px] lg:text-[48px]
        min-[1900px]:pt-20 min-[1900px]:text-[72px]  
        min-[1300px]:pt-16 min-[1300px]:text-[64px]
        pt-[0px]
        max-[500px]:text-[40px] max-[500px]:leading-[50px] max-[500px]:px-[20px]">
          DeFi Lending Platform on zkSync
        </div>
        <div className="flex justify-center text-base fontCusom-bold text-center  
        min-[1900px]:text-[24px] min-[1900px]:pt-6 min-[1900px]:pb-6 
        min-[1300px]:text-[22px] min-[1300px]:pt-4 min-[1300px]:pb-4
        text-[20px] pt-3 pb-3
        max-[500px]:pt-[30px] max-[500px]:text-[18px] max-[500px]:px-[30px] max-[500px]:pb-[20px]">
          Maximize your gains by leveraging interest-free loans and the "Looping Strategy"
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
          className="min-[1300px]:gap-[16px] min-[1900px]:gap-[30px] max-[500px]:gap-[20px] max-[500px]:pb-[120px]
          gap-[14px]"
        >
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundColor: "#1E2185",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="px-[16px] py-[8px]"
            >
              <p
                className="fontCusom-bold
                text-[14px]
                min-[1900px]:text-[20px] min-[1900px]:px-4 min-[1900px]:p-2 hover:opacity-80 duration-300
                min-[1300px]:text-[16px] min-[1300px]:p-1
                max-[500px]:text-[14px]"
                style={{
                  color: "#FFFFFF",
                }}
              >
                Borrow rUSD
              </p>
            </div>
          </Link>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #1E2185",
              }}
              className="px-[16px] py-[8px] fontCusom-bold"
            >
              <p
                className="
                text-[14px]
                min-[1900px]:text-[20px] min-[1900px]:px-4 min-[1900px]:p-2 hover:opacity-70 duration-300
                min-[1300px]:text-[16px] min-[1300px]:p-1
                max-[500px]:text-[14px]"
                style={{
                  color: "#1E2185",
                }}
              >
                Learn How to
              </p>
            </div>
          </Link>
        </div>
        <div
          className="
          mt-[50px]
          min-[500px]:pt-4 min-[500px]:pb-40
          min-[1900px]:pt-10 min-[1900px]:pb-50 
          min-[1300px]:pt-8 min-[1300px]:pb-60
          max-[500px]:mt-[0px]"
        >
          <div
            style={{
              backgroundImage:
                "radial-gradient(68.64% 68.64% at 28.06% 23.72%, #9497E8 0%, #2C319D 48.09%, #131650 100%)",
              boxShadow: "inset -20px -10px 52px rgba(144, 146, 231, 0.6)",
              borderRadius: "50%",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="ball w-[170px] lg:w-[190px] h-[170px] lg:h-[190px] 
            min-[1900px]:w-[296px] min-[1900px]:h-[296px] min-[1900px]:gap-4
            min-[1300px]:w-[260px] min-[1300px]:h-[260px] min-[1300px]:gap-3
            flex
            max-[500px]:hidden
            "
          >
            <p
              style={{ color: "#D1D5DB" }}
              className="text-md md:text-lg fontCusom-Medium
              min-[1900px]:text-[20px]
              min-[1300px]:text-[18px] "
            >
              Total Value Lock
            </p>
            <p
              style={{ color: "#FFFFFF" }}
              className="fontCusom-bold 
              min-[1900px]:text-[36px]
              min-[1300px]:text-[30px]"
            >
              $ 7,223,334.98
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
