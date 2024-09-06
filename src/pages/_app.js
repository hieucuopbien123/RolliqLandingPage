import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <>
        <div style={{minH: "calc(100vh)", margin: "0 auto"}} >
          <Component {...pageProps} />
        </div>
      </>
    </div>
  );
}
