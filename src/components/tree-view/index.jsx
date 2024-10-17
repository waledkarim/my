import MenuList from "./menu-list";


function TreeView({menu = []}){


    return(
        <div className="tree-view-container">
            <MenuList list={menu} />
        </div>
    )


}

export default TreeView;