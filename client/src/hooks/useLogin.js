import { useState } from 'react';
import { message } from 'antd';
import { useAuth } from '../contexts/AuthContext'; 

const useLogin = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const loginUser = async (values) => {
      

   
        try {
            setLoading(true);
            setError(null);
    
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });

            const data = await res.json();
            console.log('Response received:', data); 
            if (res.status === 200) {
                message.success(data.message);
                login(data.token, data.user);
            } else {
                setError(data.message);
                message.error('Registration failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error caught:', error); 
            setError('An error occurred: ' + error.message);
            message.error('An error occurred: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return {  error, loading, loginUser };
};

export default useLogin;
