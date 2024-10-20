import Accordion from './components/accordion';
import ParentOfModal from './components/custom-modal/parent-component';
import Modal from './components/custom-modal/modal';
import TabTest from './components/custom-tabs/tab-test';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
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

      {/* <TreeView menu={menus} /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* <TabTest /> */}

      <ParentOfModal />


    </div>
  )
}

export default App;
