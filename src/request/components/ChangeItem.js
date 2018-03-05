import React, { Component } from 'react';
import { Modal, Button, Carousel } from 'antd';
import { connect } from 'react-redux';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';


class ChangeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }
    render() {
        const { item } = this.state;
        const { backEvent, handleOk } = this.props;
        return (
            <div className="edit-sell-item">
                <div style={{height:'30px'}}>
                <img src={require("../../shared/img/back.png")} style={{ marginRight: '20px', marginTop: '10px', marginBottom: '20px', float: 'right' }} onClick={() => backEvent()} />
                </div>
                <div>
                    <Carousel autoplay>
                        <div className="image-item">
                            <img className="image" src={require('../../shared/img/Externel.png')} />
                        </div>
                        <div className="image-item">
                            <img className="image" src={require('../../shared/img/Externel.png')} />
                        </div>
                        <div className="image-item">
                            <img className="image" src={require('../../shared/img/Externel.png')} />
                        </div>
                        <div className="image-item">
                            <img className="image" src={require('../../shared/img/Externel.png')} />
                        </div>
                    </Carousel>
                </div>
                <DirectionProvider direction={DIRECTIONS.RTL}>
                    <div style={{ marginTop: '10px' }}>
                        <div className="item-name">
                            <div className="name">{item.itemname}</div>
                            <div className="group">{item.companyname}</div>
                            <div className="serial">מק”ט:{item.serial}</div>
                            <div className="color">
                                <div style={{ width: '80px' }}>צבע:{this.renderColor}</div>
                                <div className="color-item"></div>
                                <div className="color-item1"></div>
                                <div className="color-item2"></div>
                            </div>
                            <div className="attribute">
                                <div style={{ width: '80px' }}>תכונות:</div>
                                <div className="attribute-item">מבריק</div>
                                <div className="attribute-item-selected">משי</div>
                                <div className="attribute-item">מט</div>
                            </div>
                            <div className="size">
                                <div style={{ width: '80px' }}>גודל:</div>
                                <div className="attribute-item">קטן</div>
                                <div className="attribute-item-selected">בינוני</div>
                                <div className="attribute-item">גדול</div>
                            </div>
                            <div className="amount">
                                <div style={{ width: '80px' }}>כמות:</div>
                                <div className="amount-item">
                                    <div className="plus">+</div>
                                    <div className="val">10</div>
                                    <div className="minus">-</div>
                                </div>
                            </div>
                            <Button onClick={() => handleOk()}>הוסף</Button>
                        </div>
                    </div>
                </DirectionProvider>
            </div>
        );
    }
}

export default ChangeItem;