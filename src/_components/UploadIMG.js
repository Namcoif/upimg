//import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UploadIMG() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    const [users, setUsers] = useState();
    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);
        ///axios.post('http://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5',formData,{})
        fetch('https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
        {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData),
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
        console.log(formData);

    };

   


    return (
        <div>
            
             <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmission}>Submit</button>
            </div> 
        </div>
    )
}

export default UploadIMG
