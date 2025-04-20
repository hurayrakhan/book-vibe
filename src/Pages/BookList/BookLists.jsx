import React, { useEffect, useState } from 'react';
import ListedBooks from './ListedBooks';
import { useLoaderData } from 'react-router';
import { getStoredDataReadLists, getStoredDataWishLists } from '../../utilities/storeDataToDb';

const BookLists = () => {
    const [readLists, setReadLists] = useState([]);
    const [wishLists, setWishLists] = useState([]);

    const booksData = useLoaderData();

    useEffect(() => {
        // readLists
        const storedBookIdReadLists = getStoredDataReadLists();
        const convertedIDReadLists = storedBookIdReadLists.map(id => parseInt(id));
        const readListsData = booksData.filter(book => convertedIDReadLists.includes(book.bookId));
        setReadLists(readListsData);

        // wishLists
        const storedBookIdWishLists = getStoredDataWishLists();
        const convertedIDWishLists = storedBookIdWishLists.map(id => parseInt(id));
        const wishListsData = booksData.filter(book => convertedIDWishLists.includes(book.bookId));
        setWishLists(wishListsData);

    }, []);

    console.log(wishLists)
    
    


    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-gray-200 text-center p-5 rounded-xl my-4'>
                <h3 className='text-2xl font-bold'>Books</h3>
            </div>
            
            
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Lists" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        readLists.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish Lists" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                {
                    wishLists.map(book => <ListedBooks key={book.bookId} book={book}></ListedBooks>)
                }
                </div>
            </div>

        </div>
    );
};

export default BookLists;