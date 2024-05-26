import { Box, Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [status, setStatus] = useState('Active');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!imageFile) {
            alert('Please select an image.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const imageData = reader.result;
            const existingProducts = JSON.parse(localStorage.getItem('newProductList')) || [];
            const newProduct = {
                id: Date.now().toString(), // Generate a unique ID for the product
                product_name: productName,
                category,
                sub_category: subCategory,
                image: imageData,
                status,
            };
            const updatedProducts = [...existingProducts, newProduct];
            localStorage.setItem('newProductList', JSON.stringify(updatedProducts));
            setProductName('');
            setCategory('');
            setSubCategory('');
            setImageFile(null);
            setStatus('Active');
            alert('Product added successfully!');
        };
        reader.readAsDataURL(imageFile);
    };

    const handleCancel = () => {
        navigate(-1); // Navigate back
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    return ( 
        <div className="container mx-auto my-40 ">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
                    <form onSubmit={handleFormSubmit}>
                       
                        <div className="mb-4">
                            <TextField
                                label="Category"
                                variant="outlined"
                                fullWidth
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                label="Sub Category"
                                variant="outlined"
                                fullWidth
                                value={subCategory}
                                onChange={(e) => setSubCategory(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                label="Product Name"
                                variant="outlined"
                                fullWidth
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                select
                                label="Status"
                                variant="outlined"
                                fullWidth
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                            </TextField>
                        </div>
                        <div className="mb-4">
                            <TextField
                                type="file"
                                fullWidth
                                onChange={handleImageChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                            />
                        </div>
                        {imageFile && (
                            <div className="mb-4">
                                <img src={URL.createObjectURL(imageFile)} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: 80 }} />
                            </div>
                        )}
                        <Box display="flex" justifyContent="flex-end" gap={2}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                style={{ backgroundColor: "#662671" }}
                            >
                                Add Product
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
