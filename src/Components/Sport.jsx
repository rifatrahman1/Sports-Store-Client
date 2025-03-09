
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { Product } from '../types';
// import { products } from '../data';

const Sport = ({ sport, sports, set_sports }) => {
      // const { _id, item_name, price, rating, image, status } = sport || {};

      const StatusBadge = ({ status }) => {
            const colors = {
              'In Stock': 'bg-green-100 text-green-800',
              'Out of Stock': 'bg-red-100 text-red-800',
              'Low Stock': 'bg-yellow-100 text-yellow-800',
            };
          
            return (
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${colors[status]}`}>
                {status}
              </span>
            );
          };
      
      return (
            <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
            <tr key={sport.id} className="hover:bg-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={sport.image} alt={sport.name} className="h-16 w-16 object-cover rounded-lg" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{sport.item_name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${parseFloat(sport.price).toFixed(2)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-sm text-gray-900 mr-1">{sport.rating}</span>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={sport.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`/details/${sport._id}`}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Details
                </Link>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
      );
};

export default Sport;