import React from 'react';
import useParts from '../../hooks/useParts';
import Part from '../Part/Part';

const Parts = () => {
    const [parts, setParts] = useParts([]);

    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 justify-items-center gap-1'>
        {
            parts.map(part => <Part
                 key = {part._id}
                 part = {part}
            ></Part>)
        }
     </div>
    );
};

export default Parts;