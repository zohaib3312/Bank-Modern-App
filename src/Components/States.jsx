import { stats } from "../Constants";
import styles from "../style";


const States = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
      {
        stats.map((sta) => (

          <div key={sta.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">{sta.value}</h4>
            <p className="font-poppins font-normal  xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3  ">{sta.title}</p>
 
          </div>

        ))
      }
    </section>
  )
}

export default States
