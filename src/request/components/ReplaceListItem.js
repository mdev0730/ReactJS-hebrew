import React, { Component } from 'react';
import CompanyItem from '../../shared/components/CompanyItem';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

class ReplaceListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectListItem: false
        };
    }
    changeItem = () => {
        this.setState({
            selectListItem: true,
        });
        this.props.handleCheck(1);
    }
    render() {
        const { item, changeEvent } = this.props;
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div className="replace-list-item" id="contentitem" onClick={() => changeEvent(item.id)}>
                    <div className="image-item">
                        <img className="image" src={require('../../shared/img/Externel.png')} />
                    </div>
                    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                        <div className="item-name">
                            <div className="name">{item.itemname}</div>
                            <div className="group">{item.companyname}</div>
                        </div>
                        <div className="item-size">
                            <div className="size">צבע:{item.size}</div>
                            <div className="color" style={{ display: 'flex', alignItems: 'center' }}>גודל:<div style={{ width: '12px', height: '12px', marginLeft: '20px', backgroundColor: item.color, border: '1px' }} /> </div>
                            <div className="serial">מק”ט: {item.serial}</div>
                        </div>
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <img src={require('../../shared/img/back.png')} />
                    </div>
                </div>
            </DirectionProvider>
        )
    }
}
export default ReplaceListItem;