import s from "./footer.module.css";

const Footer = () => {
  // console.log('Hello world');
  return (
    <div>
      <a href="" className={`${s.iconButton} ${s.twitter}`}>
        <i className={s.iconTwitter}></i><span></span>
      </a>
      <a href="" className={`${s.iconButton} ${s.facebook}`}>
        <i className={s.iconFacebook}></i><span></span>
      </a>
      <a href="" className={`${s.iconButton} ${s.googlePlus}`}>
        <i className={s.iconGooglePlus}></i><span></span>
      </a>
    </div>
  );
};

export default Footer;
