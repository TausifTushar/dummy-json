import React, { useContext } from 'react';
import { DataContext } from '../../Context/MyContext';

const Home = () => {
    const {data} = useContext(DataContext)
    console.log(data)
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;