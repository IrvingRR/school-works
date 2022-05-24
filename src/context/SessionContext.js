import {createContext, useState} from 'react';
import Cookies from 'js-cookie';

const SessionContext = createContext();

const SessionProvider = ({children}) => {

    const [session, setSession] = useState(Cookies.get('user'));

    const data = {session, setSession};

    return <SessionContext.Provider value={data}>{children}</SessionContext.Provider>
}

export {SessionProvider};
export default SessionContext;