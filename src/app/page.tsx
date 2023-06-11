import styles from "./page.module.css";
import Canvas from "@/components/Canvas";

export default function Home() {
	return (
		<>
			<Canvas />
			<main className={styles.main}></main>
		</>
	);
}
