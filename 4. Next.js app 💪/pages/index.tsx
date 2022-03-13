import type { NextPage } from "next";
import type { Contributor } from "types";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "components";
import styles from "styles/list.module.css";

const CsrPage: NextPage = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const { data } = await axios.get<Contributor[]>(
        "https://api.github.com/repos/facebook/react/contributors"
      );
      setContributors(data);
    };
    fetchContributors();
  }, []);

  return (
    <div className={styles.layout}>
      {contributors.map((contributor) => (
        <User key={contributor.id} user={contributor} />
      ))}
    </div>
  );
};

export default CsrPage;
