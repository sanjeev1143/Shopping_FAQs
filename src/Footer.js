import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3><DiamondIcon htmlColor='#fff' sx={{ fontSize: "7vh" }} />Diamond<span>Jewellery</span></h3>

                <p className="footer-links">
                    <a href="#">Home</a>
                    ·
                    <a href="#">Blog</a>
                    ·
                    <a href="#">Pricing</a>
                    ·
                    <a href="#">About</a>
                    ·
                    <a href="#">Faq</a>
                    ·
                    <a href="#">Contact</a>
                </p>

                <p className="footer-company-name">DiamondJewellery &copy; 2021</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Delhi </span> IND(India)</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 0000000000</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:sanjeevteja143@gmail.com">sanjeevteja143@gmail.com
                    </a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    DiamondJewellery is a Jewellery company which comes with latest designed Ornaments  &amp; 100% original Diamonds.
                </p>

                <div className="footer-icons">

                    <a href="#" ><i className="fa fa-facebook"></i></a>
                    <a href="#" ><i className="fa fa-twitter"></i></a>
                    <a href="#" ><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
    )
}

export default Footer
