import React from 'react';

const ListedBooks = ({book}) => {

    const { publisher, category, bookName, author, image, yearOfPublishing, totalPages, rating} = book;
    
    return (
        <div>
            <div className="flex flex-col md:card md:card-side bg-base-100 shadow-sm my-4 border border-gray-200">

                <div className=' rounded=l-xl bg-gray-200'>
                    <img className='h-36 w-24 mx-auto my-10 md:m-10'
                        src={image}
                        alt="Movie" />
                </div>

                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="flex gap-10">
                        <h4>Tag : </h4>
                        <p>Year of Publishing : {yearOfPublishing}</p>
                    </div>
                    <div className='flex gap-10'>
                        <h4>Publisher : {publisher}</h4>
                        <p>Pages : {totalPages}</p>
                    </div>
                    <div className='flex gap-5'>
                        <button className='bg-[#aed0fa] text-[#328eff] py-1 px-4 rounded-4xl font-semibold'>Category: {category}</button>
                        <button className='bg-[#fee0b3] text-[#FFAC33] py-1 px-4 rounded-4xl font-semibold'>Rating: {rating}</button>
                        <button className='bg-[#23BE0A] text-white py-1 px-4 rounded-4xl font-semibold' >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;