import React from 'react';


    // const cateGoryPromise = fetch('/categories.json').then(res=> res.json())


const Categories = ({data}) => {

    console.log(data)


    return (
        <div>
            <h2 className='font-bold'>All Categories ({data.length})</h2>
  {/* {
    data.map(category => {
        <p>ami</p>
    })
  } */}
        </div>
    );
};

export default Categories;