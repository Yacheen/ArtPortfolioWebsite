

export default function Portfolio() {

    const portfolioImages = require.context('../css/portfolioImages', false);
    console.log(portfolioImages);
    
    return (
        <section className="portfolio-wrapper">
            <div className="portfolio-introduction">
                <div className="portfolio-introduction-text-box">
                    <h2> My portfolio! </h2>
                    <p>I honestly have no idea what to put here but some introductory message would be epic and poggers</p>
                </div>
                <div className="portfolio-introduction-image">
                    <img src="" />

                </div>
            </div>
            <div className="portfolio-gallery">
                
            {   
            
                portfolioImages.map((item, index) => {
                    //create a div element with grid classname, then append it to portfolio-gallery
                    
                    return (<div className={`grid-portfolio-image image-${index}`}>
                            <img src={`../css/portfolioImages/${item}`} alt=""/>
                            </div>)
                })
                
            }
            </div>
        </section>
    )
}
