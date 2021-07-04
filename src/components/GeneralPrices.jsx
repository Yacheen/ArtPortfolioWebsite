import React from 'react'
import xqc1 from '../css/pricingImages/xqc1.jpg';
import jotaro from '../css/pricingImages/jotaro.jpg';
import pogchamp from '../css/pricingImages/pogchamp.png';

export default function GeneralPrices() {
    return (
        <section className="generalprices-wrapper">
            <div className="header-text-container">
                <h1 className="header-text">General Pricing</h1>
                <h2 className="subheader-text">Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Dolorum, corrupti!
                </h2>
            </div>
            <div className="pricing">
                <div className="pricing-type-one">
                    <div className="pricing-image">
                        <img src={xqc1} alt="xqc"/>
                    </div>
                    <div className="pricing-text"> Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Voluptates similique quo
                     maiores magni incidunt quam error, aliquid eveniet omnis id.
                     </div>
                </div>

                <div className="pricing-type-two">
                    <div className="pricing-text">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Ipsa, soluta?
                    </div>
                    <div className="pricing-image">
                        <img src={jotaro} alt="jotaro"/>
                    </div>
                </div>

                <div className="pricing-type-three">
                    <div className="pricing-image">
                    <img src={pogchamp} alt="pogchamp"/>
                    </div>
                    <div className="pricing-text">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Nesciunt, officia?
                    </div>
                </div>
            </div>
        </section>
    )
}
