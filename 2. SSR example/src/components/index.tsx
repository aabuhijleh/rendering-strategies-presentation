import React, { useEffect, useState } from "react";
import type { AsyncFC } from "../types";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Home 🏠</h1>
      <button onClick={() => console.log("button clicked")}>Click me</button>
    </>
  );
};

export const Hello: AsyncFC = ({ staticContext }) => {
  const [data, setData] = useState(staticContext || window.__initialData__);

  useEffect(() => {
    if (window.__initialData__) {
      delete window.__initialData__;
    } else {
      const generateData = async () => {
        const result = await Hello.preloadData?.();
        setData(result);
      };
      generateData();
    }
  }, []);

  return (
    <>
      <h1>Hello {data?.hello}</h1>
    </>
  );
};

Hello.preloadData = async () => {
  return await Promise.resolve({ hello: "world" });
};

export const Fourohfour: React.FC = () => {
  return (
    <>
      <h1>404 💀</h1>
    </>
  );
};
