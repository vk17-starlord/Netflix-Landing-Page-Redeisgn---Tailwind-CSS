import React from 'react';

export const UserContext =React.createContext();


 
export function UserProvider({children}){

    const User= {
        username:localStorage.getItem('username')??'',
        isMale:localStorage.getItem('isMale')??false,
        isFemale:localStorage.getItem('isFemale')??false,
    }

  

     
return(
    <UserContext.Provider value={User}>
     {children}
    </UserContext.Provider>
)

}