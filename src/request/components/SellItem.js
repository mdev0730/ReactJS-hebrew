import React, { Component } from 'react';
import { Modal, Button, Carousel } from 'antd';
import SearchInput, { createFilter } from 'react-search-input'
import CompanyItem from '../../shared/components/CompanyItem';
import ReplaceListItem from '../components/ReplaceListItem';
import ChangeItem from './ChangeItem';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
var NumberFormat = require('react-number-format');

class SellItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      visible: false,
      confirmLoading: false,
      selectedItemIndex: 0,
      item: props.item
    };
    this.onSelect = this.onSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item !== this.props.item) {
      this.setState({ item: nextProps.item });
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
      selectedItemIndex: 0
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  handleCheck = (index) => {
    this.setState({ selectedItemIndex: index });
  }
  backClick = () => {
    this.setState({ selectedItemIndex: 0 });
  }

  onSelect() {
    if (this.state.selected)
      this.setState({ selected: false });
    else
      this.setState({ selected: true });
  }

  render() {
    const { visible, confirmLoading, selectedItemIndex } = this.state;
    const { data } = this.props;
    const { item } = this.state;
    const totalval = item.price * item.count;
    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <div className="content-item" id="contentitem">
          <div className="image-item">
            <img className="image" src={require('../../shared/img/Externel.png')} />
            <div className="count">{item.count}</div>
          </div>
          <div className="item-name">
            <div className="name">{item.itemname}</div>
            <div className="group">{item.companyname}</div>
          </div>
          <div className="item-size">
            <div className="size"><b>גודל:</b> {item.size}</div>
            <div className="color" style={{ display: 'flex', alignItems: 'center' }}><b>צבע:</b><div style={{ width: '20px', height: '20px', marginLeft: '20px', backgroundColor: item.color, border: '1px' }} /> </div>
            <div className="serial">מק”ט: {item.serial}</div>
          </div>
          <Modal title=""
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            className="modal-replace"
          >
            {
              selectedItemIndex == 0 ?
                <div><div className="popup-request-search">
                  <SearchInput className="popup-search-input" onChange={this.searchUpdated} />
                </div>
                  <div className="replace-list">
                    {
                      data.map((sellitems, index) => {
                        return (
                          <ReplaceListItem item={sellitems} changeEvent={this.handleCheck} key={index} />
                        )
                      })
                    }
                  </div>
                </div>
                :
                <div>
                  <ChangeItem item={item} backEvent={this.backClick}/>
                </div>
              // <div>{ data[selectedItemIndex].itemname }</div>

            }

          </Modal>
          <div onClick={() => this.onSelect()} style={{ display: 'flex' }}>
            <div className="out-stock">חסר במלאי</div>
            {
              !this.state.selected ?
                <div className="circle" ></div>
                :
                <div className="circle1" ><img src={require('../../shared/img/checked.png')} /></div>
            }
          </div>
          {
            !this.state.selected ? <div className="price-total">
              <div className="price">
                <div>מחיר ליחידה:</div>
                <NumberFormat className="price-val" value={item.price}
                  onChange={(e, value) => {
                    const formattedValue = e.target.value;
                    const item = this.state.item;
                    item.price = formattedValue;
                    this.setState({ item });
                    this.props.updatedItem(item);
                  }} />
              </div>
              <div className="divider" />
              <div className="price">
                <div>סה”כ:</div>
                <div className="total-val">{totalval} ש”ח</div>
              </div>
            </div> :
              <div className="price-total1">
                <div className="item-replace" onClick={() => this.showModal()}>מוצר חלופי</div>
              </div>
          }
        </div>
      </DirectionProvider>
    )
  }
}
export default SellItem;