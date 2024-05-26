import React, { useEffect, useState } from 'react';

import { BiSearch } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal.jsx';
import froot from './assets/digi.png';
import laptop from './assets/lapDigi.png';
import mobile from './assets/mobileDigi.png';
const SubCategory = () => {
    const initialData = [
        {
            id: 1,
            category: 'Mobile',
            sub_category: 'Motorola',
             product_name   : 'Motorola Edge',
            image: mobile,
            status: 'Active',
        },
        {
            id: 2,
            category: 'Laptop',
            sub_category: 'HP',
            product_name:"HP Pavellion",
            image: laptop,
            status: 'Inactive',
        },
        {
            id: 3,
            category: 'ABC Froots',

            sub_category: 'Fresh',
            product_name:"SomeThing",
            image: froot,
            status: 'Active',
        },
    ];

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const productsFromLocalStorage = JSON.parse(localStorage.getItem('newProductList')) || initialData;
        setData(productsFromLocalStorage);
    }, []);

    const handleEdit = (item) => {
        navigate('/update', { state: { product: item } });
    };

    const handleDelete = (id) => {
        setProductToDelete(id);
        setDeleteModalVisible(true);
    };

    const confirmDelete = () => {
        const updatedData = data.filter((item) => item.id !== productToDelete);
        setData(updatedData);
        localStorage.setItem('newProductList', JSON.stringify(updatedData));
        setDeleteModalVisible(false);
    };

    const filteredData = data.filter((item) =>
        item.product_name && item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="ml-80 mt-28  mr-20">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                <PiListBulletsBold className="text-2xl" />
                    <h1 className="text-2xl font-bold">Sub Categories</h1>
                </div>
                <div className="relative">
                    <BiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Product"
                        className="pl-10 border border-gray-300 rounded px-4 py-2" style={{width:"40rem"}}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Link className=" hover:bg-green-700 text-white py-2 px-4 rounded" style={{backgroundColor:"#662671"}} to={"/addnew"}>
                    Add Product
                </Link>
            </div>
            <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="table-auto w-full border border-gray-200">
                    <thead className=""style={{backgroundColor:"#FFF9C4"}}>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Sub Category</th>   
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {filteredData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">
                                    {item.id.toString().slice(-3)}
                                </td>
                                <td className="border px-4 py-2">{item.category}</td>
                                <td className="border px-4 py-2">{item.sub_category}</td>
                                <td className="border px-4 py-2">
                                    <img src={item.image} alt={item.product_name} className="w-12 h-12 mx-auto" />
                                </td>
                                <td className="border px-4 py-2" style={{ color: item.status === 'Active' ? 'green' : 'red' }}>
                                    {item.status}
                                </td>
                                <td className="border px-4 py-2">
                                    <button className="hover:bg-blue-300 text-black py-1 px-3 rounded-full mr-2" onClick={() => handleEdit(item)}>
                                        <FaRegEdit />
                                    </button>
                                    <button className="hover:bg-red-300 text-black py-1 px-3 rounded-full" onClick={() => handleDelete(item.id)}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <DeleteConfirmationModal
                isVisible={isDeleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={confirmDelete}
            />
        </div>
    );
};

export default SubCategory;
