import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
      ShoppingBag,
      Tag,
      Image as ImageIcon,
      FileText,
      DollarSign,
      Star,
      Clock,
      Palette,
      Package,
      CheckCircle
} from 'lucide-react';
import { form } from 'motion/react-client';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';

const Update_equipment = () => {
      const loader_data = useLoaderData();
      const { _id, item_name, price, rating, image, status, description, customization, category_name, delivery } = loader_data || {};
      const [formData, setFormData] = useState({
            itemName: '',
            categoryName: '',
            image: '',
            description: '',
            price: '',
            rating: '',
            deliveryTime: '',
            customization: '',
            stockStatus: 'in-stock'
      });

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [errors, setErrors] = useState({});

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                  ...prev,
                  [name]: value
            }));

            // Clear error when field is edited
            if (errors[name]) {
                  setErrors(prev => ({
                        ...prev,
                        [name]: ''
                  }));
            }
      };

      //   const validateForm = () => {
      //     const newErrors = {};
      //     let isValid = true;

      //     // Required fields
      //     if (!formData.itemName.trim()) {
      //       newErrors.itemName = 'Item name is required';
      //       isValid = false;
      //     }

      //     if (!formData.categoryName.trim()) {
      //       newErrors.categoryName = 'Category name is required';
      //       isValid = false;
      //     }

      //     if (!formData.image.trim()) {
      //       newErrors.image = 'Image URL is required';
      //       isValid = false;
      //     } else if (!formData.image.match(/^https?:\/\/.+/i)) {
      //       newErrors.image = 'Please enter a valid URL';
      //       isValid = false;
      //     }

      //     if (!formData.description.trim()) {
      //       newErrors.description = 'Description is required';
      //       isValid = false;
      //     }

      //     if (!formData.price.trim()) {
      //       newErrors.price = 'Price is required';
      //       isValid = false;
      //     } else if (isNaN(parseFloat(formData.price))) {
      //       newErrors.price = 'Price must be a number';
      //       isValid = false;
      //     }

      //     if (!formData.rating.trim()) {
      //       newErrors.rating = 'Rating is required';
      //       isValid = false;
      //     } else {
      //       const ratingValue = parseFloat(formData.rating);
      //       if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      //         newErrors.rating = 'Rating must be between 1 and 5';
      //         isValid = false;
      //       }
      //     }

      //     if (!formData.deliveryTime.trim()) {
      //       newErrors.deliveryTime = 'Delivery time is required';
      //       isValid = false;
      //     } else if (isNaN(parseInt(formData.deliveryTime)) || parseInt(formData.deliveryTime) < 1) {
      //       newErrors.deliveryTime = 'Delivery time must be a positive number';
      //       isValid = false;
      //     }

      //     if (!formData.customization.trim()) {
      //       newErrors.customization = 'Customization options are required';
      //       isValid = false;
      //     }

      //     setErrors(newErrors);
      //     return isValid;
      //   };

      const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            const item_name = form.itemName.value;
            const category_name = form.categoryName.value;
            const image = form.image.value;
            const description = form.description.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const delivery = form.deliveryTime.value;
            const customization = form.customization.value;
            const status = form.stockStatus.value;
            const update_product = { _id, item_name, category_name, image, description, price, rating, delivery, customization, status };

            // send data to the server 

            fetch(`http://localhost:5000/sports/${_id}`, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(update_product)
            })
                  .then(res => res.json())
                  .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                              Swal.fire({
                                    title: "Good job!",
                                    text: "User Update successfully!",
                                    icon: "success",
                              }).then(() => {
                                    form.reset();
                                    form.elements["name"].value = "";
                                    form.elements["email"].value = "";
                              });
                        }
                  })

            //     if (!validateForm()) {
            //       return;
            //     }

            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                  console.log('Form submitted:', formData);
                  setIsSubmitting(false);
                  setIsSubmitted(true);
            }, 1500);
      };

      if (isSubmitted) {
            return (
                  <div className="bg-white shadow-xl rounded-lg p-8 transition-all duration-500 transform scale-100">
                        <div className="text-center">
                              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                              </div>
                              <h2 className="mt-4 text-2xl font-bold text-gray-900">Product Submitted Successfully!</h2>
                              <p className="mt-2 text-gray-600">Your product has been submitted and is pending review.</p>
                              <div className="mt-6">
                                    <Link to={'/'}>
                                          <button
                                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                          >
                                                Go To Home
                                          </button>
                                    </Link>
                              </div>
                        </div>
                  </div>
            );
      }

      return (
            <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-500">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                        <h2 className="text-xl font-bold text-white">Product Information</h2>
                        <p className="text-indigo-100">Fill in the details to submit your product</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Left Column */}
                              <div className="space-y-6">
                                    <div>
                                          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Item Name
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <ShoppingBag className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="text"
                                                      name="itemName"
                                                      defaultValue={item_name}
                                                      id="itemName"
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.itemName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter product name"
                                                />
                                          </div>
                                          {errors.itemName && <p className="mt-1 text-sm text-red-600">{errors.itemName}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Category Name
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <Tag className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="text"
                                                      name="categoryName"
                                                      defaultValue={category_name}
                                                      id="categoryName"
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.categoryName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter category name"
                                                />
                                          </div>
                                          {errors.categoryName && <p className="mt-1 text-sm text-red-600">{errors.categoryName}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                                                Image URL
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <ImageIcon className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="url"
                                                      name="image"
                                                      defaultValue={image}
                                                      id="image"
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.image ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter image URL"
                                                />
                                          </div>
                                          {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                                Description
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <FileText className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <textarea
                                                      name="description"
                                                      defaultValue={description}
                                                      id="description"
                                                      onChange={handleChange}
                                                      rows={4}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.description ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter product description"
                                                />
                                          </div>
                                          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                                    </div>
                              </div>

                              {/* Right Column */}
                              <div className="space-y-6">
                                    <div>
                                          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                                Price
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <DollarSign className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="text"
                                                      name="price"
                                                      id="price"
                                                      defaultValue={price}
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.price ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter price"
                                                />
                                          </div>
                                          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                                                Rating (1-5)
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <Star className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="number"
                                                      name="rating"
                                                      defaultValue={rating}
                                                      id="rating"
                                                      min="1"
                                                      max="5"
                                                      step="0.1"
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.rating ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter rating (1-5)"
                                                />
                                          </div>
                                          {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-1">
                                                Delivery Time (in days)
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <Clock className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="number"
                                                      name="deliveryTime"
                                                      defaultValue={delivery}
                                                      id="deliveryTime"
                                                      min="1"
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.deliveryTime ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter delivery time in days"
                                                />
                                          </div>
                                          {errors.deliveryTime && <p className="mt-1 text-sm text-red-600">{errors.deliveryTime}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="customization" className="block text-sm font-medium text-gray-700 mb-1">
                                                Customization Options
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <Palette className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                      type="text"
                                                      name="customization"
                                                      defaultValue={customization}
                                                      id="customization"
                                                      onChange={handleChange}
                                                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3 ${errors.customization ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''
                                                            }`}
                                                      placeholder="Enter customization options"
                                                />
                                          </div>
                                          {errors.customization && <p className="mt-1 text-sm text-red-600">{errors.customization}</p>}
                                    </div>

                                    <div>
                                          <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700 mb-1">
                                                Stock Status
                                          </label>
                                          <div className="relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                      <Package className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <select
                                                      name="stockStatus"
                                                      defaultValue={status}
                                                      id="stockStatus"
                                                      onChange={handleChange}
                                                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md py-3"
                                                >
                                                      <option value="in-stock">In Stock</option>
                                                      <option value="low-stock">Low Stock</option>
                                                      <option value="out-of-stock">Out of Stock</option>
                                                      <option value="pre-order">Pre-Order</option>
                                                </select>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Preview panel */}
                        {formData.itemName && (
                              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <h4 className="text-sm font-medium text-gray-500 mb-2">Preview</h4>
                                    <div className="flex items-start space-x-4">
                                          {formData.image && (
                                                <div className="flex-shrink-0">
                                                      <img
                                                            src={formData.image}
                                                            alt={formData.itemName}
                                                            className="h-24 w-24 rounded-md object-cover border border-gray-200"
                                                            onError={(e) => {
                                                                  (e.target).src = 'https://via.placeholder.com/150?text=No+Image';
                                                            }}
                                                      />
                                                </div>
                                          )}
                                          <div className="flex-1">
                                                <h3 className="text-lg font-medium text-gray-900">{formData.itemName}</h3>
                                                {formData.categoryName && <p className="text-sm text-gray-500">{formData.categoryName}</p>}
                                                {formData.price && <p className="text-sm font-medium text-gray-900 mt-1">${formData.price}</p>}
                                                {formData.description && (
                                                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{formData.description}</p>
                                                )}
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                      {formData.rating && (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                                  <Star className="h-3 w-3 mr-1" /> {formData.rating}
                                                            </span>
                                                      )}
                                                      {formData.deliveryTime && (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                  <Clock className="h-3 w-3 mr-1" /> {formData.deliveryTime} days
                                                            </span>
                                                      )}
                                                      {formData.stockStatus && (
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${formData.stockStatus === 'in-stock'
                                                                        ? 'bg-green-100 text-green-800'
                                                                        : formData.stockStatus === 'low-stock'
                                                                              ? 'bg-yellow-100 text-yellow-800'
                                                                              : formData.stockStatus === 'out-of-stock'
                                                                                    ? 'bg-red-100 text-red-800'
                                                                                    : 'bg-purple-100 text-purple-800'
                                                                  }`}>
                                                                  <Package className="h-3 w-3 mr-1" />
                                                                  {formData.stockStatus === 'in-stock'
                                                                        ? 'In Stock'
                                                                        : formData.stockStatus === 'low-stock'
                                                                              ? 'Low Stock'
                                                                              : formData.stockStatus === 'out-of-stock'
                                                                                    ? 'Out of Stock'
                                                                                    : 'Pre-Order'}
                                                            </span>
                                                      )}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        )}

                        {/* Submit button */}
                        <div className="mt-8 flex justify-end">
                              <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`inline-flex cursor-pointer items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                          }`}
                              >
                                    {isSubmitting ? (
                                          <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                          </>
                                    ) : (
                                          'Submit Product'
                                    )}
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default Update_equipment;