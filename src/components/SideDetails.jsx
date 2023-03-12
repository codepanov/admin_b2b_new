import React from 'react';
import Table from './DetailsTable';
import Order from './OrderDetails';

import { SideDetailsAnimateContext } from '../contexts/SideDetailsAnimateContext';

const SideDetails = React.memo(() => {

    const animateSideDetails = React.useContext(SideDetailsAnimateContext);

    return ( 
        <>
            <div className="sd-header sd-common">
                <h2>Detalji porudzbine</h2>
                <button onClick={animateSideDetails}>Izlazak iz detalja</button>
            </div>
                <Order />
            <div className="sd-products sd-height sd-common">
                <h3>Proizvodi</h3>
                <Table />
            </div>
        </>
     );
});
 
export default SideDetails;