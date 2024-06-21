import React from 'react';
import { Card, Form, Input, Button, Alert, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'; // Ensure this line includes all icons
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components'; // Make sure the import path is correct

import useLogin from '../hooks/useLogin';

const { Title, Text } = Typography;

const Login = () => {
    const { loading, error, loginUser } = useLogin();

    const handleLogin = (values) => {
        loginUser(values);
    };

    return (
        <div className="min-h-screen">
            
      <div className="gradient-bg-welcome">
      <Navbar />
        <Card className='form-container' bordered={false} style={{ maxWidth: 450, margin: 'auto', padding: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Title level={2} className="title" style={{ textAlign: 'center' }}>Sign In</Title>
            <Text type="secondary" style={{ textAlign: 'center', display: 'block', marginBottom: 20 }}>
                Access your account
            </Text>

            <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
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
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="********" />
                </Form.Item>

                {error && (
                    <Alert message={error} type="error" showIcon closable className="alert" />
                )}

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                        {loading ? 'Logging In...' : 'Log In'}
                    </Button>
                </Form.Item>

                <Form.Item style={{ textAlign: 'center' }}>
                    Don’t have an account? 
                    <Link to="/"> Sign Up</Link>
                </Form.Item>
            </Form>
        </Card>
        </div>
        <Footer />
        </div>
    );
};

export default Login;




