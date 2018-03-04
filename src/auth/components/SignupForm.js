import React, { Component } from 'react';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const FormItem = Form.Item;

class SignupForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <Form layout="vertical" className="signup-form" onSubmit={handleSubmit}>

          {error && <FormItem><Alert type="error" message={error} closable /></FormItem>}
          <div style={{ display: 'flex' }}>
            <Field
              name="comp-name"
              label="שם החברה"
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

          <div style={{ display: 'flex' }}>
            <Field
              name="password"
              label="סיסמא"
              component={renderInput}
              placeholder=""
              type="password"
              validate={[required, password]}
            />
            <Field
              name="confirmpassword"
              label="אישור סיסמא"
              component={renderInput}
              placeholder=""
              type="password"
              validate={[required, password]}
            />
          </div>

          <div style={{ display: 'flex' }}>
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
          <div style={{ display: 'flex' }}>
            <Field
              name="contact"
              label="איש קשר "
              component={renderInput}
              placeholder=""
              validate={required}
            />
            <Field
              name="phone"
              label="טלפון"
              component={renderInput}
              placeholder=""
              validate={required}
            />
          </div>
          <div className="term1">
          ע”י יצירת החשבון הינך מסכים ל-
        </div>
          <div className="term1">
            <span className="fontH1" style={{ color: '#1A9FFF' }}>תנאי שימוש</span>
          </div>
          <FormItem>
            <Button type="primary" loading={submitting} htmlType="submit" className="register-button fontH1">
            הרשם
          </Button>
          </FormItem>
        </Form>
      </DirectionProvider>
    )
  }
}

export default reduxForm({ form: 'SignupForm' })(SignupForm);
