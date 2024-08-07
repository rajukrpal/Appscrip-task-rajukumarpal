import React from "react";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="uppercase">Be the first to know</h3>
            <p className="text-footer-white py-10">
              Sign up for updates from mettā muse.
            </p>
            <div className="subscribe">
              <input type="text" placeholder="Enter Your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="uppercase">CONTACT US</h3>
            <p className="text-footer-white py-10">+44 221 133 5360</p>
            <p className="text-footer-white py-10">
              customercare@mettamuse.com
            </p>
            <h3 className="uppercase">Currency</h3>
            <div className="currency py-10">
              <img
                src="/web/footer/United States of America (US).png"
                alt="USA"
              />
              <VscDebugStart size={10} />
              <span>USD</span>
            </div>
            <p className="text-footer-white py-10">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-section">
            <h3 className="uppercase">mettā muse</h3>
            <ul>
              <li className="text-footer-white py-10">About Us</li>
              <li className="text-footer-white py-10">Stories</li>
              <li className="text-footer-white py-10">Artisans</li>
              <li className="text-footer-white py-10">Boutiques</li>
              <li className="text-footer-white py-10">Contact Us</li>
              <li className="text-footer-white py-10">EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="uppercase">Quick Links</h3>
            <ul>
              <li className="text-footer-white py-10">About Us</li>
              <li className="text-footer-white py-10">Orders & Shipping</li>
              <li className="text-footer-white py-10">
                Join/Login as a Seller
              </li>
              <li className="text-footer-white py-10">Payment & Pricing</li>
              <li className="text-footer-white py-10">Return & Refunds</li>
              <li className="text-footer-white py-10">FAQs</li>
              <li className="text-footer-white py-10">Privacy Policy</li>
              <li className="text-footer-white py-10">Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="uppercase">Follow Us</h3>
            <div className="social-icons py-10">
              <Link style={{ color: "white" }}>
                <IoLogoInstagram
                  style={{
                    border: "1px solid white",
                    padding: 4,
                    borderRadius: "50%",
                  }}
                  size={30}
                />
              </Link>
              <Link style={{ color: "white" }}>
                <IoLogoLinkedin
                  style={{
                    border: "1px solid white",
                    padding: 4,
                    borderRadius: "50%",
                  }}
                  size={30}
                />
              </Link>
            </div>
            <h3 className="pt-30 uppercase">mettā muse Accepts</h3>
            <div className="payment-icons">
              <img src="/web/footer/Group 136188.png" alt="Google Pay" />
              <img src="/web/footer/Group 136190.png" alt="Visa" />
              <img src="/web/footer/Group 136192.png" alt="PayPal" />
              <img src="/web/footer/Group 136193.png" alt="Amex" />
              <img src="/web/footer/Group 136194.png" alt="ApplePay" />
              <img src="/web/footer/Group 136195.png" alt="oPay" />
            </div>
          </div>
        </div>

        <span className="flex justify-center text-footer-white responsiv">
          Copyright © 2023 mettamuse. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
