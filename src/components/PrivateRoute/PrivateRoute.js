import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../api/user.service';

const PrivateRoute = ({ children }) => {
  const validateSession = async () => {
    try {
      const response = await userService.validateSession();
      console.log('validateSession: ', response);
    } catch (error) {
      if (error.response.status !== 401) {
        console.error('An error occured while session validation.', error);
      }

      navigate('/signin', {
        state: {
          message: 'salve',
        },
      });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    validateSession();
  }, []);

  return children;
};

export default PrivateRoute;
