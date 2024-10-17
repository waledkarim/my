import MenuList from "./menu-list";
import './styles.css';


function TreeView({menu = []}){


    return(
        <div className="tree-view-container">
            <MenuList list={menu} />
        </div>
    )


}

export default TreeView;