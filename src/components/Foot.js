import React from "react";

const Foot = () => {
   return (
      <div className="foot">
         <div className="foot-des">
            <div className="foot-des-whp">
               <div className="foot-des-whp-title Text-Style-15">what happened</div>
               <div className="foot-des-whp-info Text-Style-26">
                  [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                  [공지] 29CM 강남 스토어 영업 종료 <br />
                  [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                  [공지] iOS 10 이하 버전 지원 중단 안내<br />
                  [공지] 개인 정보 처리 방침 변경 사전 안내
               </div>
            </div>

            <div className="foot-des-details">
               <div className="foot-des-detail">
                  <div className="foot-des-detail-title Text-Style-11">about us</div>
                  <div className="foot-des-detail-des Text-Style-26">
                     회사 소개 <br />
                     인재 채용
                     <br />
                     상시 할인 혜택
                  </div>
               </div>

               <div className="foot-des-detail">
                  <div className="foot-des-detail-title Text-Style-11">my order</div>
                  <div className="foot-des-detail-des Text-Style-26">
                     내 주문 주문 배송
                     <br />
                     취소 / 교환 / 반품 내역
                     <br />
                     상품 리뷰 내역
                     <br />
                     증빙 서류 발급
                  </div>
               </div>

               <div className="foot-des-detail">
                  <div className="foot-des-detail-title Text-Style-11">my account</div>
                  <div className="foot-des-detail-des Text-Style-26">
                     회원 정보 수정
                     <br />
                     회원 등급 <br />
                     마일리지 현황
                     <br />
                     쿠폰
                  </div>
               </div>

               <div className="foot-des-detail">
                  <div className="foot-des-detail-title Text-Style-11">help</div>
                  <div className="foot-des-detail-des Text-Style-26">
                     1 : 1 상담 내역 <br />
                     상품 Q & A 내역
                     <br />
                     공지 사항
                     <br />
                     자주하는 질문
                     <br />
                     고객의 소리
                  </div>
               </div>
            </div>
         </div>

         <div className="foot-add-logo">
            <div className="foot-add Text-Style-26">
               © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br />
               서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
            </div>

            <div className="foot-logo">
               <div>
                  <img src={require('../img/foot/1.png')} alt="" />
               </div>
               <div>
                  <img src={require('../img/foot/2.png')} alt="" />
               </div>
               <div>
                  <img src={require('../img/foot/3.png')} alt="" />
               </div>
            </div>
         </div>

      </div>
   );
};

export default Foot;
