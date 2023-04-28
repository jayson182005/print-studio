import logo from '../assets/logo.svg';


function TopNav() {
  return (
    <>
    <header className="header">
    
    <div className="top-bar py-2">
      <div className="container-fluid py-1 px-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <ul className="list-inline mb-0 small list-separated-light">
              <li className="list-inline-item me-3">
                <a href="tel:1-800-123-4567"><svg className=" svg-icon svg-icon-sm me-1"></svg>1-800-123-4567</a>
              </li>
              <li className="list-inline-item ps-3">Free shipping on orders over ₱10,000</li>
            </ul>
          </div>
          <div className="col-lg-6 text-end">
            <ul className="list-inline list-separated-light mb-0">
              <li className="list-inline-item me-3">
                
                <div className="dropdown"><a className="dropdown-toggle reset-anchor small" id="currencyDropdown" href="#"
                    data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false"> Payment Options</a>
                  <div className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="currencyDropdown">
                    <a className="dropdown-item" href="#">COD</a>
                    <a className="dropdown-item" href="#">GCASH</a>
                    <a className="dropdown-item" href="#">PayPal</a>
                    <a className="dropdown-item" href="#">Credit Card</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-4 px-lg-4" style={{ height: "100px" }}>
        <div className="container-fluid"><a className="navbar-brand" href="index.html"><img src={logo}
          alt="website-logo" width="220" /></a>
          <button className="navbar-toggler rounded-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#NavnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown"><a className="nav-link fw-normal dropdown-toggle text-uppercase active"
                id="homepageVariants" href="#Nav" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                <ul className="dropdown-menu mt-lg-4" aria-labelledby="homepageVariants">
                  <li><a className="dropdown-item" href="index.html">Landing Page</a></li>
                  <li><a className="dropdown-item" href="./pages/index2.html">Clothing Genre</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link fw-normal text-uppercase text-dark" href="./pages/shop.html">Shop</a></li>

              <li className="nav-item dropdown"><a className="nav-link fw-normal text-dark dropdown-toggle text-uppercase" href="#Nav"
                data-bs-toggle="dropdown">ORDER PROCESS</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./pages/cart.html">Shopping Cart</a></li>
                  <li><a className="dropdown-item" href="./pages/checkout1.html">Checkout 1 - Address</a></li>
                  <li><a className="dropdown-item" href="./pages/checkout2.html">Checkout 2 - Delivery</a></li>
                  <li><a className="dropdown-item" href="./pages/checkout3.html">Checkout 3 - Payment</a></li>
                  <li><a className="dropdown-item" href="./pages/checkout4.html">Checkout 4 - Review</a></li>
                  <li><a className="dropdown-item" href="./pages/checkout5.html">Checkout 5 - Confirmation</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown"><a className="nav-link fw-normal text-dark dropdown-toggle text-uppercase" href="#Nav"
                data-bs-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./pages/contact.html">Contact</a></li>
                  <li><a className="dropdown-item" href="./pages/about.html">About Us</a></li>
                  <li><a className="dropdown-item" href="./pages/faq.html">FAQ</a></li>
                  <li><a className="dropdown-item" href="./pages/coming-soon.html">Coming Soon</a></li>
                  <li><a className="dropdown-item" href="./pages/404.html">Error 404</a></li>
                  <li><a className="dropdown-item" href="./pages/500.html">Error 500</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown"><a className="nav-link fw-normal text-dark dropdown-toggle text-uppercase" href="#Nav"
                data-bs-toggle="dropdown">BLOG</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./pages/blog.html">Blog</a></li>
                  <li><a className="dropdown-item" href="#Nav">Post Us</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown"><a className="nav-link fw-normal text-dark dropdown-toggle text-uppercase" href="#Nav"
                data-bs-toggle="dropdown">Customer</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./pages/customer-login.html">Login/Sign-Up</a></li>
                  <li><a className="dropdown-item" href="./pages/customer-orders.html">Order Details</a></li>
                  <li><a className="dropdown-item" href="./pages/customer-addresses.html">Addresses</a></li>
                  <li><a className="dropdown-item" href="./pages/customer-account.html">Profile</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link fw-normal text-dark dropdown-toggle text-uppercase" href="#Nav"
                data-bs-toggle="dropdown">Payment Options</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#Nav">COD</a></li>
                  <li><a className="dropdown-item" href="#Nav">GCASH</a></li>
                  <li><a className="dropdown-item" href="#Nav">PayPal</a></li>
                  <li><a className="dropdown-item" href="#Nav">Credit Card</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav flex-row mb-2 mb-lg-0 ms-lg-5 actions-nav-menu">

              <li className="nav-item dropdown">
                <a className="nav-link position-relative no-caret" id="cartDropdown" href="#Nav"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge rounded-pill bg-danger" id="cart-count">0</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end mt-lg-4 p-4" id="cart-dropdown"></div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#Nav" id="wishlist-icon" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="fas fa-heart"></i>
                  <span className="badge rounded-pill bg-danger" id="wishlist-count">0</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end mt-lg-4 p-4 me-4" id="wishlist-dropdown"></div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;