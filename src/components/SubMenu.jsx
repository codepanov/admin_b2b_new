import * as React from 'react';
import eventBus from '../eventBus';

const SubMenu = ({submenu, closeSubmenu, lineName, families}) => {


    const submenu_wrapper = React.useRef(null);
    // const scroll_handler_wrapper = React.useRef(null);

    function animate() {
        submenu_wrapper.current.classList.toggle("animate");
    }

    // animate opening and closing of submenu
    React.useEffect(() => {
        submenu && animate(submenu_wrapper);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submenu]);

    // setting submenu top value
    React.useEffect(() => {
        eventBus.on('menuTopValue', (topValue) => {
            submenu_wrapper.current.style.top = `${topValue}px`;
        });
        return () => {
            eventBus.off('menuTopValue');
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
        <>
            <div
                ref={submenu_wrapper}
                style={{
                    border: '2px solid red',
                    background: "black",
                    zIndex: 2,
                    width: "300px",
                    height: '-webkit-fill-available',
                    marginLeft: '600px',
                    padding: '10px 5px',
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'auto',
                    boxSizing: 'border-box',
                    transition: "margin-left 0.25s",
                }}
            >
                <p>Hello from SubMenu</p>
            </div>
        </>
     );
}
 
export default SubMenu;