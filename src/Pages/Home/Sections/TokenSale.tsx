function TokenSale() {
    return(
        <section className="section_token blue_light_bg" data-z-index="1" data-bleed="-40" data-parallax="scroll" data-image-src="assets/images/token_bg.png">
            <div className="angle_top"></div>
            <div className="divider large_divider"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                        <div className="title_default_light title_border text-center">
                            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale</h4>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Join the industry leaders to discuss where the markets are heading. We accept token payments. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="token_sale">
                            <div className="tk_countdown text-center animation token_countdown_bg" data-animation="fadeIn" data-animation-delay="1s">
                                <div className="tk_counter_inner">
                                    <div className="tk_countdown_time animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2019/02/06 00:00:00"></div>
                                    <div className="progress animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={46} aria-valuemin={0} aria-valuemax={100} style={{width:"46%"}}> 46% </div>
                                        {/* <span className="progress_label" style="left: 30%"> <strong> 46,000 BCC </strong></span>
                                        <span className="progress_label" style="left: 75%"> <strong> 90,000 BCC </strong></span> */}

                                        <span className="progress_label" style={{left:"30%"}}> <strong> 46,000 BCC </strong></span>
                                        <span className="progress_label" style={{left:"75%"}}> <strong> 90,000 BCC </strong></span>

                                        <span className="progress_min_val">Sale Raised</span>
                                        <span className="progress_max_val">Soft-caps</span>
                                    </div>
                                    <a href="#" className="btn btn-default animation" data-animation="fadeInUp" data-animation-delay="1.4s">Buy Tokens <i className="ion-ios-arrow-thin-right"></i></a>
                                    <ul className="icon_list list_none d-flex justify-content-center">
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="1.5s"><i className="fa fa-cc-visa"></i></li>
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="1.6s"><i className="fa fa-cc-mastercard"></i></li>
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="1.7s"><i className="fa fa-bitcoin"></i></li>
                                        <li className="animation" data-animation="fadeInUp" data-animation-delay="1.8s"><i className="fa fa-paypal"></i></li>
                                    </ul>                        
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                            <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Starting time :</h6>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Apr 23, 2018 (Mon 10:00 AM)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                            <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Ending time :</h6>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">Jun 18, 2018 (Mon 12:00 PM)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                            <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="1s">Tokens exchange rate</h6>
                            <p  className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">1 ETH = 820 BCC, 1 BTC = 2150 BCC</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                            <div className="pr_box">
                                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Low - High 24h :</h6>
                                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">$ 6,455.83 - $ 7,071.42</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                            <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Total tokens sale</h6>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">850,000 BCC (8%)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                            <div className="pr_box">
                                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="1s">Acceptable Currency :</h6>
                                <p className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">BTC, Eth, Ltc, XRP</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="divider large_divider"></div>
            <div className="angle_bottom"></div>
        </section>
    )
}

export default TokenSale