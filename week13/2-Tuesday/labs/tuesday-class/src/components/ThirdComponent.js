import {useEffect, useState} from 'react';

import React from 'react'

const ApiCall = () => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"

    }, [])


  return (
    <div>
      
    </div>
  )
}

export default ApiCall
