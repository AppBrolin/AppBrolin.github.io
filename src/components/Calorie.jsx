import { calorie, google } from "../assets";
import styles, { layout } from "../style";

const Calorie = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
    <h1 className="font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[55.8px] leading-[40px] w-full">
      Calorie Portions Calculator
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Calorie Portions Calculator app helps users calculate the number of calories in a weighted portion. 
        In addition, it tracks your total calories from added items.
        </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      <a href="https://play.google.com/store/apps/details?id=com.brolin.calorie" target="_blank" rel="noreferrer">
        <img src={google} alt="google_play_calorie" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </a>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={calorie} alt="how_many_calories" className="w-[100%] h-[100%]" />
      <div className="absolute z-[0] w-[80%] h-[80%] -right-[70%] rounded-full orange__gradient bottom-40" />

    </div>
  </section>
);
export default Calorie;
