import React, { Component } from 'react';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const CompanyItemOrder = ({ item }) => {
    return (
        <DirectionProvider direction={DIRECTIONS.RTL}>
        <div className="search-item" id="searchitem">
            <div>
                <div className="company-info">
                    <div className="company-name">{item.name}</div>
                    <div className="time">12:35</div>
                </div>
                <div style={{display:'flex', marginTop:'8px'}}>
                    <div className="product-name">שם פרוייקט:  {item.productName}</div>
                    {item.paid ? 
                        <div className="view-paid">שולם</div>
                        :
                        <div className="view-nopaid">לא שולם</div>
                    }
                </div>
                <div style={{display:'flex', marginTop:'4px'}}>
                    <div className="delivery">תאריך אספקה : 21/02/18</div>
                    {item.supplied ? 
                        <div className="view-supplied">סופק</div>
                        :
                        <div className="view-nosupplied">לא סופק</div>
                    }
                </div>
            </div>
        </div>
        </DirectionProvider>
    );
}
export default CompanyItemOrder;