import React from 'react';

const Banner = () => {
    return (
       
            <div className="flex flex-col-reverse lg:flex-row w-9/12 mx-auto justify-between items-center py-16">
                <div className='w-sm'>
                    <h1 className="text-5xl font-bold py-4">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn bg-[#23BE0A] text-white">View The Lists</button>
                </div>

               <div>
               <img
                    src={'/src/assets/books.jpg'}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
               </div>
                
            </div>
        
    );
};

export default Banner;