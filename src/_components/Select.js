import React, { useEffect, useState } from 'react';

function Select(props) {
    const { getData } = props
    const categories = [
        {
            id: 1,
            display: 'SS'
        },
        {
            id: 2,
            display: 'AC'
        },
        {
            id: 3,
            display: 'AB'
        },
    ]
    const vd = ['a', 'b', 'c']
    const [val, setVal] = useState('');
    const [data, setData] = useState('');
    // const getData=(e)=>{
    //     for (let index = 1; index < categories.length; index++) {

    //         if (categories[index].display==e.target.value) {
    //             setData(categories[index].id);
    //             console.log("Val: ",data);
    //             break;
    //         }

    //     }
    // }
    useEffect(() => {
        getData(data)
    }, [data])

    const _onChange = (e) => {
        setVal(e.target.value)
        for (let index = 1; index < categories.length; index++) {

            if (categories[index].display == e.target.value) {
                setData(categories[index].id);
                console.log("Val: ", data);
                getData(data)
                break;
            }

        }
    }

    return (
        <div>
            <select onChange={_onChange} value={val} >
                {categories.map((data, key) => {

                    return (
                        <option key={data.id} hidden={key === 0 ? true : null}>{data.display}</option>
                    )
                })}

            </select>
        </div>
    );
}

export default Select;