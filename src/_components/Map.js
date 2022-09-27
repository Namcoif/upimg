import React from 'react';

function Map(props) {
    const option = [
        {
            id1: 1,
            display: 'Nam'
        },
        {
            id1: 2,
            display: 'Thang'
        },

    ]

    // Return multiArray
    const option2 = option.map((data) => {
        return [{
            id: data.id1,
            nameq: data.display
        }

        ]

    })

    // Return arrayObject
    const option3 = option.map((data) => {
        return {
            id: data.id1,
            nameq: data.display
        }



    })
    console.log(option2);
    console.log(option3);
    return (
        <div>

        </div>
    );
}

export default Map;