import React, { useState, useEffect } from 'react';
import './Productdescriptionstyle.css'
const ProductDescription = () => {
  const [imgId, setImgId] = useState(1);

  const imgBtns = [
    {
      id: 1,
      imgUrl:
        'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg',
    },
    {
      id: 2,
      imgUrl:
        'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg',
    },
    {
      id: 3,
      imgUrl:
        'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg',
    },
    {
      id: 4,
      imgUrl:
        'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg',
    },
  ];

  const slideImage = () => {
    const displayWidth =
      document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  };

  useEffect(() => {
    slideImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgId]);

  const handleImgButtonClick = (event, id) => {
    event.preventDefault();
    setImgId(id);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              {imgBtns.map((img) => (
                <img
                  key={img.id}
                  src={img.imgUrl}
                  alt="shoe image"
                  style={{
                    transform: `translateX(${
                      -(imgId - 1) * 100
                    }%)`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="img-select">
            {imgBtns.map((img) => (
              <div className="img-item" key={img.id}>
                <a
                  href="#"
                  data-id={img.id}
                  onClick={(e) =>
                    handleImgButtonClick(e, img.id)
                  }
                >
                  <img
                    src={img.imgUrl}
                    alt="shoe image"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title">Book Name</h2>
          <div  className="product-link">
            Author Name
          </div>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            
            <p className="new-price">
               Genere: <span>Comedy | Fiction | Action</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet veniam tempora
              fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at
              sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, perferendis eius.
              Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
            <li>
                Category: <span>Fiction</span>
              </li>
              <li>
                Price: <span>$15</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              
              
    
            </ul>
          </div>

          <div className="purchase-info">
            
            <button type="button" className="btn">
              Issue Book{' '}
              <i className="fas fa-shopping-cart"></i>
            </button>
           
          </div>

          </div>
      </div>
    </div>
  );
};

export default ProductDescription;
