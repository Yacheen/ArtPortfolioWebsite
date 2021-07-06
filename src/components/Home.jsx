
import img1 from '../css/portfolioImages/image1.jpg'; 
import img2 from '../css/portfolioImages/image2.jpg'; 
import img3 from '../css/portfolioImages/image3.jpg'; 
import img4 from '../css/portfolioImages/image4.jpg'; 
import img5 from '../css/portfolioImages/image5.jpg'; 
import img6 from '../css/portfolioImages/image6.jpg'; 
import img7 from '../css/portfolioImages/image7.jpg'; 
import xqcMald from "../css/pricingImages/xqcmald.jpg";

export default function Home() {

    return (
        <section className="portfolio-wrapper">
            <div className="portfolio-introduction">
                <div className="portfolio-introduction-text-box">
                    <h2> My portfolio! </h2>
                    <p>I honestly have no idea what to put here but some introductory message would be epic and poggers</p>
                </div>
                <div className="portfolio-introduction-image">
                    <img src={xqcMald} alt="" />

                </div>
            </div>
            <div className="portfolio-gallery">
                <div className="portfolio-img-container">
                    <img src={img1} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>
                </div>

                <div className="portfolio-img-container">
                    <img src={img2} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>
                </div>
                
                <div className="portfolio-img-container">
                    <img src={img3} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>

                </div>
                <div className="portfolio-img-container">
                    <img src={img4} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>
                </div>

                <div className="portfolio-img-container">
                    <img src={img5} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>
                </div>

                <div className="portfolio-img-container">
                    <img src={img6} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>
                </div>

                <div className="portfolio-img-container">
                    <img src={img7} alt="" />
                    <div className="image-description">
                        <p>sample text</p>
                        <p>sample text</p>
                    </div>
                </div>
           
            </div>
        </section>
    )
}
