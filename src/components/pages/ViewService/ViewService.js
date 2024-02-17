import React from 'react'
import { Link , Button} from '@mui/material'
import "./ViewService.css"

function ViewService() {
  return (
    <>
    <div>
    <h1 className="service-h1">Service Details</h1>
    {/* <PageTitle title="service details"></PageTitle> */}
    <div className="card mx-auto mb-5" style={{ width: "40rem" }}>
      {/* <img className="card-img-top" src={service.img}></img> */}
      <div className="card-body text-center">
        <h3 className="card-title">Service Name</h3>

        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias facere accusamus neque officia accusantium at impedit error consequuntur iusto itaque!</p>
        <p>Price : $100</p>
        <Link to={``}>
          <Button className="btn btn-primary">Process checkout</Button>
        </Link>
      </div>     
    </div>
  </div>

  
  </>

  
  )
}

export default ViewService
