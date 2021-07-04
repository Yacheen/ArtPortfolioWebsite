import React from 'react'

export default function Portfolio() {
    let portfolioImages = '../css/portfolioimages';
    return (
        <section className="portfolio-wrapper">
            <div className="portfolio-introduction">
                <div className="portfolio-introduction-text-box">

                </div>
                <div className="portfolio-introduction-image">

                </div>
            </div>
            <div className="portfolio-gallery">
                {
            
            portfolioImages.forEach((image, index) => {
                //create a div element with grid classname, then append it to portfolio-gallery
                
            })
                }
            </div>
            
            
            
            
        </section>
    )
}
