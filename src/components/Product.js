import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Products.css';
import { BsArrowRightSquare } from 'react-icons/bs';

function Product() {
  return (
    <div className="products">
      <div className="product-header">
        <Navbar />
        <div className="product-middle">
          <h1> PRODUCT</h1>
          <div className="line-1">
            <p>PROGRAMS</p>{' '}
          </div>
        </div>
      </div>
      {/** Product Section */}
      <div className='product-body'>
        <div id="process">process</div>
        <div id="works">PRODUCTS</div>
        <div id="steps">A step by step guide to the home buying process.</div>
   

        <div className="process-images">
        <div className="row-images">
          <div className="image-1">
            <div className="image-text">
              {' '}
              <h5>Certified</h5>
              <span>
                A Jumbo loan is a type of mortgage loan that exceeds...{' '}
              </span>
              <BsArrowRightSquare
                style={{ color: 'white', paddingLeft: '1px', fontSize:"14px" }}
              />
            </div>
          </div>
          <div className="image-2">
            <div className="image-text">
              {' '}
              <h5>USDA Loans</h5>
              <span>
                The united states department of agriculture (USDA) gives...{' '}
              </span>{' '}
              <BsArrowRightSquare
                style={{ color: 'white', paddingLeft: '1px' }}
              />{' '}
            </div>
          </div>
          <div className="image-3">
            <div className="image-text">
              {' '}
              <h5>Conventional Loans</h5>
              <span>Conventional loans are not ... </span>{' '}
              <BsArrowRightSquare
                style={{ color: 'white', paddingLeft: '1px' }}
              />{' '}
            </div>
          </div>
        </div>

        <div className="row-images">
          <div className="image-4">
            <div className="image-text">
              {' '}
              <h4>FHA Loans</h4>
              <span>
                FHA loans are insured by the Federal Housing Administrati...{' '}
              </span>{' '}
              <BsArrowRightSquare
                style={{ color: 'white', paddingLeft: '1px' }}
              />{' '}
            </div>
          </div>
          <div className="image-5">
            <div className="image-text">
              {' '}
              <h4>VA Loans</h4>
              <span>
                A VA loan is a mortgage loan that is guaranteed by the U.S...{' '}
              </span>{' '}
              <BsArrowRightSquare
                style={{ color: 'white', paddingLeft: '1px' }}
              />{' '}
            </div>
          </div>
          <div className="image-6">
            <div className="image-text">
              <h4>Down Payment Assistance</h4>
              <span>Down Payment Assistance </span>{' '}
              <BsArrowRightSquare
                style={{ color: 'white', paddingLeft: '1px' }}
              />{' '}
            </div>
          </div>
        </div>
      
      </div>
   
      </div>

      {/* <div>
          <div className="row-image">
            <div className="image-1">
              <div className="image-1-text">
                {' '}
                <h4>Certified</h4>
                <span>
                  A Jumbo loan is a type of mortgage loan that exceeds...{' '}
                </span>{' '}
                <BsArrowRightSquare
                  style={{ color: 'white', paddingLeft: '1px' }}
                />{' '}
              </div>
            </div>
            <div className="image-2">
              <div className="image-1-text">
                {' '}
                <h4>Loan Programs</h4>
                <span>
                  The united states department of agriculture (USDA) gives...{' '}
                </span>{' '}
                <BsArrowRightSquare
                  style={{ color: 'white', paddingLeft: '1px' }}
                />{' '}
              </div>
            </div>
            <div className="image-3">
              <div className="image-1-text">
                {' '}
                <h4>Mortgage Estimator</h4>
                <span>Conventional loans are not...</span>{' '}
                <BsArrowRightSquare
                  style={{ color: 'white', paddingLeft: '1px' }}
                />{' '}
              </div>
            </div>
          </div>

          <div className="row-image">
            <div className="image-4">
              <div className="image-1-text">
                {' '}
                <h4>ACH Loans</h4>
                <span>
                  ACHL loans are insured by the Federal Housing Administrati...{' '}
                </span>{' '}
                <BsArrowRightSquare
                  style={{ color: 'white', paddingLeft: '1px' }}
                />{' '}
              </div>
            </div>
            <div className="image-5">
              <div className="image-1-text">
                {' '}
                <h4>DFA Loans</h4>
                <span>
                  A DFA loan is a mortgage loan that is guaranteed by the U.S...{' '}
                </span>{' '}
                <BsArrowRightSquare
                  style={{ color: 'white', paddingLeft: '1px' }}
                />{' '}
              </div>
            </div>
            <div className="image-6">
              <div className="image-1-text">
                {' '}
                <h4>Down Payment Assistance</h4>
                <span>Down Payment Assistance </span>{' '}
                <BsArrowRightSquare
                  style={{ color: 'white', paddingLeft: '1px' }}
                />{' '}
              </div>
            </div>
          </div>
        </div> */}
      {/* <div className="product-footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default Product;
