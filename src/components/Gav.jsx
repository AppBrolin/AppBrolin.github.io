import { gav, google } from "../assets";
import styles, { layout } from "../style";

const Gav = () => (
  <section id="calorie_portions_calculator" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={gav} alt="stocks_average_value" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] -left-1 w-[25%] h-[20%] rounded-full white__gradient" />
      <div className="absolute z-[3] w-[80%] h-[80%] -left-2 bottom-0 rounded-full orange__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
    <h1 className="font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[55.8px] leading-[40px] w-full">
       Gav - Stocks Average Value
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The GAV app allows you to calculate your shares' average cost. 
        As well as the purchase price. 
        This app is especially useful if you are looking to add to stocks that you already own!
        </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <a href="https://play.google.com/store/apps/details?id=com.brolin.gav" target="_blank" rel="noreferrer">
        <img src={google} alt="google_play_stocks" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </a>
      </div>
    </div>
  </section>
);

export default Gav;
