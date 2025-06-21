import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Product from "./../../Product.json";
import subBanner1 from "./../../assets/banner-1.webp"
import subBanner2 from "./../../assets/banner-2.webp"

function Index() {
  const [filterSortOption, setFilterSortOption] = useState('all');
  const navigate = useNavigate();
  
  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!existing.some(p => p.id === product.id)) {
      const updated = [...existing, product];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      window.dispatchEvent(new Event('wishlistUpdated'));
      toast.success(`${product.productName} added to your wishlist`);
    }
    else {
      toast.info(`${product.productName} is already in your wishlist`);
    }
  }

  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyInCart = existing.find(p => p.id === product.id);

    if (!alreadyInCart) {
      const updatedProduct = {...product, quantity: 1};
      const updatedCart = [...existing, updatedProduct];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success(`${product.productName} added to your cart`);
    }
    else {
      toast.info(`${product.productName} is already in your cart`);
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>- ESSENTIAL ITEMS -</h5>
                <h1>Beauty Inspired <br /> by Real Life</h1>
                <p className="my-3">
                  Made using clean, non-toxic ingredients, our products are designed for everyone.
                </p>
                <a href="#" className="btn hero-btn mt-3">Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>- NEW COLLECTION -</h5>
                <h1>Get The Perfectly Hydrated Skin</h1>
                <p className="my-3">
                  Made using clean, non-toxic ingredients, our products are designed for everyone.
                </p>
                <a href="#" className="btn hero-btn mt-3">Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>- GET THE GLOW -</h5>
                <h1>Be Your Kind <br /> of Beauty</h1>
                <p className="my-3">
                  Made using clean, non-toxic ingredients, our products are designed for everyone.
                </p>
                <a href="#" className="btn hero-btn mt-3">Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Products */}
      <div className="product-container py-5 my-5">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title mb-5 product-title text-center">
              <h2 className="fw-semibold fs-1">Our Featured Products</h2>
              <p className="text-muted">Get the skin you want to feel</p>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
              breakpoints={{
                1399: { slidesPerView: 4 },
                1199: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                767: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
              }}
              className="mt-4 swiper position-relative"
            >
              {Product.filter(product => product.id >= 5 && product.id <= 10).map(product => (
                <SwiperSlide key={product.id}>
                  <div className="product-item text-center position-relative">
                    <div className="product-image w-100 position-relative overflow-hidden">
                      <img src={product.image} className="img-fluid" alt="" />
                      <img src={product.secondImage} className="img-fluid" alt="" />
                      
                      <div className="product-icons gap-3">
                        <div className="product-icon" title="Add to Wishlist" onClick={() => addToWishlist(product)}>
                          <i className="bi bi-heart fs-5"></i>
                        </div>
                        
                        <div className="product-icon" title="Add to Cart" onClick={() => addToCart(product)}>
                          <i className="bi bi-cart3 fs-5"></i>
                        </div>
                      </div>
                      <span className={`tag badge text-white ${product.tag === "New" ? "bg-danger" : "bg-success"}`}>
                        {product.tag}
                      </span>
                    </div>
                    
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                      <div className="product-content pt-3">
                        <span className="price text-decoration-none">{product.price}</span>
                        <h3 className="title pt-1">{product.productName}</h3>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Banners */}
        <div className="banner py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 banner-card overflow-hidden position-relative">
                <img src={subBanner1} alt="" className="img-fluid rounded banner-img" />
                <div className="banner-content position-absolute">
                  <h3>NEW COLLECTION</h3>
                  <h1>Intensive Glow C+ <br /> Serum<br /></h1>
                  <button className="btn banner-btn mt-2">EXPLORE MORE</button>
                </div>
              </div>

              <div className="col-lg-6 banner-card overflow-hidden position-relative banner-mt">
                <img src={subBanner2} alt="" className="img-fluid rounded banner-img" />
                <div className="banner-content banner-content2 position-absolute">
                  <h1>25% Off Everything</h1>
                  <p>Makeup with extended range in <br /> colors for every human.</p>
                  <button className="btn banner-btn mt-2">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer 
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}      
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Index;
