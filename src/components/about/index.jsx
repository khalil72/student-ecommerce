import React from 'react'

const AboutComponent = () => {
  return (
    <div className='container justify-content-center align-items-center mt-5 mb-5'>
      <div className="row">
        <div className="col-12 col-md-6">
        
        <img src={"/assets/images/about.jpg"} className='image section-height'/>
           
        </div>
        <div  className="col-12 col-md-6">
            <h4 className='title'>About us</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores totam repellendus porro at, minus impedit nemo necessitatibus ab ea obcaecati nostrum dolor dolorem sit eaque voluptatem ipsa magnam quaerat vel?</p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
