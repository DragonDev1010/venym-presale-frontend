function Banner() {
    return(
        <section className="section_banner blue_light_bg banner_shape" data-z-index="1" data-bleed="-40" data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                        <div className="banner_text text_md_center">
                            <h1 className="animation" data-animation="fadeInUp" data-animation-delay="1.1s"> The First Major Blockchain Conglomerate!</h1>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="1.2s"> Venym is the first decentralized currency that promotes equitable ownership of real-world companies!</p>
                            <div className="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.3s"> 
                                <a href="#whitepaper" className="btn btn-default nav-link content-popup">Whitepaper <i className="ion-ios-arrow-thin-right"></i></a> 
                                <a href="#" className="btn btn-border">Buy Token Now! <i className="ion-ios-arrow-thin-right"></i></a> 
                            </div>
                            <div id="whitepaper" className="team_pop mfp-hide">
                                <div className="row m-0">
                                    <div className="col-md-7">
                                        <div className="pt-3 pb-3">
                                            <div className="title_default_dark title_border"> 
                                                <h4>Download Whitepaper</h4>
                                                <p>A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.</p>
                                                <p>The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.</p>
                                                <a href="#" className="btn btn-default">Download Now <i className="ion-ios-arrow-thin-right"></i></a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5"> 
                                        <img className="pt-3 pb-3" src="assets/images/whitepaper.png" alt="whitepaper"/> 
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                        <div className="banner_image_right res_md_mb_50 res_xs_mb_20 animation" data-animation-delay="1.5s" data-animation="fadeInRight"> 
                            <img alt="banner_vector1" src="assets/images/banner_img1.png"/> 
                        </div>
                    </div>
                </div>
                <div className="divider small_divider"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="token_rtinfo bg-white-tran box_shadow_none border_right m-0">
                            <div className="row text-center">
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <h3>4.7<span>/5</span></h3>
                                        <p>ICO Bench</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                        <h3>9.5<span>/5</span></h3>
                                        <p>ICO Marks</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                        <h3>4.1<span>/5</span></h3>
                                        <p>ICO Bazaar</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                        <h3>4.0<span>/5</span></h3>
                                        <p>ICO Ranker</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="1s">
                                        <h3>4.6<span>/5</span></h3>
                                        <p>ICO Track</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                                        <h3>4.3<span>/5</span></h3>
                                        <p>ICO Holder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="angle_bottom"></div>
        </section>
    )
}

export default Banner