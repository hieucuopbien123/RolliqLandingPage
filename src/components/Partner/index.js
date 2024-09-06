import Link from "next/link";
const Product = [
  {
    name: "Ecosystem",
    link: "",
  },
  {
    name: "Analytic",
    link: "",
  },
  {
    name: "Support",
    link: "",
  },
  {
    name: "Documents",
    link: "",
  },
  {
    name: "FAQ",
    link: "",
  },
];
const ForDev = [
  {
    name: "Code base",
    link: " ",
  },
  {
    name: "Technical Resource",
    link: " ",
  },
  {
    name: "SDK",
    link: " ",
  },
  {
    name: "Bug Bounty",
    link: " ",
  },
];
const Company = [
  {
    name: "Contact us",
    link: " ",
  },
  {
    name: "Media Kit",
    link: " ",
  },
  {
    name: "Blog",
    link: " ",
  },
];
const ListFooter = [Product, ForDev, Company];
export default function Partner() {
  return (
    <div
      style={{
        backgroundColor: "#171717",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="pt-16 px-6 flex flex-col md:flex-row flex-wrap gap-2 
        min-[1900px]:px-40 min-[1900px]:pt-32 min-[1900px]:pb-28
        min-[1300px]:px-32 min-[1300px]:pt-28 min-[1300px]:pb-24
        min-[500px]:px-28 min-[1900px]:pt-24 min-[1900px]:pb-20"
        style={{ color: "#FFFFFF" }}
      >
        <div
          className="text-center fontCusom-bold 
          min-[1900px]:pl-[90px] min-[1900px]:text-[48px]
          min-[1300px]:pl-[50px] min-[1300px]:text-[44px]
          min-[500px]:pl-[40px] min-[500px]:text-[32px]
          max-[500px]:text-[32px] max-[500px]:text-left"
          style={{ flex: 1 }}
        >
          Partnership
        </div>
        <div
          className="grid grid-cols-3 gap-3 pt-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 min-[500px]:gap-11 md:pt-0 
          min-[1900px]:gap-5 min-[1900px]:pr-[15%]
          min-[1300px]:gap-2 min-[1300px]:pr-[10%]
          min-[500px]:gap-1 md:pr-[5%] min-[500px]:pr-[0px] min-[500px]:justify-items-center
          max-[500px]:grid-cols-4
          "
          style={{ flex: 2 }}
        >
          {Array(12)
            .fill(1)
            .map((el, idx) => {
              return (
                <div className="flex flex-col items-center w-fit" key={idx}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                    }}
                  ></div>
                  <div className="mt-4 fontCusom-Medium 
                  min-[1900px]:text-[16px]
                  max-[1300px]:text-[14px]
                  min-[500px]:text-[14px]
                  ">
                    Partner
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className="pt-20"
        style={{ borderBottom: "1px solid #525252" }}
      ></div>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <div
          className="bg-rlinear"
          style={{
            position: "absolute",
            top: "110px",
            left: "-115px",
            right: 0,
            bottom: 0,
            zIndex: 1,
            filter: "blur(134px)",
          }}
        ></div>
        <div
          className="pt-20 pb-28 px-5 md:px-20 flex flex-col md:flex-row 
          min-[1900px]:pt-32 min-[1900px]:pb-28 min-[1900px]:px-48
          min-[1300px]:px-32 min-[1300px]:pt-28 min-[1300px]:pb-24
          min-[500px]:px-28 min-[500px]:pt-24 min-[500px]:pb-20
          "
          style={{
            color: "#FFFFFF",
          }}
        >

          <div style={{ flex: 1, zIndex: 2 }}>
            <img
              src="./logowhite.png"
              // style={{margin: "0 auto"}}
              className="
                min-[1900px]:pl-[100px]
                min-[1300px]:pl-[80px]
                min-[500px]:pl-[40px]
                max-[500px]:pb-[20px]
                min-[500px]:m-auto
                min-[500px]:m-0
                pb-[20px]
                "
            />
          </div>

          <div className="min-[1900px]:px-16 min-[1300px]:px-[60px] lg:px-[25px] md:px-[40px]"></div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 
            min-[1900px]:gap-32 min-[1300px]:gap-28 min-[1900px]:pr-[15%] min-[1300px]:pr-[12%] 
            gap-16
            max-[500px]:flex max-[500px]:flex-wrap max-[500px]:gap-10
            "
            style={{ flex: 2, zIndex: 2 }}
          >
            <div style={{ zIndex: 2 }} className="max-[500px]:flex-1 max-[500px]:max-w-[170px]">
              <div className=" fontCusom-bold 
              min-[1900px]:pb-[10px] min-[1900px]:text-[24px]
              min-[1300px]:pb-[8px] min-[1300px]:text-[20px]
              min-[500px]:pb-[6px] min-[500px]:text-[20px]
              ">
                Product
              </div>
              <div
                className="pt-2 min-[1900px]:pt-3 min-[1300px]:pt-2 min-[500px]:pt-1"
                style={{ borderBottom: "1px solid #525252" }}
              ></div>
              <div className="pt-3"></div>
              {Product.map((el, idx) => {
                return (
                  <div
                    key={idx}
                    style={{ color: "#D1D5DB", zIndex: 2 }}
                    className="
                    min-[1900px]:pb-[10px] min-[1900px]:text-[16px]
                    min-[1300px]:pb-[8px] min-[1300px]:text-[14px] fontCusom-Medium
                    min-[500px]:pb-[6px] min-[500px]:text-[14px]
                    "
                  >
                    <Link href={"/"}>{el.name}</Link>
                  </div>
                );
              })}
              <div className="pt-4 md:pt-0"></div>
            </div>
            <div className="max-[500px]:flex-1 max-[500px]:max-w-[170px]">
              <div className=" whitespace-nowrap fontCusom-bold 
              min-[1900px]:pb-[10px] min-[1900px]:text-[24px]
              min-[1300px]:pb-[8px] min-[1300px]:text-[22px]
              min-[500px]:pb-[6px] min-[500px]:text-[20px]">
                For Developer
              </div>
              <div
                className="pt-2 min-[1900px]:pt-3 min-[1300px]:pt-2"
                style={{ borderBottom: "1px solid #525252" }}
              ></div>
              <div className="pt-3"></div>
              {ForDev.map((el, idx) => {
                return (
                  <div
                    key={idx}
                    style={{ color: "#D1D5DB" }}
                    className="whitespace-nowrap 
                    min-[1900px]:pb-[10px] min-[1900px]:text-[16px] fontCusom-Medium
                    min-[1300px]:pb-[8px] min-[1300px]:text-[14px]
                    min-[500px]:pb-[6px] min-[500px]:text-[14px]"
                  >
                    <Link href={"/"}>{el.name}</Link>
                  </div>
                );
              })}
              <div className="pt-4 md:pt-0"></div>
            </div>
            <div className="max-[500px]:flex-1 max-[500px]:max-w-[170px]">
              <div className="fontCusom-bold 
              min-[1900px]:pb-[10px] min-[1900px]:text-[24px]
              min-[1300px]:pb-[8px] min-[1300px]:text-[22px] 
              min-[500px]:pb-[6px] min-[500px]:text-[20px]">
                Company
              </div>
              <div
                className="pt-2 min-[1900px]:pt-3 min-[1300px]:pt-2"
                style={{ borderBottom: "1px solid #525252" }}
              ></div>
              <div className="pt-3"></div>
              {Company.map((el, idx) => {
                return (
                  <div
                    key={idx}
                    style={{ color: "#D1D5DB" }}
                    className="whitespace-nowrap 
                    min-[1900px]:pb-[10px]
                    min-[1900px]:text-[16px] fontCusom-Medium
                    min-[1300px]:pb-[8px]
                    min-[1300px]:text-[14px]
                    min-[500px]:pb-[6px] min-[500px]:text-[14px]
                    "
                  >
                    <Link href={"/"}>{el.name}</Link>
                  </div>
                );
              })}
              <div className="h-4 md:h-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
