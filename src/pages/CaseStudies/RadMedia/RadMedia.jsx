import styles from "./style.module.css"
import img1 from "../../../assets/casestudies/RadMedia/Artboard 1@4x-100 (1) 1.png"
import img2 from "../../../assets/casestudies/RadMedia/signage B&W 1.png"
import img3 from "../../../assets/casestudies/RadMedia/Free_Poster_Mockup 1.png"
import img4 from "../../../assets/casestudies/RadMedia/Duct_Tape_Mockup_ everywhere 1.png"
import img5 from "../../../assets/casestudies/RadMedia/Free_Business_Card_Mockup_3 1.png"
import img6 from "../../../assets/casestudies/RadMedia/Artboard 9@4x-100.jpg"
import img7 from "../../../assets/casestudies/RadMedia/5229B2E7-AC75-4089-9A0D-BFCF3F82C6C5 (1).png"
import img8 from "../../../assets/casestudies/RadMedia/image 1.png"
import img9 from "../../../assets/casestudies/RadMedia/image 2.png"
import img10 from "../../../assets/casestudies/RadMedia/Untitled-1 2.png"
import img11 from "../../../assets/casestudies/RadMedia/Rectangle 4.png"
import img12 from "../../../assets/casestudies/RadMedia/Rectangle 5.png"
import img13 from "../../../assets/casestudies/RadMedia/Rectangle 6.png"
import img14 from "../../../assets/casestudies/RadMedia/Rectangle 7.png"
import img15 from "../../../assets/casestudies/RadMedia/57749781-0e95-45f4-88ed-72bb42d46749 1.png"
import img16 from "../../../assets/casestudies/RadMedia/image7 (1).jpeg"
import img17 from "../../../assets/casestudies/RadMedia/image6 1.png"
import img18 from "../../../assets/casestudies/RadMedia/image11 (1).jpeg"
import img19 from "../../../assets/casestudies/RadMedia/Artboard 1@4x-100 (2) 1.png"
import img20 from "../../../assets/casestudies/RadMedia/jocelyn-morales-qqIj5pV48-s-unsplash (1) 1 (1).png"

function RadMedia() {
  return (
    <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>RAD Media</p>
            <p>Media House</p>
          </div>
          <div className={styles.imgcontainer}>
            <img
            src={img1}
                alt="RadMedia"
            />
          </div>
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              RAD media is a part video agency, part digital media company,
              combined all things. RAD media structures as a digital agency
              meeting a media production company bringing two halves of the
              industry together to form a one-stop shop for content creation. An
              agency that speaks gen-z, that speaks new age developments. It is
              upbeat, young and friendly. Its gives you the solution taking the
              ever changing trends in content creation in mind with no bounds to
              the medium from photography to videography.
            </p>
          </section>
          <hr />
          <section className={styles.text}>
            <p>Branding</p>
            <p>
              RAD media’s identity is an abstract shape with each line
              representing a part of photography and videography. The whole
              aesthetic of the brand is simple and clean yet pop-py.
            </p>
          </section>
          <section className={styles.image}>
            <img
              src={img2}
              alt="RadMedia"
            />
            <img
              src={img3}
              alt="RadMedia"
            />
          </section>
          <section className={styles.images}>
            <img
              src={img4}
              alt="RadMedia"
            />
          </section>
          <section className={styles.image}>
            <img
              src={img5}
              alt="RadMedia"
            />
            <img
              src={img6}
              alt="RadMedia"
            />
          </section>
          <section className={styles.text}>
            <p>Logo Philosophy</p>
            <p>
              The logo has 3 layers of rectangular shaped letters, each
              representing a part of videography. Starting up from the base, it
              starts with the groundwork and laying in the foundation to any
              good output, a good composition is necessary and all of these
              elements are visible in the logo based on its placement.
            </p>
          </section>
          <section className={styles.imagetext}>
            <img
              src={img7}
              alt="RadMedia"
            />
            <div className={styles.imagetextpart}>
              <p>Output</p>
              <p>Composition</p>
              <p>Groundwork</p>
            </div>
          </section>
          <section className={styles.imageparttwo}>
            <img src={img8}alt="RadMedia" />
            <img src={img9}alt="RadMedia" />
          </section>
          <section className={styles.text}>
            <p>Color Palette</p>
            <p>
              The logo has 3 layers of rectangular shaped letters, each
              representing a part of videography. Starting up from the base, it
              starts with the groundwork and laying in the foundation to any
              good output, a good composition is necessary and all of these
              elements are visible in the logo based on its placement.
            </p>
          </section>
          <section className={styles.images}>
            <img src={img10}alt="RadMedia" />
          </section>
          <div className={styles.imgcontainer}>
            <div>
              <img
                src={img11}
                alt="Rad Media"
              />
              <p className={styles.captionTopLeft} style={{ color: "white" }}>
                Deep Blue
              </p>
            </div>
            <div>
              <img
                src={img12}
                alt="Rad Media"
              />
              <p className={styles.captionTopLeft}>Visible White</p>
            </div>
            <div>
              <img
               src={img13}
                alt="Rad Media"
              />
              <p className={styles.captionTopLeft} style={{ color: "white" }}>
                Cool Grey
              </p>
            </div>
            <div>
              <img
                src={img14}
                alt="Rad Media"
              />
              <p className={styles.captionTopLeft}>Electric Blue</p>
            </div>
          </div>
          <section className={styles.text}>
            <p>Supporting Graphics</p>
          </section>
          <section className={styles.image}>
            <img 
            src={img15}
              alt="RadMedia"
            />
            <img src={img16} alt="RadMedia" />
          </section>
          <section className={styles.image}>
            <img src={img17} alt="RadMedia" />
            <img src={img18} alt="RadMedia" />
          </section>
          <section className={styles.images}>
            <img
              src={img19}
              alt="RadMedia"
            />
          </section>
          <div className={styles.headings}>
            <p>Serene Skin</p>
            <p>A skincare brand</p>
          </div>
          <div className={styles.last}>
            <img
              src={img20}
              alt="Serene SKin"
            />
            <a href="/works/sereneskin">
              <button className={styles.button}>View Case Study</button>
            </a>
          </div>
        </div>
      </main>
  )
}

export default RadMedia