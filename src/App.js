import './App.css';

import logoImage from './images/logo_CH.svg';
import MainContent from './components/MainContent';
import Menu from './components/Menu';

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
            <div className="ch-search">
                Search
            </div>
            <div className="ch-menu-wrapp">
                <Menu />
            </div>
                
            </div>

            {/* Main Content */}
            <div className="ch-content-right">
                <MainContent />
            </div>
        </div>
    );
}

export default App;
