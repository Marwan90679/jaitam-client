import React from 'react';

const FormatDate = (dateSTR) => {
const date=new Date(dateSTR);
 const formattedDate =date.toLocaleDateString("en-GB")
 return formattedDate;
};

export default FormatDate;