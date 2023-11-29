import styles from "../style";
import { phones } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="calculate_average_stock_price" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[52px]">
            Brolin{" "}
            <span className="text-gradient">Apps</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[55.8px] leading-[40px] w-full">
          Gav & Calorie Portions Calculator.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        For those who need a simple app to figure out their average stock value or how many calories are in a portion. 
        The Calorie Portions Calculator and Gav can both be of significant help.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={phones} alt="calorie_counter" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[10%] h-[10%] left-20 white__gradient" />
        <div className="absolute z-[1] w-[70%] h-[70%] bottom-25 orange__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
