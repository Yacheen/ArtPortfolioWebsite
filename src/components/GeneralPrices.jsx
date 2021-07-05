import React from 'react'
import xqc1 from '../css/pricingImages/xqc1.jpg';
import jotaro from '../css/pricingImages/jotaro.jpg';
import pogchamp from '../css/pricingImages/pogchamp.png';

export default function GeneralPrices() {
    return (
        <section className="generalprices-wrapper">
            <div className="header-text-container">
                <h1 className="header-text">General Pricing</h1>
                <h2 className="subheader-text">(USD)</h2>
            </div>

            <div className="pricing">
                <div className="pricing-type-one">
                    <div className="pricing-image">
                        <img src={xqc1} alt="xqc"/>
                    </div>
                    <div className="pricing-text">
                        <h1>Bust</h1> <br/>
                        <p>Sketch: $20</p>
                        <p>Line art: $25</p>
                        <p>Flat colour: $30</p>
                        <p>Full colour/Shaded/Optional background: $40</p>
                     </div>
                </div>

                <div className="pricing-type-two">
                    <div className="pricing-text">
                    <h1>Torso up:</h1> <br/>
                        <p>Sketch: $25</p>
                        <p>Line art: $30</p>
                        <p>Flat colour: $40</p>
                        <p>Full colour/Shaded/Optional background: $50</p>
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
                    <h1>Full body:</h1> <br/>
                        <p>Sketch: $35</p>
                        <p>Line art: $40</p>
                        <p>Flat colour: $50</p>
                        <p>Full colour/Shaded/Optional background: $60</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
