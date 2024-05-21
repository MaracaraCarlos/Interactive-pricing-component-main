import Footer from "./Footer";
import MainBody from "./MainBody";
import "../styles/MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      <MainBody />
      <hr />
      <Footer />
    </div>
  )
}

export default MainContainer;