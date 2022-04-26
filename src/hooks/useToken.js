import axios from "axios";
import { useEffect, useState } from "react";


const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            let email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://lit-temple-73036.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);
    return [token];
};

export default useToken;