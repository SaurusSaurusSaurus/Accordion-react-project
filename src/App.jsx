import "./App.css";
import Accordian from "./components/accordian";
import TabTest from "./components/custom-tabs/tab-test";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-button";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scrolll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus, { sideMenu } from "./components/tree-view/data";

function App() {
  return (
    <>
      <div className="root">
        {/* Accordian component*/}
        {/* <Accordian/> */}
        {/* Ramdom Color component*/}
        {/* <RandomColor/> */}
        {/* Star Rating Component*/}
        {/* <StarRating/> */}
        {/* Image Slider Component*/}
        {/* <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        /> */}
        {/* Load More Products Component*/}
        {/* <LoadMoreData/> */}
        {/* Tree View Component*/}
        {/* <TreeView menus={sideMenu}/> */}
        {/* QR code generator Component*/}
        {/* <QRCodeGenerator/> */}
        {/* Light Dark Mode Component*/}
        {/* <LightDarkMode /> */}
        {/* Scroll Indicator Component*/}
        {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100&'} /> */}
        {/* Tabs Component*/}
        <TabTest />
      </div>
    </>
  );
}

export default App;
