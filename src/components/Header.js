import React from 'react';

const Header = () => {
   return <div className='header'>
      <div className='logodiv'>
         <img src={require('../img/header/logo1.png')} className='logo' />
      </div>

      <div className='header-cate-icon'>

         <div className='header-icon'>
            <i class="fas fa-caret-down"></i>
         </div>

         <div className='header__category'>

            <a className='Text-Style-11'>
               <div>
                  INTRODUCTION
               </div>
            </a>
            <a className='Text-Style-11'>
               <div>
                  SOLUTION
               </div>
            </a>
            <a className='Text-Style-11'>
               <div>
                  RATE PLAN
               </div>
            </a>

            <div className='Rectangle-662'>
            </div>

            <a className='Text-Style-11'>
               <div>
                  LOGIN
               </div>
            </a>

            <a className='Text-Style-11'>
               <div>
                  APPLY FOR FREE USE
               </div>
            </a>
         </div>
      </div>



   </div>
}

export default Header;
