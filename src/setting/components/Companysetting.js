import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const FormItem = Form.Item;

class Companysetting extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;
    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <div className="company-setting">
          <div style={{ display: 'flex' }}>
            <div className="company-logo">
              <p> לוגו </p>
              <div className="help"> גודל תמונה מינימלי הינו 300x300 px</div>
              <img className="edit" src={require('../../shared/img/edit.png')} />
              <img className="company-img" src={require('../../shared/img/company1.png')} />
            </div>
            <div className="company-details">
              <Form layout="vertical" className="signup-form" onSubmit={handleSubmit}>
                <div style={{ display: 'flex' }}>
                  <Field
                    name="comp-name"
                    label="שם חברה"
                    component={renderInput}
                    placeholder=""
                    validate={required}
                  />
                  <Field
                    name="comp-number"
                    label="ח.פ. "
                    component={renderInput}
                    placeholder=""
                    validate={required}
                  />
                </div>

                <div style={{ display: 'flex', marginTop: '30px' }}>
                  <Field
                    name="address"
                    label="כתובת"
                    component={renderInput}
                    placeholder=""
                    validate={required}
                  />
                  <Field
                    name="email"
                    label="דוא”ל"
                    component={renderInput}
                    placeholder=""
                    validate={required}
                  />
                </div>
                <div style={{ display: 'flex', marginTop: '30px' }}>
                  <Field
                    name="contact"
                    label="איש קשר"
                    component={renderInput}
                    placeholder=""
                    validate={required}
                  />
                  <Field
                    name="phone"
                    label="טלפון "
                    component={renderInput}
                    placeholder=""
                    validate={required}
                  />
                </div>
              </Form>
            </div>
          </div>
          <div className="save-button-view is-center">
            <Button type="primary" loading={submitting} htmlType="submit" className="save-button">שמור</Button>
          </div>
        </div>
      </DirectionProvider>
    );
  }
}


export default reduxForm({ form: 'Companysetting' })(Companysetting);