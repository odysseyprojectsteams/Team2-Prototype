import React, { useState } from 'react';
import { Card, Form, Input, Button, Spin, Alert, Typography, Radio, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, LockOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import { Navbar, Footer } from '../components'; // Make sure the import path is correct

const { Title, Text } = Typography;

const Register = () => {
    const { loading, error, registerUser } = useSignup();
    const [userType, setUserType] = useState('user');

    const handleRegister = (values) => {
        registerUser({ ...values, userType });
    };

    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Card className='form-container' bordered={false} style={{ maxWidth: 450, margin: 'auto', padding: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Title level={2} className="title" style={{ textAlign: 'center' }}>Create Your Account</Title>
                    <Text type="secondary" style={{ textAlign: 'center', display: 'block', marginBottom: 20 }}>
                        Get started with a free account
                    </Text>

                    <Radio.Group onChange={(e) => setUserType(e.target.value)} value={userType} style={{ marginBottom: 16, justifyContent: 'center', display: 'flex' }}>
                        <Radio.Button value="user">User</Radio.Button>
                        <Radio.Button value="partner">Partner</Radio.Button>
                    </Radio.Group>

                    <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
                        {userType === 'user' && (
                            <>
                                <Form.Item
                                    label="Full Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please enter your full name' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please enter your full name" />
                                </Form.Item>
                                <Form.Item
                                    label="Email Address"
                                    name="email"
                                    rules={[{ required: true, message: 'Please enter your email address' }]}
                                >
                                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Please enter your email address" type="email" />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please enter your password' }]}
                                    tooltip={{ title: "Password should be at least 8 characters.", icon: <InfoCircleOutlined /> }}
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="********" />
                                </Form.Item>
                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    dependencies={['password']}
                                    rules={[
                                        { required: true, message: 'Please confirm your password' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The passwords do not match'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="********" />
                                </Form.Item>
                            </>
                        )}

                        {userType === 'partner' && (
                            <>
                                <Form.Item
                                    label="Company Name"
                                    name="companyName"
                                    rules={[{ required: true, message: 'Please enter your company name' }]}
                                >
                                    <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Your Company Inc." />
                                </Form.Item>
                                <Form.Item
                                    label="Company Email"
                                    name="companyEmail"
                                    rules={[{ required: true, message: 'Please enter your company email address' }]}
                                >
                                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="company@example.com" type="email" />
                                </Form.Item>
                                <Form.Item
                                    label="Company Password"
                                    name="companyPassword"
                                    rules={[{ required: true, message: 'Please enter your company password' }]}
                                    tooltip={{ title: "Password should be at least 8 characters.", icon: <InfoCircleOutlined /> }}
                                >
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="********" />
                                </Form.Item>
                                <Form.Item
                                    label="Company Details"
                                    name="companyDetails"
                                    rules={[{ required: true, message: 'Please describe your company' }]}
                                >
                                    <Input.TextArea placeholder="What does your company do?" />
                                </Form.Item>
                            </>
                        )}

                        {error && (
                            <Alert message={error} type="error" showIcon closable className="alert" />
                        )}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </Button>
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            Already have an account? 
                            <Link to="/login"> Sign In</Link>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
