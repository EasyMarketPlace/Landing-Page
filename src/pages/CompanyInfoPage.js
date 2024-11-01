import React from 'react';
import Background from '../components/Background';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Card } from 'react-bootstrap';

const CompanyInfoPage = () => {
    return (
        <Background>
            <CustomNavbar/>

            <section id='introduction'>
                <h1>
                    The A Team <b>TAT</b> a  community focussed tech solution provider based in Ilorin Kwara State <br /> Pioneering our solutions for <span className='span-blueColor'>OUR CUSTOMERS</span>, <br />
                    boosting <span className='span-greenColor'>BUSINESS SALES & ACCESSIBILITY, CUSTOMERS SAFETY & HEALTH, and NEARBY SHOPPING </span> with <br/> 
                    {/* larger **easymarket enterprise** font than remaining texts*/}
                    <span className='span-lightGreenBlueColor'>EasyMarket</span>.<br/> 
                    Directly impacting local communities and local economy is our priority. 
                </h1>

                {/* click to action */}
                <img src='' alt='smilley emoji in svg from figma file. float or align to the left' />
                <p>Get it on</p>
                <div className='flex-container'>
                    <div className='cta'>
                        <Button variant='success' href='#link-to-enterprise-page'>
                            Enterprise Page
                        </Button>
                    </div>
                    
                    <div className='cta'>
                        <Button variant='success' href='#link-to-personal-page'>
                            Personal Page
                        </Button>
                    </div>
                </div>
                <img src='' alt='rocket emoji in svg from figma file. float or align to the right' />
            </section>

            <section id='why-use'>
                <h2>why Use EasyMarket</h2>
                <div className='card-container'>
                    <Card className='mb-3' style={{backgroundColor:'#188dcf', color:'#fefefe'}}>
                        <Card.Body>
                            <div>
                                <img className='span-coin-emoji'alt='align emoji to the left'/>
                                <p>Amazing SHOPPING EXPERIENCE</p>
                            </div>
                            <div>
                                <p>Changing the <span className='span-greenColor'>Future</span> of Marketting with <span className='span-blueColor'>EasyMarket</span></p>
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

            <Footer />
        </Background>
    );
};

export default CompanyInfoPage