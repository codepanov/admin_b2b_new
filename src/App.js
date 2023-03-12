import React from 'react';
import './App.css';

import logoImage from './images/logo_CH.svg';
import MainContent from './components/MainContent';
import Menu from './components/Menu';
import SideDetails from './components/SideDetails';
import { SideDetailsContext } from './contexts/SideDetailsContext';
import { SideDetailsAnimateContext } from './contexts/SideDetailsAnimateContext';

function App() {

    //initial context value, to avoid error when context is used before it is defined
    const [contextValue, setContextValue] = React.useState({
        id: 1,
        buyer: 'John Doe',
        address: '123 Main St',
        order_time: '2020-01-01 12:00:00',
        price: 100,
    });

    const providerValue = React.useMemo(() => ({ contextValue, setContextValue }), [contextValue, setContextValue]);

    const sideDetails_wrapper = React.useRef(null);
    
    const [isMounted, setIsMounted] = React.useState(false);

    function animateIn() {
        sideDetails_wrapper.current.classList.add("animate-sideDetails");
    }
    function animateOut() {
        sideDetails_wrapper.current.classList.remove("animate-sideDetails");
    }

    React.useEffect(() => {

        //this is to avoid the animation on the first render
        if (isMounted) {
            animateIn();
        } else {
            setIsMounted(true);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contextValue]);

    return (
        <div className="ch-a-container">

            {/* MENU / Left Side */}
            <div className="ch-side-left">
                <img
                    src={logoImage}
                    alt="logo CH"
                    style={{ 
                    width: '100%',
                    height: '90px',
                    objectFit: 'cover',
                    // zIndex: 4,
                    }}
                />
                <div className="ch-search" />
                <div className="ch-menu-wrapp scroll-handler">
                    <Menu />
                </div>
                
            </div>

            {/* MAIN CONTENT */}
            <SideDetailsAnimateContext.Provider value={animateOut}>
                <SideDetailsContext.Provider value={providerValue}>
                    <div className="ch-content-right">
                        <MainContent />
                    </div>
                    <div ref={sideDetails_wrapper} className="sd-details-wrapper">
                        <SideDetails />
                    </div>
                </SideDetailsContext.Provider>
            </SideDetailsAnimateContext.Provider>
        </div>
    );
}

export default App;
