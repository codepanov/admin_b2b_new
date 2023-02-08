import * as React from "react";

import Table from './Table';

const MainContent = () => {

    const el1 = React.useRef(null);
    const el2 = React.useRef(null);

    const elementsOverlap = (el1, el2) => {
        const domRect1 = el1.getBoundingClientRect();
        const domRect2 = el2.getBoundingClientRect();

        return !(
            domRect1.top > domRect2.bottom ||
            domRect1.right < domRect2.left ||
            domRect1.bottom < domRect2.top ||
            domRect1.left > domRect2.right
        );
    }
    const handleOverlap = () => {
        if(elementsOverlap(el1.current, el2.current)) {
            el1.current.style.visibility = 'hidden'
        } else {
            el1.current.style.visibility = 'visible'
        }
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleOverlap);
    
        // cleanup component to prevent memory leaks
        return () => {
            window.removeEventListener('resize', handleOverlap);
        };

    // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="ch-header" ref={el1}>
                <p>HEADER CONTENT</p>
            </div>
            <div className="ch-table-wrapper" ref={el2}>
                <Table />
            </div>
        </>
    );
}
 
export default MainContent;