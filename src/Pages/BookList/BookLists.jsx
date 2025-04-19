import React from 'react';

const BookLists = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-gray-200 text-center p-5 rounded-xl my-4'>
                <h3 className='text-2xl font-bold'>Books</h3>
            </div>
            
            
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
            </div>

        </div>
    );
};

export default BookLists;