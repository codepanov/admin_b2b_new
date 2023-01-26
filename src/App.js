import './App.css';

import logoImage from './images/logo_CH.svg';
import MainContent from './components/MainContent';

function App() {
    return (
        <div className="ch-a-container">
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
            </div>
            <div className="ch-content-right">
                <MainContent />
            </div>
        </div>
    );
}

export default App;
