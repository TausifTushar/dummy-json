/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
export const DataContext = createContext();
const MyContext = ({children}) => {
    const [data, setData] = useState(useLoaderData())

    //  const setData = useLoaderData();
     console.log(data)
    return (
       <DataContext.Provider value={{data}}>
        {children}
       </DataContext.Provider>
    );
};

export default MyContext;