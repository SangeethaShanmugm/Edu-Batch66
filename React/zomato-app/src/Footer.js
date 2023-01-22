import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Copyright Developer 2022. All Rights Reserved</h3>
        <div className="fotDiv">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fotDiv">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fotDiv noBorder">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="social">
          <center>
            <a href="www.facebook.com/" target="_blank">
              <img
                src="https://i.ibb.co/dtzG625/facebook.png"
                alt="fb"
                className="socialImg"
              />
            </a>
            <a href="www.instagram.com/" target="_blank">
              <img
                src="https://i.ibb.co/19H5LvT/insta.png"
                alt="insta"
                className="socialImg"
              />
            </a>
            <a href="www.youtube.com/" target="_blank">
              <img
                src="https://i.ibb.co/w07K2Vn/youtube1.png"
                alt="yt"
                className="socialImg"
              />
            </a>
          </center>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
