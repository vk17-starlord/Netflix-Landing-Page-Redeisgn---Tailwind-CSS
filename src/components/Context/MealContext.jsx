import React ,{useState }from 'react';

export const MealContext =React.createContext();


 
export function MealProvider({children}){

    const [Meal, setMeal] = useState(null);
    
return(
    <MealContext.Provider value={[Meal,setMeal]}>
     {children}
    </MealContext.Provider>
)

}