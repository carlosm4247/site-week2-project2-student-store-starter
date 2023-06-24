import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h2>Footer</h2>
      <div className="text">
        <div>
          <div>Categories</div>
          <div>All Categories</div>
          <div>Clothing</div>
          <div>Food</div>
          <div>Accessories</div>
          <div>Tech</div>
        </div>
        <div>
          <div>Company</div>
          <div>About Us</div>
          <div>Find a Store</div>
          <div>Terms</div>
          <div>Sitemap</div>
          <div>Careers</div>
        </div>
        <div>
          <div>Support</div>
          <div>Contact Us</div>
          <div>Money Refund</div>
          <div>Order Status</div>
          <div>Shipping Info</div>
          <div>Open Dispute</div>
        </div>
        <div>
          <div>Account</div>
          <div>Login</div>
          <div>Register</div>
          <div>Account Setting</div>
          <div>My Orders</div>
        </div>
        <div>
          <div>Socials</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>LinkedIn</div>
          <div>Instagram</div>
          <div>YouTube</div>
        </div>
        <div className="last">
          <div>Our App</div>
          <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="ios" />
          <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="play" />
        </div>
      </div>
        
    </div>
  );
}