import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-button";
import RandomColor from "./components/random-color";
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
        <TreeView menus={sideMenu}/>
      </div>
    </>
  );
}

export default App;
