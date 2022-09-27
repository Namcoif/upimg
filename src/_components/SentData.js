import React, { useState } from 'react';
import Select from './Select';

function SentData(props) {
    const [id, setId]=useState();
    const getData=(id)=>{
        setId(id)
    }

    return (
        <div>
            <Select
                getData={getData}
            />
            <h1>{id}</h1>
        </div>
    );
}

export default SentData;