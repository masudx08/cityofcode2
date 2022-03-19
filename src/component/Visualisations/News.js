import { AcUnit, Newspaper, Opacity, Refresh, ShoppingCart } from '@mui/icons-material'
import React from 'react'

function News() {
  return (
    <div className="newsContainer">
    <div className="newsContainer__top">
      <h4 className='title mb-4'>
        <span>News</span>
        <Newspaper style={{marginLeft:'10px'}} />
      </h4>
      {/* <Refresh /> */}
    </div>
    <div className="newsContainer__item">
      <Opacity style={{color:'#86EB80'}} />
      <p>
        It is a long established fact that a reader will be
        distracted.
      </p>
    </div>
    <div className="newsContainer__item">
      <AcUnit style={{color:'#86EB80'}} />
      <p>
        It is a long established fact that a reader will be
        distracted.
      </p>
    </div>
    <div className="newsContainer__item">
      <ShoppingCart style={{color:'#86EB80'}} />
      <p>
        It is a long established fact that a reader will be
        distracted.
      </p>
    </div>
  </div>
  )
}

export default News