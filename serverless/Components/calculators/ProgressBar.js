import React from "react";
import styles from "../../styles/ProgressBar.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { signIn } from "next-auth/react";
import { Button } from "react-bootstrap";
import Link from "next/link";
const ProgressBar = (data) => {
  const categories = data.categories;
  const categoriesCount = data.categoriesCount;
  const userId = data.userId;
  const type = data.type;

  if (userId != null) {
    return (
      <div className="justify-content-center">
        <div className={styles.container}>
          {categories.map((category, i) => (
            <div className={styles.column}>
              <div className={styles.row} style={{ marginTop: "30px" }}>
                <h1 className={styles.h1}>{category.name}</h1>
              </div>
              <div className={styles.row}>
                <div className={styles.progressBar}>
                  <CircularProgressbar
                    value={categoriesCount[i]}
                    text={categoriesCount[i] + "%"}
                    styles={buildStyles({
                      textSize: "28px",
                      textColor: "black",
                      trailColor: "#A5A5AF",
                    })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={`/user/logs`}>
          <Button className={styles.button}>View Logs</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <button
        className="btn btn-secondary"
        style={{ marginTop: "30px", background: "#57BC90" }}
        onClick={() => signIn()}
      >
        Sign in to view progress
      </button>
    );
  }
};

export default ProgressBar;
