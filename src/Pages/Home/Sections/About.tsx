function About() {
    return(
        <section className="about_shape_bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div className="title_default_dark title_border text-center">
                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Enjoy profit sharing and equity growth from a handful of real-world businesses. </h4>
                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">VenymDAO presents a token with 0 fees to buy or sell. Holding the token gives you access to vote and create proposals for the betterment of the DAO. </p>
                        <a href="about.html" className="btn btn-info box_shadow animation" data-animation="fadeInUp" data-animation-delay="0.6s">Read More <i className="ion-ios-arrow-thin-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="divider large_divider"></div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="title_default_dark title_border">
                            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"> Real World Businesses</h4>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Venym will use it’s resources to build real world businesses from the ground up. We plan to step into large sectors such as music, fashion, and gaming entertainment. As you will soon see, this is not even half of what we will encompass.</p>
                            {/* <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="btn btn-default video animation" data-animation="fadeInUp" data-animation-delay="0.6s"><em className="ion-play"></em>Let's Start</a> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="title_default_dark title_border">
                            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Blockchain Games</h4>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"> We are in the process of conceptualizing a blockchain game that aims to change the world's perspective on the “Metaverse.” Expect more details about this game to surface as we continue to develop the concept.</p>
                            {/* <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="btn btn-default video animation" data-animation="fadeInUp" data-animation-delay="0.6s"><em className="ion-play"></em>Let's Start</a> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="title_default_dark title_border">
                            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Blockchain Utility</h4>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">You can expect many utilities such as an Exchange, NFT creator, NFT Marketplace, and utilities to support any of our other businesses!</p>
                            {/* <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="btn btn-default video animation" data-animation="fadeInUp" data-animation-delay="0.6s"><em className="ion-play"></em>Let's Start</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded_shape"></div>
        </section>
    )
}

export default About