import Image from "next/image";
import blocks from "../../public/blocks2.png";
import styles from "./page.module.css";
import AOSInit from "./AOSInit";

export default function Home() {
	return (
		<main className={styles.main}>
			<AOSInit />
			<Image
				className={styles.logo}
				width={250}
				height={50}
				src="/HypertroveVenturesLogo.png"
				alt="Hypertrove Ventures"
				data-aos="fade-in"
			/>
			<div className={styles.flex}>
				<div className={styles.flexLeft}>
					<h1 className={styles.h1} data-aos="zoom-up">
						Elevate Your
						<br />
						Web3 Project
					</h1>
					<p className={styles.p} data-aos="fade-up">
						At HyperTrove Ventures, we&apos;re dedicated to
						propelling web3-based projects and their surrounding
						ecosystems into new heights.
						<br />
						<br /> By investing in the brightest web3 founders
						within the crypto space, we aim to fast-track your
						project&apos;s growth and success.
					</p>
					<div
						className={styles.buttons}
						data-aos="zoom-in"
						data-aos-delay="500"
						data-aos-offset="0"
					>
						<a
							href="https://forms.gle/SmGLMYbSeo3PQsGcA"
							target="__blank"
							className={styles.button}
						>
							Pitch To Us
						</a>
						<a
							href="https://x.com/hyper_trove"
							target="__blank"
							className={styles.secondaryButton}
						>
							Follow on{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className={styles.icon}
							>
								<path
									fill="#e2b9ff"
									d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
								/>
							</svg>
						</a>
					</div>
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
