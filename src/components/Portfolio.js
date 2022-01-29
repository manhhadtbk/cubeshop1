import React from 'react';

const Portfolio = () => {
   let arrayItem = []
   for (let i = 1; i <= 25; i++) {
      if (i < 10) {
         arrayItem[i] = `img-0${i}.png`
      } else {
         arrayItem[i] = `img-${i}.png`
      }
   }

   return <div className='portfolio'>
      <div className='portfolio-list'>
         {
            arrayItem.map((item, index) => {
               return (
                  <div
                     key={index}
                     className='portfolio-item'
                  >
                     <img src={require(`../img/portfolio/product/${item}`)} />

                     <div className='portfolio-info'>
                        <div className='portfolio-describe Text-Style-14'>
                           [what happen] How to create
                        </div>
                        <div className='portfolio-priceandheart'>
                           <div className='portfolio-price Text-Style-8'>
                              2,500 won
                           </div>

                           <div className='portfolio-heartandamount'>
                              <div className='portfolio-hearticon'>
                                 <img src={require('../img/portfolio/icon/hearticon.png')} />
                              </div>
                              <div className='portfolio-amount Text-Style-8'>
                                 236
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </div>

      <div className='portfolio-seemore Text-Style-22 '> 
         SEE MORE
      </div>
   </div>;
};

export default Portfolio;
