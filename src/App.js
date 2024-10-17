import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div>
      {/* <Accordion /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStarts={10} /> */}

      {/* <ImageSlider page={"1"} limit={"10"}/> */}

      {/* <LoadMoreData /> */}

      <TreeView menu={menus} />


    </div>
  )
}

export default App;
