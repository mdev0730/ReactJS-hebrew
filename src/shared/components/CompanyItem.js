import React, { Component } from 'react';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const CompanyItem = ({ item }) => {
    return (
        <DirectionProvider direction={DIRECTIONS.RTL}>
        <div className="search-item" id="searchitem">
            <div>
                <div className="company-info">
                    <div className="company-name">{item.name}</div>
                    <div className="time">12:35</div>
                </div>
                <div style={{ display: 'flex', marginTop: '8px' }}>
                    <div className="product-name">שם פרוייקט:{item.productName}</div>
                </div>
                <div style={{ display: 'flex', marginTop: '4px' }}>
                    <div className="delivery">תאריך אספקה : 21/02/18</div>
                </div>
            </div>
        </div>
        </DirectionProvider>
    );
}
export default CompanyItem;