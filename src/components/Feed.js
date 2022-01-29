import React from "react";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-hletter">
        <img src={require("../img/feed/hletter.png")} />
      </div>

      <div className="feed-whathappen Text-Style-12 ">what happened</div>

      <div className="feed-whathappen-des Text-Style-16 ">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </div>

      <div className="feed-seemore Text-Style-20">SEE MORE</div>

      <div className="feed-w">
        <img src={require("../img/feed/w.png")} />
      </div>

      <div className="feed-heart">
        <img src={require("../img/feed/heart.png")} />
      </div>

      <div className="feed-drink">
        <img src={require("../img/feed/drink.png")} />
      </div>

      <div className="feed-main">
        {/* <div className='feed-main-nav Text-Style-22'>
        <div>
          <i class="far fa-star"></i>
          what happen
        </div>
        <div className='feed-main-twodash'>
        </div>
        <div>
          <i class="fas fa-times"></i>
        </div>
      </div>

      <div className='feed-main-address Text-Style-14'>
        <div >
          www. whpn.com/brandstory
        </div>
        <div>
          →
        </div>
      </div> */}

        <img src={require("../img/feed/main-img.png")} />
      </div>

      <div className="feed-error">
        <img src={require("../img/feed/error.png")} />
      </div>

      <div className="feed-h">
        <img src={require("../img/feed/h.png")} />
      </div>

      <div className="feed-click">
        <img src={require("../img/feed/click.png")} />
      </div>

      <div className="feed-sun">
        <img src={require("../img/feed/sun.png")} />
      </div>

      <div className="feed-face">
        <img src={require("../img/feed/face.png")} />
      </div>
    </div>
  );
};

export default Feed;
