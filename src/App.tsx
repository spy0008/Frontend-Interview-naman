import { useEffect, useState } from "react";
import Content from "./components/blog/Content";
import Footer from "./components/common/Footer";
import FullScreenLoader from "./components/common/FullScreenLoader";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";

const App = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (pageLoading) {
    return <FullScreenLoader />;
  }
  
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
