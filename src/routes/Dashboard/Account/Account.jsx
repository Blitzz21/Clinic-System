import React, { useState } from 'react';

export default function Account() {
    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        username: false,
        password: false
    });
    
    const [formData, setFormData] = useState({
        name: 'Student Student',
        email: 'student@gmail.com',
        username: 'student1234',
        password: '••••••••',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    // Validate form data
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Name validation
        if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        // Username validation
        if (formData.username.length < 4) {
            newErrors.username = 'Username must be at least 4 characters';
            isValid = false;
        }

        // Password validation
        if (isEditing.password) {
            if (formData.password.length < 8) {
                newErrors.password = 'Password must be at least 8 characters';
                isValid = false;
            }
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        try {
            // Add your API call here
            console.log('Form submitted:', formData);
            
            // Reset editing state
            setIsEditing({
                name: false,
                email: false,
                username: false,
                password: false
            });
            
            // Show success message
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    // Toggle edit mode for a field
    const toggleEdit = (field) => {
        setIsEditing(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
        
        // Reset password fields when canceling password edit
        if (field === 'password' && isEditing.password) {
            setFormData(prev => ({
                ...prev,
                password: '••••••••',
                confirmPassword: ''
            }));
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white">
            <h2 className="text-center mb-4">Profile Picture</h2>
            
            {/* Profile Picture */}
            <div className="mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img src="" alt="Profile" className="w-16 h-16" />
                </div>
            </div>

            {/* Account Settings Form */}
            <form onSubmit={handleSubmit} className="w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6">
                <h3 className="font-semibold mb-4">Account Settings</h3>
                
                {/* Basic Info Section */}
                <div className="mb-4">
                    <h4 className="text-sm mb-2">Basic Info</h4>
                    <div className="space-y-2">
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="w-24 text-gray-600">Name</span>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`flex-grow bg-transparent outline-none ${isEditing.name ? 'text-black' : 'text-gray-500'}`}
                                readOnly={!isEditing.name}
                            />
                            <button 
                                type="button"
                                onClick={() => toggleEdit('name')}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {isEditing.name ? '✓' : '›'}
                            </button>
                        </div>
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="w-24 text-gray-600">Email</span>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`flex-grow bg-transparent outline-none ${isEditing.email ? 'text-black' : 'text-gray-500'}`}
                                readOnly={!isEditing.email}
                            />
                            <button 
                                type="button"
                                onClick={() => toggleEdit('email')}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {isEditing.email ? '✓' : '›'}
                            </button>
                        </div>
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                </div>

                {/* Account Info Section */}
                <div className="mb-6">
                    <h4 className="text-sm mb-2">Account Info</h4>
                    <div className="space-y-2">
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="w-24 text-gray-600">Username</span>
                            <input 
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`flex-grow bg-transparent outline-none ${isEditing.username ? 'text-black' : 'text-gray-500'}`}
                                readOnly={!isEditing.username}
                            />
                            <button 
                                type="button"
                                onClick={() => toggleEdit('username')}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {isEditing.username ? '✓' : '›'}
                            </button>
                        </div>
                        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}

                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="w-24 text-gray-600">Password</span>
                            <input 
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`flex-grow bg-transparent outline-none ${isEditing.password ? 'text-black' : 'text-gray-500'}`}
                                readOnly={!isEditing.password}
                            />
                            <button 
                                type="button"
                                onClick={() => toggleEdit('password')}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {isEditing.password ? '✓' : '›'}
                            </button>
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

                        {isEditing.password && (
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <span className="w-24 text-gray-600">Confirm</span>
                                <input 
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="flex-grow bg-transparent outline-none"
                                />
                            </div>
                        )}
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                    </div>
                </div>

                {/* Save Changes Button - Only show when editing */}
                {Object.values(isEditing).some(Boolean) && (
                    <button 
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors mb-4"
                    >
                        Save Changes
                    </button>
                )}

                {/* Logout Button */}
                <button  type="button" className="w-full py-2 bg-red-200 border border-red-300 text-red-600 rounded-full hover:bg-red-300 transition-colors">Logout</button>
            </form>
        </div>
    );
}
