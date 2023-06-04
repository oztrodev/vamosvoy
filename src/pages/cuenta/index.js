import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const OrderIndexPage = (props) => {
  useEffect(() => {
    navigate('/cuenta/ordenes/');
  }, []);

  return <React.Fragment />;
};

export default OrderIndexPage;
