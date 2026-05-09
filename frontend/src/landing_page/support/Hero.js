import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5 ' id='supportWrapper'>
                <h3 className="fs-4">Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>
            <div className='row '>
               <div className='col-6 p-3 mt-4 mb-5'>
                <div className="ms-5" style={{ paddingLeft: "100px" }}>
                 <h1 className="fs-3" style={{lineHeight:'1.5'}}>
             Search for an answer or browse help topics to create a ticket
                 </h1>
                 <div className='mt-3'>
                 <input  placeholder="Eg. how do I activate F&O" />
                 </div>
                 <br/>
                 <a href="">Track account opening</a>
                 <a href="">Track segment activation</a>
                 <a href="">Intraday margins</a>
                 <a href="">Kite user manual</a>
               </div>
              </div>

               <div  className='col-6 p-3 mt-4 d-flex ' id="inner1">
                 <div className="ms-5" style={{ paddingLeft: "80px" }}>
                  <h1 className="fs-3">
                    Featured
                  </h1>
                <ol>
                  <li>
                    <a href="" style={{lineHeight:'2.5'}}>Current Takeovers and Delisting - January 2024</a>
                  </li>
                  <li>
                    <a href="" style={{lineHeight:'2.5'}}>Latest Intraday leverages - MIS & CO</a>
                  </li>
                </ol>
               </div>
              </div>
            </div>
        </section>
       
     );
}

export default Hero;