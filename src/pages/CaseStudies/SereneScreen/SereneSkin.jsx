import styles from "./style.module.css"
import Serene from "../../../assets/casestudies/SereneSkin/main-image.png"
import Title1 from "../../../assets/casestudies/SereneSkin/title-1.png"
import Design from "../../../assets/casestudies/SereneSkin/design.png"
import Title2 from "../../../assets/casestudies/SereneSkin/title-2.png"
import B1 from "../../../assets/casestudies/SereneSkin/bottel-1.png"
import B2 from "../../../assets/casestudies/SereneSkin/bottel-2.png"
import B3 from "../../../assets/casestudies/SereneSkin/bottel-3.png"
import Img8 from "../../../assets/casestudies/SereneSkin/10002 1.png"
import B4 from "../../../assets/casestudies/SereneSkin/bottel 3 1.png"
import B5 from "../../../assets/casestudies/SereneSkin/bottel 1 8.png"
import Presentation from "../../../assets/casestudies/SereneSkin/presention 1 1.png"
import B6 from "../../../assets/casestudies/SereneSkin/bottel 15 1.png"
import B7 from "../../../assets/casestudies/SereneSkin/bottel 17 (1) 1.png"
import AnimatedComponent from "../../../components/AnimatedComponent"

function SereneSkin() {
  return (
    <AnimatedComponent>
    <main>
        <div className={styles.maincontainer}>
          <div className={styles.mainpart}>
            <div className={styles.headingtext}>
              <p>Serene Skin</p>
              <p>A skincare brand</p>
            </div>
            <img
              src={Serene}
              alt="Serene Skin"
            />
            <section className={styles.text}>
              <p>Overview</p>
              <p>
                Serene Skin is a new skincare brand in India that encourages
                self-love via natural and ethical products. They distinguish
                themselves from other skincare firms by providing new products
                that every individual may use.
              </p>
            </section>
            <hr />
            <section className={styles.text}>
              <p>Branding</p>
              <p>
                Serene Skin is a brand that encourages people to feel confident
                and inspired; our objective was to design the brand's branding
                and packaging.
                <br />
                <br />
                We wanted to make it a luxury and bold skincare brand that
                promotes diversity, inclusivity, and self-care, a brand that may
                encourage a positive change in how people perceive their skin.
              </p>
            </section>
            <hr />
            <section className={styles.text}>
              <p>Color Palette</p>
              <p>
                Red is not a color that is utilized universally or frequently in
                skincare brands. Colors often associated with skincare firms, on
                the other hand, are more muted, such as white, pastel tones, and
                shades of blue and green. We chose the strong tone of red
                because Serene Skin helps people to feel bold, confident, and
                inspired.
              </p>
            </section>
            <img className={styles.imgpart}
              src={Title1}
              alt="Serene Skin"

            />
            <section className={styles.images}>
            <img src={Design} alt="Serene Skin" />
            <img src={Title2} alt="Serene Skin" />
            </section>
            <section className={styles.text}>
            <p>Packaging</p>
            <p>
              Because skincare products are mostly in liquid form, water, a
              basic form of nature, is the major inspiration for our product
              packaging design. We worked on the packaging design for the key
              skincare products, which include serum, moisturizer, and
              sunscreen. The shapes of the bottles inside the glass container
              that holds the cream are curvy but structure-based, resembling
              droplets and ripples of water. The shapes and sizes of the pumps
              on the bottle are designed to be handy and ergonomically simpler
              to use for the audience. The inside of the bottle is tinted with
              the brand's red identity. The heights of the bottles vary
              depending on the products given and the consumers' needs.
            </p>
          </section>
          <section className={`${styles.images} ${styles.threeimages}`}>
            <img src={B1} alt="Serene Skin" />
            <img src={B2} alt="Serene Skin" />
            <img src={B3} alt="Serene Skin" />
          </section>
          <img className={styles.imgpart}
            src={Img8}
            alt="Serene Skin"
          />
          <section className={styles.images}>
            <img src={B4} alt="Serene Skin" />
            <img src={B5} alt="Serene Skin" />
          </section>
          <img className={styles.imgpart}
            src={Presentation}
            alt="Serene Skin"
          />
          <section className={styles.images}>
            <img src={B6} alt="Serene Skin" />
            <img src={B7} alt="Serene Skin" />
          </section>
          </div>
        </div>
      </main>
      </AnimatedComponent>
  ) 
}

export default SereneSkin