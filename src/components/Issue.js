import React from 'react';

const Issue = () => {
   return <div className='issue'>
      <div className='issue-3dice'>
         <img src={require('../img/issue/3dice.png')} />
      </div>

      <div className='issue-5dice'>
         <img src={require('../img/issue/5dice.png')} />
      </div>

      <div className='issue-title Text-Style-23'>
         Happened’s issue
      </div>
      <div className='issue-describe Text-Style-9'>
         모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
         다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </div>

      <div className='issue-seemore Text-Style-22 '>
         SEE MORE
      </div>

      <div className='issue-brand'>
         <div className='issue-brand-item1' >
            <div className='issue-whpissue Text-Style-25'>
               WHP ISSUE
            </div>
            <img className='issue-arrow' src={require('../img/issue/brand/brand1.png')} />
            <img className='issue-face' src={require('../img/issue/face.png')} />
         </div>

         <div className='issue-brand-item2' >
            <div className='issue-b-brand Text-Style-24'>
               <img className='issue-hot' src={require('../img/issue/hot.png')} />
               B BRAND
            </div>
            <img className='issue-brandimg' src={require('../img/issue/brand/brand2.png')} />
         </div>

         <div className='issue-brand-item3' >
            <div className='issue-c-brand Text-Style-24'>
               C BRAND
            </div>

            <img src={require('../img/issue/brand/brand3.png')} />
         </div>

         <div className='issue-brand-item4' >
            <div className='issue-d-brand Text-Style-24'>
               D BRAND
            </div>
            <div>
               <img className='issue-brand4img' src={require('../img/issue/brand/brand4.png')} />
            </div>
            <img className='issue-lol' src={require('../img/issue/lol.png')} />
         </div>

         <div className='issue-brand-item5' >
            <div className='issue-e-brand Text-Style-24'>
               E BRAND
            </div>

            <img src={require('../img/issue/brand/brand5.png')} />
         </div>

      </div>
   </div>;
};

export default Issue;
