import React from 'react';
import Background from '../components/Background';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Card } from 'react-bootstrap';

const EnterprisePage = () => {
    return (
        <Background>
            <CustomNavbar />

            <section id='introduction'>
                <h1>
                    Increase your <span className='span-blueColor'>AUDIENCE</span>, <br />
                    Boost your <span className='span-greenColor'>SALES</span> with <br />
                    <span className='span-gradient'>EasyMarket Enterprise</span> 
                </h1>

                {/* click to action */}
                <p className='text-center'>Get it on</p>
                <div className='d-flex justify-content-center'>
                    <div className='cta'>
                        <Button style={{ backgroundColor: '#00d662', color: '#fefefe' }} href='https://link-to-easymarket-enterprise-app-playstore-download'>
                            Play Store
                        </Button>
                    </div>
                    
                    <div className='cta'>
                        <Button style={{ backgroundColor: '#188dcf', color: '#fefefe' }} href='https://link-to-easymarket-enterprise-app-appstore-download'>
                            App Store
                        </Button>
                    </div>
                </div>
            </section>

            <section id='why-use'>
                <h2>Why Use EasyMarket Enterprise</h2>
                <div className='card-container'>
                    <Card className='mb-3' style={{ backgroundColor: '#1a1b25', color: '#fefefe', borderRadius: '15px' }}>
                        <Card.Body>
                            <div>
                                <p>Reach potential customers Faster</p>
                            </div>
                            <div>
                                <p>Changing the <span className='span-greenColor'>FUTURE</span> of Marketing with <span className='span-blueColor'>EasyMarket</span></p>
                            </div>
                            <div className='cta'>
                                <Button variant='success' href='#introduction'>Download EasyMarket Enterprise App</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    {/* Add more cards as needed */}
                </div>
            </section>

            <section id='user-guide'>
                <h2>User Guide</h2>
                <p>Step-by-step instructions on how to use EasyMarket Enterprise.</p>
                <div className='card-container'> {/* create as a slide card later */}
                    <Card className='mb-3' style={{ backgroundColor: '#1a1b25', color: '#fefefe', borderRadius: '15px' }}>
                        <Card.Body>
                            <div>
                                <p>Reach potential customers Faster</p>
                            </div>
                            <div>
                                <p>Changing the <span className='span-greenColor'>FUTURE</span> of Marketing with <span className='span-blueColor'>EasyMarket</span></p>
                            </div>
                            <div className='cta'>
                                <Button variant='success' href='#introduction'>Download EasyMarket Enterprise App</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    {/* Add more cards as needed */}
                </div>
            </section>

            <section id='popular-questions'>
                <h2>Popular Questions</h2>
                <p>Find answers to common questions about EasyMarket Enterprise.</p>
            </section>

            <section id='testimonies'>
                <h2>Feedbacks</h2>
                <p>What they say about us</p>
                <div className='card-container'> {/* create as a slide card later */}
                    <Card className='mb-3' style={{ backgroundColor: '#1a1b25', color: '#fefefe', borderRadius: '15px' }}>
                        <Card.Body>
                            <div>
                                <p>Reach potential customers Faster</p>
                            </div>
                            <div>
                                <p>Changing the <span className='span-greenColor'>FUTURE</span> of Marketing with <span className='span-blueColor'>EasyMarket</span></p>
                            </div>
                            <div className='cta'>
                                <Button variant='success' href='#introduction'>Download EasyMarket Enterprise App</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    {/* Add more cards as needed */}
                </div>
            </section>

            <section id='api-documentation'></section>

            <Footer />
        </Background>
    );
};

export default EnterprisePage;
