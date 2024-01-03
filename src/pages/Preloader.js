import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner'


const Preloader = () => {
  return (
      <div style={{ backgroundColor: '#111d30', width: '100%', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              ariaLabel="rotating-triangels-loading"
              wrapperStyle={{}}
              wrapperClass="rotating-triangels-wrapper"
          />
    </div>
  )
}

export default Preloader;