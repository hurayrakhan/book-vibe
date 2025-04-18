import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const Books = ({ book }) => {

    const { publisher, bookName, author, image, yearOfPublishing, category, totalPages, rating } = book;
    
    return (
        <div className="card bg-base-100  shadow-xl border border-gray-300 p-5">
            <figure className='p-5 bg-gray-200'>
                <img
                    src={image}
                    alt="Shoes" className='h-40 w-30' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing
                    }</div>
                </h2>
                <div className='flex justify-between gap-4'>
                    <div>
                        <h3><span className='font-semibold'>Writer:</span> {author}</h3>
                        <p><span className='font-semibold'>Category:</span> {category}</p>
                        <p><span className='font-semibold'>Pages:</span> {totalPages}</p>
                    </div>
                    <div>
                        <p><span className='font-semibold'>Publisher: </span>{publisher} </p>
                        <div className='flex gap-3 items-center'>
                            <div><p>{rating}</p></div>

                            <div className='flex'>
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;