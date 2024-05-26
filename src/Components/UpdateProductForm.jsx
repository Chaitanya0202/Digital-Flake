import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProductForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product || {};

    const [productName, setProductName] = useState(product.product_name || '');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(product.image || '');
    const [status, setStatus] = useState(product.status || 'Active');

    useEffect(() => {
        setProductName(product.product_name);
        setStatus(product.status);
    }, [product]);

    const handleCancel = () => {
        navigate(-1); // Navigate back
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        reader.onloadend = () => {
            const imageData = imageFile ? reader.result : product.image;
            const existingProducts = JSON.parse(localStorage.getItem('newProductList')) || [];
            const updatedProducts = existingProducts.map(p => p.id === product.id ? { ...p, product_name: productName, image: imageData, status } : p);

            localStorage.setItem('newProductList', JSON.stringify(updatedProducts));
            alert('Product updated successfully!');
            navigate(-1); // Go back to the previous page
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
            setImagePreview(URL.createObjectURL(imageFile)); // Update image preview
        } else {
            reader.onloadend();
        }
    };

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    return (
        <>
            <div className="flex ml-60 mt-24">
                <IconButton onClick={handleBackClick}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6">Edit Product</Typography>
            </div>
            <div className="container mx-auto">
                <div className="max-w-lg mt-5 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <form onSubmit={handleFormSubmit}>
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
                                <FormControl fullWidth>
                                    <InputLabel>Status</InputLabel>
                                    <Select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        required
                                    >
                                        <MenuItem value="Active">Active</MenuItem>
                                        <MenuItem value="Inactive">Inactive</MenuItem>
                                    </Select>
                                </FormControl>
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
                            {imagePreview && (
                                <div className="mb-4">
                                    <img src={imagePreview} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: 100 }} />
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
                                type="submit"
                                variant="contained"
                                style={{ backgroundColor: "#662671" }}
                                
                            >
                                Update Product
                            </Button>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProductForm;
