import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsYoutube,BsInstagram} from 'react-icons/bs';
import newletter from '../images/newsletter.png'
 const Footer = () => {
  return (
     <>
       <footer className='footer-1 py-4'>
      <div className='container-xxl'>
         <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={newletter} alt='newsletter' />
              <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group ">
  <input type="text" 
  className="form-control py-1"
   placeholder="Your Email Address..." 
   aria-label="Your Email Address..." 
   aria-describedby="basic-addon2" />
  <span className="input-group-text p-2" 
  id="basic-addon2"> Subscribe</span>
          </div>
         </div>
      </div>
      </div>
     </footer>  

     <footer className=' footer-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className="text-white ">Hmo: 277 Near Vill chopal,<br />
                Sonipat, Haryana <br />
                Pincode: 274401
              </address>
              <a href='tel: +91 4587689437' className='mt-3 d-block mb-0 text-white'>
              +91 4587689437
              </a>
              <a href=' mailto' className='mt-2 d-block mb-0 text-white'>
             abc@gmail.com
              </a>
              <div className='social-icons d-flex  align-items-center gap-30 mt-4'>
                <a className='text-white' href='#'>
                  <BsLinkedin className='text-white fs-5'/>
                </a>
                <a className='text-white' href='#'>
              <BsInstagram className='text-white fs-5'/>
                </a>
                <a className='text-white' href='#'>
                   <BsGithub className='text-white fs-5'/>
                </a>
                <a className='text-white' href='#'>
                 <BsYoutube className='fs-5'/>
                </a>
              </div>
            </div>
          </div>
          <div className='privacy col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-link d-flex flex-column'>
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
               <Link to="/term-conditions" className="text-white py-2 mb-1"> Term & Conditions</Link> 
              <Link to=""className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className='about col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-link d-flex flex-column'>
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
              
            </div>
          </div>
          <div className='quick col-2'>
          <h4 className='text-white mb-4'>Links</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className="text-white py-2 mb-1">Laptop</Link>
              <Link className="text-white py-2 mb-1">Earbuds</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </div>
     </footer>

     <footer className='footer-3 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()} : Powered by Developers.</p>
          </div>
        </div>
      </div>
     </footer>
     </>
  )
}
export default Footer;