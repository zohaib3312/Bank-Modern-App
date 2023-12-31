
import { Billing, Business, Button, CTA, CardDeal, Client, FeedBackCard, Footer, GetStarted, Hero, Navbar, States, Testimonial } from './Components'
import styles from './style'

function App() {


  return (
    <div className='bg-primary text-black  w-full overflow-hidden'>



      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}

      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Anothers Components */}

      <div className={`bg-primary  ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <States />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client />
          <CTA />
          <Footer />



        </div>
      </div>




    </div>
  )
}

export default App
