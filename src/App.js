import './App.css';

import logoImage from './images/logo_CH.svg';
import MainContent from './components/MainContent';
import Menu from './components/Menu';
import SideDetails from './components/SideDetails';

function App() {
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
            <div className="ch-content-right">
                <MainContent />
            </div>
            <div className="sd-details-wrapper">
                <SideDetails />
            </div>
        </div>
    );
}

export default App;
