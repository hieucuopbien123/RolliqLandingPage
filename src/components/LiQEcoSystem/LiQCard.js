import Link from "next/link";
export default function LiQCard({ imgSrc, title, content }) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-3 p-[20px] max-w-[550px] 
      min-[1900px]:max-w-[600px] min-[1900px]:p-8
      min-[1300px]:max-w-[560px] min-[1300px]:p-6
      max-[500px]:max-w-[213px] rounded-[64px] max-[500px]:rounded-[30px] max-[500px]:gap-[0px]
      min-[500px]:max-[639px]:max-w-[250px]
      gap-[48px]
      "
      style={{
        backgroundColor: "#F1F2FC",
        boxShadow: "inset 3px 3px 40px rgba(215, 216, 231, 0.6)",
        width: "fit-content",
      }}
    >
      <div className="flex-1 flex justify-center items-center">
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{
            clipPath:
              "polygon(23% 8%, 77% 8%, 94% 20%, 95% 80%, 80% 94%, 20% 94%, 6% 80%, 5% 26%)",
          }}
          className="w-[240px] h-[240px] 
          max-[500px]:w-[120px] max-[500px]:h-[120px] max-[500px]:m-5 max-[500px]:mt-2
          max-[640px]:w-[120px] max-[640px]:h-[120px]"
        >
          <source src={imgSrc} type="video/mp4"></source>
        </video>
      </div>
      <div
        className="flex flex-1 flex-col gap-3 
          min-[1900px]:gap-2 min-[1900px]:px-[20px] min-[1900px]:py-[20px]
          min-[1300px]:gap-1 min-[1300px]:px-[16px] min-[1300px]:py-[18px]
          min-[500px]:px-[14px] min-[500px]:py-[14px]
          max-[640px]:text-center
        "
        style={{
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="fontCusom-bold 
          min-[1900px]:text-[24px] min-[1900px]:pt-[20px]
          min-[1300px]:text-[22px] min-[1300px]:pt-[16px]
          text-[20px] min-[500px]:pt-[14px]
          max-[500px]:text-[18px]
        "
        >
          {title}
        </div>
        <div
          className="fontCusom-Medium text-[#4B5563]
          min-[1900px]:text-[16px] min-[1900px]:pb-[20px]
          min-[1300px]:text-[14px] min-[1300px]:pb-[16px]
          text-[14px] min-[500px]:pb-[12px]
          max-[500px]:text-[14px]
        "
        >
          {content}
        </div>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            className="flex justify-center items-center px-5 py-2 fontCusom-bold w-fit
            min-[1900px]:text-[18px] min-[1900px]:pb-[14px] min-[1900px]:px-[30px] min-[1900px]:pt-[14px]
            min-[1300px]:text-[14px] min-[1300px]:px-[26px] min-[1300px]:p-[10px]
            text-[14px] min-[500px]:pb-[0.5rem]
            max-[500px]:text-[14px] max-[500px]:mx-0 max-[500px]:mx-auto 
            max-[640px]:mx-auto 
            hover:opacity-80 duration-300
            "
            style={{
              backgroundColor: "#1E2185",
              color: "#FFFFFF",
              borderRadius: "100px",
            }}
          >
            {title} Now
          </div>
        </Link>
      </div>
    </div>
  );
}
