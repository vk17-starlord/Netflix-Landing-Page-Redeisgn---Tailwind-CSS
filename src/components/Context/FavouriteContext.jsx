import React from 'react';

export const FavouriteContext =React.createContext();


 
export function FavouriteProvider({children}){

    let Favourite = [];


    const setFavourite = (arr)=>{
        console.log(arr)   
        Favourite=[...Favourite,arr] 
          console.log(Favourite)
      }
    
return(
    <FavouriteContext.Provider value={[Favourite,setFavourite]}>
     {children}
    </FavouriteContext.Provider>
)

}