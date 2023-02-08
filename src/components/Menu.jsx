import * as React from "react";
// import eventBus from "../eventBus";

import MenuItems from "./MenuItems";

const Menu = () => {

    const menuWrapper = React.useRef(null);

    // React.useEffect(() => {
    //     const topValue = menuWrapper.current.getBoundingClientRect().top;
    //     eventBus.emit('menuTopValue', topValue);

    // // eslint-disable-next-line
    // }, []);

    return (
        <>
            <div className="ch-menu" ref={menuWrapper}>
                <MenuItems />
            </div>
        </>
    );
}
 
export default Menu;