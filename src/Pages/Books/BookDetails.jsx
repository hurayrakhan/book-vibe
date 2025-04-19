import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)
    
    const books = useLoaderData();
    const book = books.find(book => book.bookId === id)
    
    const { publisher, bookName, author, image, yearOfPublishing, review, category, totalPages, rating} = book;
    return (
        <div className='w-10/12 mx-auto flex  '>
            <div className='flex-1 p-20 bg-gray-200 rounded-l-xl'>
                <img className='' src={image} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3>Name of the book: {bookName}</h3>
                <h4>Written by : {author}</h4>
                <h4>Category : {category}</h4>
                <p>Review : {review}</p>
                <p>Tag : </p>
                <div className='flex justify-between border-t border-dashed border-gray-400 mt-5 py-5'>
                    <div>
                        <p>Number of Pages : </p>
                        <p>Publisher : </p>
                        <p>Year of Publishing : </p>
                        <p>Rating : </p>
                    </div>
                    <div>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div>
                    <button className='btn'>Read</button>
                    <button className='btn'>Wishlist</button>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;