import React, { useEffect } from "react";
import AnimatedComponent from "../../components/AnimatedComponent";
import styles from "./style.module.css";
import img1 from "../../assets/aboutus/kelly-sikkema-o2TRWThve_I-unsplash 1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import img2 from "../../assets/aboutus/haraay-understanding you.png";
import img3 from "../../assets/aboutus/haraay-market analysis.png";
import img4 from "../../assets/aboutus/haraay-01.png";
import img5 from "../../assets/aboutus/haraay-02.png";
import img6 from "../../assets/aboutus/haraay-proof of delivery.png";
import award1 from "../../assets/images/Screenshot 2023-10-25 at 5.37 1.png";
import award2 from "../../assets/images/Screenshot 2023-10-25 at 5.43 1.png";
import mainImage from "../../assets/aboutus/3.png";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const secpart = document.querySelector(`.${styles.awardsection}`);

    const handelColor = () => {
      if (secpart) {
        const scrollPosition = window.scrollY;
        const triggerPositionSec = secpart.offsetTop - window.innerHeight / 2;
        if (scrollPosition > triggerPositionSec) {
          secpart.classList.add(styles.changeColors);
        } else {
          secpart.classList.remove(styles.changeColors);
        }
      }
    };

    if (secpart) {
      window.addEventListener("scroll", handelColor);
    }

    return () => {
      if (secpart) {
        window.removeEventListener("scroll", handelColor);
      }
    };
  }, []);

  return (
    <AnimatedComponent>
      <div className={styles.container}>
        <section data-aos="fade-up" className={styles.text}>
          <div className={styles.headingtext}>
            <p>WE ARE DISRUPTIVE!</p>
            <p>
              We are here to create, to play, to be the curious ones, to connect
              the dots, to think and breathe design, to be strategists and
              storytellers... To go further.
            </p>
          </div>
          <div className={styles.headingtextimage}>
            <img src={mainImage} alt="mainImage" />
          </div>
        </section>
        <div data-aos="fade-up" className={styles.textincolor}>
          <p>
            We are connections enablers We start with people. We invest in
            discovery and understanding, ensuring our approach keeps empathy and
            people at its core. Through this we seek to connect, captivate and
            inspire; creating meaningful and measurable outcomes in businesses,
            partnerships, and culture.
          </p>
        </div>
        <section data-aos="fade-up" className={styles.text}>
          <p className={styles.heading}>OUR PHILOSOPHY</p>
          <p>
            Understanding and empathizing is the first step to being able to
            create, and a clear and consistent purpose is the key to creating
            something truly meaningful.
          </p>
        </section>
        <hr />
        <section data-aos="fade-up" className={styles.text}>
          <p className={styles.heading}>OUR CAPABILITIES</p>
          <p>
            We design and help create brands, products, and experiences, from
            conceptual to feasible; from strategy to creativity; from digital to
            physical.
          </p>
        </section>
        <section data-aos="fade-up" className={styles.images}>
          <img src={img1} alt="bakerstreet" />
        </section>
        <section className={styles.awardsection}>
          <section data-aos="fade-up" className={styles.awardshead}>
            <p className={styles.heading}>Not Bragging, But…</p>
            <p className={styles.disc}>
              Awards might not matter but the feeling you get when you win…
              that’s everything!
            </p>
          </section>
          <section data-aos="fade-up" className={styles.awards}>
            <div className={styles.awardsimage}>
              <Link
                className={styles.awardlink}
                to="https://innovativezoneindia.com/haraay-design-studio/"
                target="_blank"
              >
                <img src={award1} alt="bakerstreet" />
              </Link>
            </div>
            <div className={styles.awardsimage}>
              <Link
                className={styles.awardlink}
                to="https://www.designrush.com/best-designs"
                target="_blank"
              >
                <img src={award2} alt="bakerstreet" />
              </Link>
            </div>
          </section>
        </section>
        <div data-aos="fade-up" className={styles.marquee}>
          <div className={styles.marqueediv}>
            <span>OUR PROCESS</span>
          </div>
          <div className={styles.marqueediv}>
            <span>OUR PROCESS</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={`${styles.textincolor} ${styles.inwhite}`}
        >
          <p>
            Attention-worthy, shareable experiences don't just happen.They are
            the results of long, rocky, difficult and always inspired road to
            creative goodness at Haraay Studio. Why we do what we do says a lot
            about us, but doing what we do is intricate work. That's precisely
            why our process and our plan are our insights on market shifts,
            competitive landscape and understanding of what the people
            want.Coming up with stories that you can step inside of, are
            brilliantly designed and inventively delivered takes meticulously
            planned steps. Our aim is to remarkably engage key audiences
            worldwide and here's how we do it.
          </p>
        </div>
        <section data-aos="fade-up" className={styles.textimg}>
          <div className={styles.image}>
            <img src={img2} alt="hdsimage" className={styles.imagemain} />
          </div>
          <div className={styles.imagetxt}>
            <p className={styles.boldheading}>
              Understanding you is important{" "}
            </p>
            <p>
              At Haraay, everything begins with a discovery session. We roll up
              our sleeve, get ready to probe deeper and retrieve all critical
              information.
            </p>
          </div>
        </section>
        <section data-aos="fade-up" className={styles.textimg}>
          <div className={styles.imagetxt}>
            <p className={styles.boldheading}>Market Analysis</p>
            <p>
              At this stage, you will be in awe of how well we translate your
              goals into something distinct and identifiable. In a crowded
              marketplace, it's not enough to just be different; we help you
              forge an identity that is built to last and connects with your
              audience on a deeper level.
            </p>
          </div>
          <div className={styles.image}>
            <img src={img3} alt="hdsimage" className={styles.imageone} />
          </div>
        </section>
        <section data-aos="fade-up" className={styles.textimg}>
          <div className={styles.image}>
            <img src={img4} alt="hdsimage" className={styles.imageone} />
          </div>
          <div className={styles.imagetxt}>
            <p className={styles.boldheading}>
              Disruptive concepts that make noise
            </p>
            <p>
              This is where we connect all the dots. Details are important, but
              the big picture is what counts in the real marketplace. Leveraging
              your unique value propositions with unparalleled clarity and
              confidence, we help vour idea do one thing well.
            </p>
          </div>
        </section>
        <section data-aos="fade-up" className={styles.textimg}>
          <div className={styles.imagetxt}>
            <p className={styles.boldheading}> Differentiate</p>
            <p>
              This is the stage when everyone says "make us something
              unconventional." Researching, designing and building brands,
              experience and technologies, we breathe life into concepts that
              will change minds, generate curiosity and drive results for our
              clients.
            </p>
          </div>
          <div className={styles.image}>
            <img src={img5} alt="hdsimage" className={styles.imageone} />
          </div>
        </section>
        <section data-aos="fade-up" className={styles.textimg}>
          <div className={styles.image}>
            <img src={img6} alt="hdsimage" />
          </div>
          <div className={styles.imagetxt}>
            <p className={styles.boldheading}>Proof of delivery</p>
            <p>
              One last thing before the hand-off, the scope of testing is
              identified. We go through a number of experiments, run tests of
              all kinds and imagine different scenarios to ensure everything is
              as perfect as we think it is!
            </p>
          </div>
        </section>
        <section data-aos="fade-up" className={styles.faqsection}>
          <p className={styles.faqhead}>FAQS</p>
          <div className={styles.faq}>
            <p className={styles.question}>Why go with Haraay?</p>
            <p className={styles.ans}>
              Being one of India's leading creative agencies, we are known for
              creative, disruptive, out-of-the-box and innovative work that
              breaks industry standards.
            </p>
          </div>
          <div className={styles.faq}>
            <p className={styles.question}>
              What is creative design at Haraay?
            </p>
            <p className={styles.ans}>
              As a creative agency that's big on creative design thinking, it is
              central to all the ways in which we build commercial value for our
              clients. Creative design thinking and industry-leading designs at
              Haraay Studio together attract attention to your marketing,
              enhance the quality of your brand message and elevate brand
              experiences.
            </p>
          </div>
          <div className={styles.faq}>
            <p className={styles.question}>
              What kind of clients do we work with?
            </p>
            <p className={styles.ans}>
              We help small and medium brands in USA, Los Angeles, Chicago,
              London, Dubai, Sydney, Melbourne, Mumbai, Australia, Delhi,
              Bangalore and Pan India. We work with B2B, B2C and digital
              businesses across Technology, FMCG, E-commerce, Health and
              Wellness, Fashion, Beauty, Lifestyle and Entertainment.
            </p>
          </div>
        </section>
        <section data-aos="fade-up" className={styles.contactus}>
          <div className={styles.textpart}>
            <p>
              So, you have a project. We can take it <br />
              to another level!
            </p>
            <p>Schedule a meeting with us.</p>
          </div>
          <div>
            <Link to="/contactus">
              <button className={styles.contact}>Get in touch!</button>
            </Link>
          </div>
        </section>
      </div>
    </AnimatedComponent>
  );
}

export default About;
