import styles from "../style";
import { brolinlogo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section id="privacy" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[2] flex flex-col justify-start mr-10">
        <img
          src={brolinlogo}
          alt="app_brolin"
          className="w-[266px] h-[72.14px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Gav - Stocks Average Value & Calorie Portions Calculator. {" "}   
           </p>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 App-Brolin. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        <span className="font-semibold ss:text-[20px] text-[20px] text-white sm:px-6 px-6 ss:leading-[19px] leading-[19px] w-full">
           <a href="/privacy-policy.html">Privacy Policy</a></span>
           
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
