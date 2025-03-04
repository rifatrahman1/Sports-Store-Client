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



function Add_equipment() {
  const [formData, setFormData] = useState({
    itemName: '',
    categoryName: '',
    image: '',
    description: '',
    price: '',
    rating: '5',
    deliveryTime: '',
    customization: '',
    stockStatus: 'In Stock'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.itemName.trim()) newErrors.itemName = 'Item name is required';
    if (!formData.categoryName.trim()) newErrors.categoryName = 'Category name is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }
    
    if (!formData.rating.trim()) {
      newErrors.rating = 'Rating is required';
    } else {
      const ratingValue = parseFloat(formData.rating);
      if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
        newErrors.rating = 'Rating must be between 1 and 5';
      }
    }
    
    if (!formData.deliveryTime.trim()) newErrors.deliveryTime = 'Delivery time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setFormData({
      itemName: '',
      categoryName: '',
      image: '',
      description: '',
      price: '',
      rating: '5',
      deliveryTime: '',
      customization: '',
      stockStatus: 'In Stock'
    });
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                currentStep > index + 1 
                  ? 'bg-green-500 text-white' 
                  : currentStep === index + 1 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {currentStep > index + 1 ? '✓' : index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div 
                className={`h-1 w-16 ${
                  currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Information</h2>
            
            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <ShoppingBag className="w-4 h-4 mr-1" /> Item Name
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 border ${
                  errors.itemName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter product name"
              />
              {errors.itemName && <p className="mt-1 text-sm text-red-600">{errors.itemName}</p>}
            </div>
            
            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Tag className="w-4 h-4 mr-1" /> Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 border ${
                  errors.categoryName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter category name"
              />
              {errors.categoryName && <p className="mt-1 text-sm text-red-600">{errors.categoryName}</p>}
            </div>
            
            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <ImageIcon className="w-4 h-4 mr-1" /> Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 border ${
                  errors.image ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter image URL"
              />
              {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
              {formData.image && (
                <div className="mt-2 border rounded-md p-2 bg-gray-50">
                  <p className="text-xs text-gray-500 mb-1">Image Preview:</p>
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    className="h-32 object-contain mx-auto"
                    onError={(e) => {
                      (e.target).src = 'https://via.placeholder.com/150?text=Invalid+Image+URL';
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>
            
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FileText className="w-4 h-4 mr-1" /> Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 border ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter product description"
              />
              {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>
            
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <DollarSign className="w-4 h-4 mr-1" /> Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={`block w-full pl-7 pr-12 py-3 rounded-md border ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="0.00"
                />
              </div>
              {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
            </div>
            
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Star className="w-4 h-4 mr-1" /> Rating (1-5)
              </label>
              <div className="mt-1">
                <input
                  type="range"
                  name="rating"
                  min="1"
                  max="5"
                  step="0.5"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-600 px-1">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                <div className="text-center mt-2 text-indigo-600 font-medium">
                  Current rating: {formData.rating} {Array(Math.floor(Number(formData.rating))).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 inline-block text-yellow-400 fill-current" />
                  ))}
                  {Number(formData.rating) % 1 !== 0 && (
                    <Star className="w-4 h-4 inline-block text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  )}
                </div>
              </div>
              {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
            
            {/* Delivery Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> Delivery Time
              </label>
              <input
                type="text"
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm py-3 px-4 border ${
                  errors.deliveryTime ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="e.g., 2-3 business days"
              />
              {errors.deliveryTime && <p className="mt-1 text-sm text-red-600">{errors.deliveryTime}</p>}
            </div>
            
            {/* Customization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Palette className="w-4 h-4 mr-1" /> Customization
              </label>
              <input
                type="text"
                name="customization"
                value={formData.customization}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md shadow-sm py-3 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Available customization options"
              />
            </div>
            
            {/* Stock Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Package className="w-4 h-4 mr-1" /> Stock Status
              </label>
              <select
                name="stockStatus"
                value={formData.stockStatus}
                onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Pre-order">Pre-order</option>
              </select>
            </div>
            
            {/* Product Summary */}
            <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-medium text-indigo-700 mb-2">Product Summary</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600">Item Name:</div>
                <div className="font-medium">{formData.itemName || '—'}</div>
                
                <div className="text-gray-600">Category:</div>
                <div className="font-medium">{formData.categoryName || '—'}</div>
                
                <div className="text-gray-600">Price:</div>
                <div className="font-medium">${formData.price || '—'}</div>
                
                <div className="text-gray-600">Rating:</div>
                <div className="font-medium">{formData.rating || '—'}</div>
                
                <div className="text-gray-600">Delivery:</div>
                <div className="font-medium">{formData.deliveryTime || '—'}</div>
                
                <div className="text-gray-600">Stock:</div>
                <div className="font-medium">{formData.stockStatus}</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
        <motion.div 
          className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 py-12 px-8 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <div className="bg-white/10 p-5 rounded-full inline-block mb-4">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Product Successfully Submitted!
            </motion.h1>
            <motion.p 
              className="text-green-100 text-lg max-w-xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Your product "{formData.itemName}" has been added to the inventory.
            </motion.p>
          </div>
          
          <div className="py-10 px-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Item Name</p>
                    <p className="font-medium">{formData.itemName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{formData.categoryName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium">${formData.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Stock Status</p>
                    <p className="font-medium">{formData.stockStatus}</p>
                  </div>
                </div>
                
                {formData.image && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Product Image</p>
                    <img 
                      src={formData.image} 
                      alt={formData.itemName} 
                      className="h-40 object-contain"
                      onError={(e) => {
                        (e.target).src = 'https://via.placeholder.com/150?text=Invalid+Image+URL';
                      }}
                    />
                  </div>
                )}
              </div>
              
              <div className="text-center mt-6">
                <motion.button
                  onClick={resetForm}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add Another Product
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="bg-white shadow-2xl rounded-2xl overflow-hidden"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 px-8">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <ShoppingBag className="mr-3" />
              Product Submission Form
            </h1>
            <p className="text-purple-100 mt-2">Fill in the details to add a new product to your inventory</p>
          </div>
          
          <form onSubmit={handleSubmit} className="py-6 px-8 space-y-6">
            {renderStepIndicator()}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
            
            <div className="pt-4 flex justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center py-3 px-6 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                    isSubmitting 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  } transition-colors duration-200`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Product'
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Add_equipment;