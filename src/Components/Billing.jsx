import styles, { layout } from "../style"
import { apple, bill, google } from "../assets"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />


        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white-__gradient " />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-__gradient " />

      </div>


      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily controll your  <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam alias soluta ullam quibusdam rerum aliquam. Excepturi perferendis quae sit.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google" className="w-[128px] h-[42px] object-contain  cursor-pointer" />

        </div>
      </div>


    </section>
  )
}

export default Billing
