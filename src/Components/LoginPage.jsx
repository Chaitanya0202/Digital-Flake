// src/Login.js
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from '../Components/ForgotPasswordModal';
import logo from '../Components/assets/logoDigital.png';

const LoginPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  let navigate = useNavigate();

  return (
    <div className=''>
      <div className="bg-custom flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-96 h-auto mr-96"> {/* Increased right margin */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Digitalflake Logo" className="h-20" />
          </div>
          
          <p className="text-center text-gray-500 mb-8">Welcome to Digitalflake admin</p>
          <form>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Email-id"
                variant="outlined"
                type="email"
                id="email"
                InputProps={{
                  className: 'focus:ring focus:ring-purple-200 focus:border-purple-500',
                }}
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                id="password"
                InputProps={{
                  className: 'focus:ring focus:ring-purple-200 focus:border-purple-500',
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div />
              <a href="#" onClick={handleForgotPasswordClick} className="text-purple-600 text-sm">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full p-2 mt-8 text-white rounded-md"
              onClick={() => { navigate("/home") }}
              style={{ backgroundColor: "#662671", hover: { backgroundColor: "red" } }}
            >
              Log In
            </button>
          </form>
        </div>

        <ForgotPasswordModal isVisible={isModalVisible} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default LoginPage;
