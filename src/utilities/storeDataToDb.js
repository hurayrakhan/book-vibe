const getStoredData = () => {
    const storedDataSTR = localStorage.getItem("readLists");
    
    if(storedDataSTR){
        const storedData = JSON.parse(storedDataSTR);
        return storedData;
    }
    else{
        return [];
    }
};


const addToStoreDB = (id) => {
    const storedData = getStoredData();

    if(storedData.includes(id)) {
        alert('This Book Already Added.')
    }
    else{
        storedData.push(id);

        const readyToAdd = JSON.stringify(storedData);
        localStorage.setItem("readLists", readyToAdd)

    }
}

export {addToStoreDB, getStoredData}