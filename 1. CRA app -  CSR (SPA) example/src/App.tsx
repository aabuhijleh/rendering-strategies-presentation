import React from "react";

export const App: React.FC = () => {
  return (
    <main
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>This is rendered in the client 🔥</h1>
    </main>
  );
};
