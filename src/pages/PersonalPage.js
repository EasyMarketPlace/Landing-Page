import React from 'react';
import Background from '../components/Background';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Card } from 'react-bootstrap';

const PersonalPage = () => {
    return (
        <Background>
            <CustomNavbar/>

            <section id='introduction'>
                <h1>
                    Increase your <span className='span-blueColor'>AUDIENCE</span>, <br />
                    boost your <span className='span-greenColor'>SALES</span> with <br/> 
                    {/* larger **easymarket enterprise** font than remaining texts*/}
                    <span className='span-lightGreenBlueColor'>EasyMarket Enterprise</span> 
                </h1>

                {/* click to action */}
                <img src='' alt='smilley emoji in svg from figma file. float or align to the left' />
                <p>Get it on</p>
                <div className='flex-container'>
                    <div className='cta'>
                        <Button variant='success' href='https://link-to-easymarket-enterprise-app-appstore-download'>
                            App Store
                        </Button>
                    </div>
                    
                    <div className='cta'>
                        <Button variant='success' href='https://link-to-easymarket-enterprise-app-playstore-download'>
                            Play Store
                        </Button>
                    </div>
                </div>
                <img src='' alt='rocket emoji in svg from figma file. float or align to the right' />
            </section>

            <section id='why-use'>
                <h2>why Use EasyMarket Enterprise</h2>
                <div className='card-container'>
                    <Card className='mb-3' style={{backgroundColor:'#188dcf', color:'#fefefe'}}>
                        <Card.Body>
                            <div>
                                <img className='span-coin-emoji'alt='align emoji to the left'/>
                                <p>Reach potential customers Faster</p>
                            </div>
                            <div>
                                <p>Changing the <span className='span-greenColor'>Future</span> of Marketting with <span className='span-blueColor'>EasyMarket</span></p>
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
            </section>

            <section id='popular-questions'>
                <h2>Popular Questions</h2>
                <p>Find answers to common questions about EasyMarket Enterprise.</p>
            </section>

            <Footer />
        </Background>
    );
};

export default PersonalPage