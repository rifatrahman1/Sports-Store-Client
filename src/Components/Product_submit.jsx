import React from 'react';
import Add_equipment from './Add_equipment';

const Product_submit = () => {
      return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Product Submission Form
        </h1>
        <Add_equipment></Add_equipment>
      </div>
    </div>
      );
};

export default Product_submit;