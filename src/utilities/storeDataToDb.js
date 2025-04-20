const getStoredDataReadLists = () => {
    const storedDataSTR = localStorage.getItem("readLists");

    if (storedDataSTR) {
        const storedData = JSON.parse(storedDataSTR);
        return storedData;
    }
    else {
        return [];
    }
};


const addToStoreDBReadLists = (id) => {
    const storedData = getStoredDataReadLists();
    
    if (storedData.includes(id)) {
        alert('This Book Already Added.')
    }
    else {
        storedData.push(id);

        const readyToAdd = JSON.stringify(storedData);
        localStorage.setItem("readLists", readyToAdd)

    }
};

// wishlists functionality

const getStoredDataWishLists = () => {
    const storedWishListsSTR = localStorage.getItem("wishLists");
    

    if (storedWishListsSTR) {
        const storedData = JSON.parse(storedWishListsSTR);
        console.log(storedData)
        return storedData;
    }
    else {
        return [];
    }
};

const addToStoreDBWishLists = (id) => {
    const storedData = getStoredDataWishLists();

    const storedReadListsSTR = localStorage.getItem('readLists');
    const storedReadLists = JSON.parse(storedReadListsSTR);
    console.log(storedReadLists)
    console.log(storedData)

    if (storedReadLists.includes(id)) {
        alert('This Book Already Read.')
    }
    else if (storedData.includes(id)) {
        alert('This Book Already Added.')
    }
    else {
        storedData.push(id);

        const readyToAdd = JSON.stringify(storedData);
        localStorage.setItem("wishLists", readyToAdd)

    }
}

export { addToStoreDBReadLists, addToStoreDBWishLists, getStoredDataReadLists, getStoredDataWishLists }