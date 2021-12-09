import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="img">
      <h1 className="welcome">
        <strong> Welcome to H-E-B! </strong>
      </h1>
      <Link href="/inventory">
        <button className="btn" type="button">
          {" "}
          Check Inventory
        </button>
      </Link>
    </div>
  );
}
