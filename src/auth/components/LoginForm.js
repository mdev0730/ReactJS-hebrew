import React, { Component } from 'react';
import { Form, Button, Alert, Checkbox } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleForgotpassword() {
    // alert("a");
    // window.location.href = "Signup";
    // <Switch>
    //   <Route path='/' component={SignupScreen} />
    // </Switch>
  }
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <Form layout="vertical" className="login-form" onSubmit={handleSubmit}>

          {error && <FormItem><Alert type="error" message={error} closable /></FormItem>}

          <div className="login-form-title" align="center" style={{ marginTop: 20, marginBottom: 40 }}>כניסה למערכת</div>
          <Field
            name="email"
            label="שם משתמש "
            component={renderInput}
            placeholder=""
            validate={required}
          />

          <Field
            name="password"
            label="סיסמא "
            component={renderInput}
            placeholder=""
            type="password"
            validate={[required, password]}
          />

          <Checkbox className="remember-checkbox">זכור אותי</Checkbox>
          <FormItem>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <Button type="primary" loading={submitting} htmlType="submit" className="login-form-button">
                כניסה
              </Button>
              <Button type="primary" className="forgot-form-button">
                שכחתי סיסמא
                {/* <Link to="../Signup">forgot password</Link>                   */}
              </Button>
            </div>
          </FormItem>
        </Form>
      </DirectionProvider>
    )
  }
}

export default reduxForm({ form: 'LoginForm' })(LoginForm);
