import React from "react";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background:
      "no-repeat cover/50% url(https://asset.kindedemo.com/evolve-ai/bg.png)",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
