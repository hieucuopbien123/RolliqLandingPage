export default function StepComponent({ content, num, isFinalStep }) {
  return (
    <div
      className="flex gap-5
      min-[1900px]:gap-[50px]
      min-[1300px]:gap-[40px]
    "
    >
      <div
        style={{
          borderLeft: isFinalStep ? "none" : "1px dashed #B4B5D6",
          position: "relative",
          paddingLeft: "16px",
          minWidth: "70px",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            backgroundColor: "#F1F2FC",
            height: "16px",
            width: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            left: "-5px",
            top: "0px",
          }}
        >
          <div
            style={{
              height: "6px",
              width: "6px",
              borderRadius: "50%",
              backgroundColor: "#B4B5D6",
            }}
          ></div>
        </div>
        <span
          className="font-bold fontCusom-bold 
          min-[1900px]:text-[18px]
          min-[1300px]:text-[16px]
          min-[500px]:text-[14px]
        "
        >
          {" "}
          Step {num}.{" "}
        </span>
      </div>
      <div
        className="md:pr-2 fontCusom-Medium 
          min-[1900px]:text-[18px]
          min-[1300px]:text-[16px]
          min-[500px]:text-[14px]
        "
        style={{ flex: 1 }}
      >
        {content}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
