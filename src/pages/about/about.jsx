import React from "react";
import AnimatedComponent from "../../components/AnimatedComponent";
import styles from "./style.module.css";
import img1 from "../../assets/aboutus/kelly-sikkema-o2TRWThve_I-unsplash 1.png";
import img2 from "../../assets/aboutus/balazs-ketyi-LPWl2pEVGKc-unsplash 1.png";

function About() {
  return (
    <AnimatedComponent>
      <div className={styles.container}>
        <section className={styles.text}>
          WE ARE DISRUPTIVE!
          <br />
          We are here to create, to play, to be the curious ones, <br />
          to connect the dots, to think and breathe design, to
          <br />
          be strategists and storytellers... <br />
          To go further.
        </section>
        <div className={styles.textincolor}>
          <p>
            We are connections enablers We start with people.
            <br /> We invest in discovery and understanding, ensuring our
            approach
            <br /> keeps empathy and people at its core. <br />
            Through this we seek to connect, captivate and inspire;
            <br /> creating meaningful and measurable outcomes in businesses,
            <br />
            partnerships, and culture.
          </p>
        </div>
        <section className={styles.text}>
          <p className={styles.heading}>OUR PHILOSOPHY</p>
          <p>
            Understanding and empathizing is the first step to being able to
            create, and a clear and consistent purpose is the key to creating
            something truly meaningful.
          </p>
        </section>
        <hr />
        <section className={styles.text}>
          <p className={styles.heading}>OUR CAPABILITIES</p>
          <p>
            We design and help create brands, products, and experiences, from
            conceptual to feasible; from strategy to creativity; from digital to
            physical.
          </p>
        </section>
        <section className={styles.images}>
          <img src={img1} alt="bakerstreet" />
        </section>
        <section className={styles.image}>
          <img src={img2} alt="bakerstreet" />
        </section>
        <section className={styles.contactus}>
          <div className={styles.textpart}>
            <p>
              So, you have a project. We can take it <br />
              to another level!
            </p>
            <p>Schedule a meeting with us.</p>
          </div>
          <div>
            <a href="/contactus">
                <button className={styles.contact}>Get in touch!</button>
            </a>
          </div>
        </section>
      </div>
    </AnimatedComponent>
  );
}

export default About;
