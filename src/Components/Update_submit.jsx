import React from 'react';
import Update_equipment from './Update_equipment';
import { useLoaderData } from 'react-router-dom';

const Update_submit = () => {
      const loader_data = useLoaderData();
      return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                             {loader_data.item_name} Product Update Submission Form
                        </h1>
                        <Update_equipment></Update_equipment>
                  </div>
            </div>
      );
};

export default Update_submit;