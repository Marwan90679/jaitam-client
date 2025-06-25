import React from 'react';

export const TimeAgo = (date) => {
    
    const now = new Date();
    const timeDiff = now - new Date(date);  // diff is in milliseconds

    const seconds =Math.floor(timeDiff/1000);
    const minutes =Math.floor(seconds/60)
    const hours =Math.floor(minutes/60)
    const days =Math.floor(hours/24);
    const weeks =Math.floor(days/7);
    if(weeks>0 ) return `Posted ${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if(days>0 ) return `Posted ${days} day${days > 1 ? 's' : ''} ago`;
    if(hours>0)return `Posted ${hours} hour${hours >1 ? 's':''} ago`;
    if(minutes>0)return `Posted ${minutes} minute${minutes >1 ? 's':''} ago`;
    
    return `Posted just now `;}