
import img1 from '../css/portfolioImages/image1.jpg'; 
import img2 from '../css/portfolioImages/image2.png'; 
import img3 from '../css/portfolioImages/image3.png'; 
import img4 from '../css/portfolioImages/image4.png'; 
import img5 from '../css/portfolioImages/image5.png'; 
import img6 from '../css/portfolioImages/image6.png'; 
import img7 from '../css/portfolioImages/image7.jpg'; 


export default function Home() {

    return (
        <section className="portfolio-wrapper">
            <div className="portfolio-introduction">
                <div className="portfolio-introduction-text-box">
                    <h2> My portfolio! </h2>
                    <p>I honestly have no idea what to put here but some introductory message would be epic and poggers</p>
                </div>
                <div className="portfolio-introduction-image">
                    <img src={img7} alt="" />

                </div>
            </div>
            <div className="portfolio-gallery">
                <div className="portfolio-img-container image1">
                    
                    <img src={img1} alt="" />
                    <div className="image-description">
                        <p className="text-one">sample text</p>
                        <p className="text-two" >sample text</p>
                    </div>
                

                    </div>
                    

                <div className="portfolio-img-container image2">
                    <img src={img2} alt="" />
                    <div className="image-description">
                        <p className="text-one">sample text</p>
                        <p className="text-two">sample text</p>
                    </div>
                </div>
                
                <div className="portfolio-img-container image3">
                    <img src={img3} alt="" />
                    <div className="image-description">
                        <p className="text-one">sample text</p>
                        <p className="text-two">sample text</p>
                    </div>

                </div>
                <div className="portfolio-img-container image4">
                    <img src={img4} alt="" />
                    <div className="image-description">
                        <p className="text-one">sample text</p>
                        <p className="text-two">sample text</p>
                    </div>
                </div>

                <div className="portfolio-img-container image5">
                    <img src={img5} alt="" />
                    <div className="image-description">
                        <p className="text-one">sample text</p>
                        <p className="text-two">sample text</p>
                    </div>
                </div>

                <div className="portfolio-img-container image6">
                    <img src={img6} alt="" />
                    <div className="image-description">
                        <p className="text-one">sample text</p>
                        <p className="text-two">sample text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
