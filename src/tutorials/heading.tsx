

const Heading = () => {
  
  return (
  <>
   
      <div className="main-poop">

        <i className="fas fa-xmark"></i>
        <div className="align-poop">
          <p>add your wish list </p>
          <div className="empty"></div>
        </div>
      </div>
<div className="card">
  <div className="cardAlign">
    <img src="https://ekocart.skytouchinfotech.com/assets/images/furniture/product/01.jpg" className="IMG" alt="" />
    <h4>leather chair</h4>
    <div className="iconsAlign">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    </div>
    <span className="overline">$4599 <p>$6550</p></span>
    <span className="item">Ava:18</span>
    <h5> categories:furniture</h5>
    <p className="pra">12 months domestic warranty. We will provide replacement of particular damaged parts only or entire product </p>
    <div className="btn-box">
      <div className="topBtn">
      <i className="fas fa-minus"></i>
      <span className="one">1</span>
      <i className="fas fa-plus"></i>
   
      <select name="" id="select">
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <div className="color">
        </div>
      </select>
      </div>
      <div className="bottomBtn">

   <div className="btns"><i className="fas fa-carts"></i><span>add to card</span></div>
   <div className="btns"><i className="fas fa-heart"></i><span>add to wishlist</span></div>
      </div>
   <div className="underLine"></div>
<div className="footerBtn">
<h5>share it:</h5>
<i className="fa-solid fa-people-carry-box"></i>
<i className="fa-solid fa-face-smile"></i>
</div>

    </div>
  </div>
</div>
      
      </>
  )
}

export default Heading