import Image from "next/image";
import blocks from "../../public/blocks2.png";
import styles from "./page.module.css";
import AOSInit from "./AOSInit";

export default function Home() {
  return (
    <main className={styles.main}>
      <AOSInit/>
      <Image className={styles.logo} width={250} height={50} src="/HypertroveVenturesLogo.png" alt="Hypertrove Ventures" data-aos="fade-in" />
      <div className={styles.flex}>
        <div className={styles.flexLeft}>
          <h1 className={styles.h1} data-aos="zoom-up">Elevate Your<br/>Cardano Project</h1>
          <p className={styles.p} data-aos="fade-up">
            At HyperTrove Ventures, we&apos;re dedicated to propelling Cardano-based projects and their surrounding ecosystems into new heights. By investing in the brightest teams within the crypto space, we aim to fast-track your project&apos;s growth and success.
          </p>
          <a href="https://forms.gle/SmGLMYbSeo3PQsGcA" className={styles.button} data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">Pitch To Us</a>
        </div>
        <div className={styles.flexRight}>
          <Image
            src={blocks}
            className={styles.image}
            alt="cubes blocks"
            layout="responsive"
            data-aos="fade-left"
          />
        </div>
        
      </div>

    </main>
  );
}
