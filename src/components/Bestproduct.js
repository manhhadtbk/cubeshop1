import React from 'react';

const Bestproduct = () => {
   return <div className='bestproduct'>
      <img
         className='bestproduct-bg'
         src={require('../img/bestproduct/bestproduct-background/bestproduct-background.png')}
      />

      <div className='bestproduct-title Text-Style-5'>
         BEST PRODUCT
      </div>

      <div className='bestproduct-describe Text-Style-16'>
         How to create mobile-optimized videos in minutes. Not a designer,
         every team makes a lot of videos Can be trimmed. Take the first
      </div>

      <div className='bestproduct-items'>
         <div className='bestproduct-item'>
            <img
               className='bestproduct-item-img'
               src={require('../img/bestproduct/besproduct-item/bestproduct-item1.png')}
            />
            <div className='bestproduct-number'>
               <img src={require('../img/bestproduct/bestproduct-number/bestproduct-number1.png')} />
            </div>
            <div className='bestproduct-item-go'>
               <img src={require('../img/bestproduct/bestproduct-go/bestproductgo.png')} />
            </div>
         </div>
         <div className='bestproduct-item'>
            <img
               className='bestproduct-item-img'
               src={require('../img/bestproduct/besproduct-item/bestproduct-item2.png')}
            />
            <div className='bestproduct-number'>
               <img src={require('../img/bestproduct/bestproduct-number/bestproduct-number2.png')} />
            </div>
            <div className='bestproduct-item-go'>
               <img src={require('../img/bestproduct/bestproduct-go/bestproductgo.png')} />
            </div>
         </div>
         <div className='bestproduct-item'>
            <img
               className='bestproduct-item-img'
               src={require('../img/bestproduct/besproduct-item/bestproduct-item3.png')}
            />
            <div className='bestproduct-number'>
               <img src={require('../img/bestproduct/bestproduct-number/bestproduct-number3.png')} />
            </div>
            <div className='bestproduct-item-go'>
               <img src={require('../img/bestproduct/bestproduct-go/bestproductgo.png')} />
            </div>
         </div>
      </div>

   </div>;
};

export default Bestproduct;
