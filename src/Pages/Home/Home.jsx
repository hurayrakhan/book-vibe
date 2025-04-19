import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';


const Home = () => {

    const booksData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto'>
                <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                    {
                        booksData.map(book => <Books key={book.bookId} book={book}></Books>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Home;