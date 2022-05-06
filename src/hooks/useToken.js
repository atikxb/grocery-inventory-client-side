import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {//send token to backend and verify to let user access
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post(`https://grocery-inventory-server-side.herokuapp.com/login`, { email });//get user token from api
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);//set token to local storage              
            }
        }
        getToken();
    }, [user]);
    return [token];
};

export default useToken;