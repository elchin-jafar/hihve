import classes from "./footer.module.css";

import instagram from "../../assets/footerIcons/Instagram.svg";
import linkedin from "../../assets/footerIcons/Linkedin.svg";
import facebook from "../../assets/footerIcons/Facebook.svg";
import twitter from "../../assets/footerIcons/Twitter.svg";
import github from "../../assets/footerIcons/Github.svg";
import google from "../../assets/footerIcons/Google.svg";
import pinterest from "../../assets/footerIcons/Pinterest.svg";

function Footer() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.leftSide}>
          <p className={classes.footerMainText}>
            Hihve is the trusted platform for College and High School athletes
          </p>
          <p className={classes.email}>contact@hihve.com</p>
          <p className={classes.subText}>Subscribe and get news</p>
          <div className={classes["form-input"]}>
            <input type="email" placeholder="Email address" id="email" />
            <label for="email">Email</label>
          </div>
        </div>

        <div className={classes.rightSide}>
          <p className={classes.breadcrumb}>
            Marketplace / Collections / Sports / Blog
          </p>
          <div className={classes.icons}>
            <img src={instagram} alt="instagram icon" />
            <img src={linkedin} alt="linkedin icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={github} alt="github icon" />
            <img src={google} alt="google icon" />
            <img src={pinterest} alt="pinterest icon" />
          </div>
        </div>
      </div>
      <div className={classes.final}>
        <p>Privacy Policy</p>
        <p>Term of service</p>
        <p>Language</p>
      </div>
    </>
  );
}

export default Footer;
