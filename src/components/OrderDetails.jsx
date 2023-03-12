import React from 'react';
import { SideDetailsContext } from '../contexts/SideDetailsContext';

const OrderDetails = React.memo(() => {
    const { contextValue } = React.useContext(SideDetailsContext);
    const {
        id,
        buyer,
        address,
        order_time,
        price
    } = contextValue;

    return (
        <>
            <div className="sd-details sd-height sd-common">
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Porudzbina br:</div>
                    <div className="sd-details-row-right">#{id}</div>
                </div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Kupac:</div>
                    <div className="sd-details-row-right">{buyer}</div>
                </div>
                <div className="sd-separator"></div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Datum i vreme porudzbine</div>
                    <div className="sd-details-row-right">
                        {new Date(order_time).toLocaleDateString('sr')}
                    </div>
                </div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Adresa za isporuku:</div>
                    <div className="sd-details-row-right">{address}</div>
                </div>
                <div className="sd-details-row-wrapper">
                    <div className="sd-details-row-left">Ukupna vrednost porudzbine:</div>
                    <div className="sd-details-row-right">
                        {price.toLocaleString('sr', { style: 'currency', currency: 'RSD', minimumFractionDigits: 2 })}
                    </div>
                </div>
            </div>
        </>
    )
})

export default OrderDetails;
