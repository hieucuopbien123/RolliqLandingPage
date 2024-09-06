export default function MultipleCircleComponent({ children }) {
  return (
    <div>
      <div
        style={{
          borderRadius: "50%",
          border: "1px solid rgba(215, 216, 231, 0.6)",
          zIndex: 1,
          position: "relative",
          width: "fit-content",
        }}
        className="min-[1900px]:p-[26px]"
      >
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid rgba(215, 216, 231, 0.6)",
            zIndex: 1,
            position: "relative",
            width: "fit-content",
          }}
          className="min-[1900px]:p-[26px]"
        >
          <div
            style={{
              borderRadius: "50%",
              border: "1px solid rgba(215, 216, 231, 0.6)",
              padding: "19px",
              zIndex: 1,
              position: "relative",
              width: "fit-content",
            }}
            className="min-[1900px]:p-[26px]"
          >
            <div
              style={{
                borderRadius: "50%",
                border: "1px solid rgba(215, 216, 231, 0.6)",
                padding: "13px",
                zIndex: 1,
                position: "relative",
                width: "fit-content",
              }}
              className="min-[1900px]:p-[26px]"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
