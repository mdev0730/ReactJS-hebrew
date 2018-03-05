import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const FormItem = Form.Item;

class CompanyPassword extends Component {
    render() {
        const { handleSubmit, error, submitting } = this.props;
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div className="company-password">
                    <Form layout="vertical" className="password-form" onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="current_password"
                                label="סיסמא נוכחית"
                                component={renderInput}
                                placeholder=""
                                type="password"
                                validate={[required, password]}
                            />
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <Field
                                name="new_password"
                                label="סיסמא חדשה"
                                component={renderInput}
                                placeholder=""
                                type="password"
                                validate={[required, password]}
                            />
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <Field
                                name="confirm_password"
                                label="אישור סיסמא חדשה"
                                component={renderInput}
                                placeholder=""
                                type="password"
                                validate={[required, password]}
                            />
                        </div>
                        <FormItem>
                            <Button type="primary" loading={submitting} htmlType="submit" className="save-button">
                            עדכן סיסמא
                        </Button>
                        </FormItem>
                    </Form>
                </div>
            </DirectionProvider>
        );
    }
}


export default reduxForm({ form: 'CompanyPassword' })(CompanyPassword);