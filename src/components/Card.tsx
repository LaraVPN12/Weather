import React from 'react'

const Card = ({loadingData, showData, weather, forecast}) => {
  return (
    <div>
      {
        showData === true ? (
            <div className='container'>
                <div className='card mb-3 mx-auto bg-dark text-light'>
                    <div className='row g-0'>
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-8'>
                            <div className='card-body text-start mt-2'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <h2>No hay datos</h2>
        )
      }
    </div>
  )
}

export default Card
