"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import Feed from "@/app/feed/page";
import styles from "./mobile-frame.module.css";
import { MainAppStyle } from "./style";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <MainAppStyle>
        <div className={styles.frameContainer}>
          <div className={styles.appContent}>
            <Feed />
          </div>
        </div>
      </MainAppStyle>
    </ThemeProvider>
  );
}
