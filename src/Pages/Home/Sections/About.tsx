function About() {
    return(
        <section className="about_shape_bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div className="title_default_dark title_border text-center">
                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">About The Cryptocash</h4>
                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Cryptocash is one of the most transformative technologies since the invention of the Internet. Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily participate in a permissionless and decentralized network.</p>
                        <a href="about.html" className="btn btn-info box_shadow animation" data-animation="fadeInUp" data-animation-delay="0.6s">Read More <i className="ion-ios-arrow-thin-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="divider large_divider"></div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="title_default_dark title_border">
                            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">How It Works?</h4>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions—ayments from one user to another on a decentralized network.</p>
                            <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="btn btn-default video animation" data-animation="fadeInUp" data-animation-delay="0.6s"><em className="ion-play"></em>Let's Start</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="work_box res_md_mt_20">
                                    <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <i className="ion ion-android-download"></i>
                                    </div>
                                    <div className="work_inner">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Download a Wallet</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin is received, stored, and sent using software known as a Bitcoin Wallet. Download the official Bitcoin Wallet for free.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work_box res_md_mt_20">
                                    <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <i className="ion-ios-locked"></i>
                                    </div>
                                    <div className="work_inner">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Safe & Secure</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">We take careful measures to ensure that your bitcoin is as safe as possible. Offline storage provides an important security measure against theft or loss. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work_box mt-4">
                                    <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <i className="ion ion-android-cart"></i>
                                    </div>
                                    <div className="work_inner">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Buy & Sell</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Blockchain works with exchange partners all around the world to make buying bitcoin in your wallet both a seamless and secure experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work_box mt-4">
                                    <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <i className="ion-android-exit"></i>
                                    </div>
                                    <div className="work_inner">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">A Better User Interface</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin Core wallet has features most other wallets don't have. But if you don't need them, you can use several other wallets on top of Bitcoin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded_shape"></div>
        </section>
    )
}

export default About