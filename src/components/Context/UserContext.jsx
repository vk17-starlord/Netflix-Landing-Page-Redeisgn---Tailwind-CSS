import React ,{useState }from 'react';

export const UserContext =React.createContext();


 
export function UserProvider({children}){

    const [User, setUser] = useState({
        username:sessionStorage.getItem('username')??'',
        isMale:sessionStorage.getItem('isMale')??false,
        isFemale:sessionStorage.getItem('isFemale')??false,
    });

     
return(
    <UserContext.Provider value={User}>
     {children}
    </UserContext.Provider>
)

}