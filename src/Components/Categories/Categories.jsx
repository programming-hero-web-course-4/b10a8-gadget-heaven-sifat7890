import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div>
            {
                categories.map(category => (<Link key={category.category} to={`/category/${category.category}`}><button>{category.category}</button></Link>))

            }
        </div>
    );
};

export default Categories;