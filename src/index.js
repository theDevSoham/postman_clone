import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';

axios.interceptors.request.use(request => {
  request.customData = request.customData || {};
  request.customData.startTime = new Date().getTime();
  return request;
});

const updateEndTime = response => {
  response.customData = response.customData || {};
  response.customData.time = new Date().getTime() - response.config.customData.startTime;
  return response;
};

axios.interceptors.response.use(updateEndTime, error => {
  return Promise.reject(updateEndTime(error.response));
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
