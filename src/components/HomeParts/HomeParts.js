import React from 'react';
import useParts from '../../hooks/useParts';
import Part from '../Part/Part';
import Loading from '../Shared/Loading/Loading';

const HomeParts = () => {
    const [homeParts, setHomeParts] = useParts();

    console.log(homeParts);

    const slicedParts = homeParts.slice(0, 6);

    console.log(slicedParts);

    return (
        <div>
              <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center w-auto mt-4 mb-4 gap-3'>
            {
                homeParts.length > 0?
                    slicedParts.map ( part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                    :
                    <Loading></Loading>
            }
            </div>     
        </div>
    );
};

export default HomeParts;