export default function DistincCard({ imgSrc, header, content }) {
  return (
    <div
      className="w-auto
        min-[1900px]:w-[392px] min-[1900px]:py-[40px]
        min-[1300px]:w-[365px] min-[1300px]:py-[25px]
        max-[500px]:w-[213px] max-[500px]:rounded-[30px] max-[500px]:gap-[0px]
        rounded-[64px]
        min-[500px]:w-[250px] md:w-[300px]
        gap-[10px]
      "
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "30px 40px",
        paddingTop: "35px",
        margin: "0px 5px",
        boxShadow: "inset 3px 3px 40px rgba(215, 216, 231, 0.6)",
      }}
    >
      <div>
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{
            clipPath:
              "polygon(23% 8%, 77% 8%, 94% 20%, 95% 80%, 80% 94%, 20% 94%, 6% 80%, 5% 26%)",
          }}
          className="
            min-[1900px]:p-[65px] min-[1900px]:pt-[40px] min-[1900px]:pb-[40px]
            min-[1300px]:p-20 min-[1300px]:pt-[30px] min-[1300px]:pb-[30px]
            p-16 pt-[20px] pb-[20px]
            max-[500px]:p-10
            max-[500px]:pt-0
            max-[500px]:pb-5
          "
        >
          <source src={imgSrc} type="video/mp4"></source>
        </video>
      </div>
      <div className="
        min-[1900px]:px-10 min-[1900px]:pb-8 
        min-[1300px]:px-14 min-[1300px]:pb-6
        min-[500px]:px-6 min-[500px]:pb-10
        ">
        <p
          style={{
            fontWeight: "600",
            textAlign: "center",
          }}
          className="fontCusom-bold pb-2 
          min-[1900px]:text-[24px] 
          min-[1300px]:text-[22px]
          text-[20px]
          max-[500px]:text-[18px]
          max-[500px]:px-[15px]"
        >
          {header}
        </p>
        <p
          style={{ textAlign: "center" }}
          className="fontCusom-Regular 
          min-[1900px]:text-[16px]
          min-[1300px]:text-[14px]
          text-[14px]
          max-[500px]:text-[14px] max-[500px]:p-[20px] max-[500px]:pt-[0px]
          "
        >
          {content}
        </p>
      </div>
    </div>
  );
}
