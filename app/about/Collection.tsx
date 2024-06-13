import React from 'react';
import './Collection.css';

const Collection = () => {
  return (
    <div className="collection-container">
      <div className="collection-info">
        <div className="trending-now">Trending Now</div>
        <h2 className="collection-title">Collection</h2>
        <h1 className="collection-name">Night Sky</h1>
        <p className="collection-description">
          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo.
        </p>
        <div className="collection-author">
          <img className="author-image" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="author" />          <div className="author-info">
            <div className="author-name">Léa Jacquot</div>
            <div className="author-role">Artist</div>
          </div>
        </div>
      </div>
      <div className="collection-image">
        <img src="https://media.istockphoto.com/id/521011652/photo/night-scene-milky-way-background.jpg?s=2048x2048&w=is&k=20&c=KwOkBbE2iYE0PdFbTP-3QLslZ6iGXeKpQ3anqlIqaP4=" alt="Night Sky" />      </div>
    </div>
  );
}

export default Collection;
