import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Categories from '../Categories/Categories';

const LeftAside = ({data}) => {
    return (
        <div>
<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
    <Categories data={data}></Categories>
</Suspense>
        </div>
    );
};

export default LeftAside;