import type { NextPage, GetServerSideProps } from "next";
import type { Contributor } from "types";
import axios from "axios";
import { User } from "components";
import styles from "styles/list.module.css";

interface SsrPageProps {
  contributors: Contributor[];
}

const SsrPage: NextPage<SsrPageProps> = ({ contributors }) => {
  return (
    <div className={styles.layout}>
      {contributors.map((contributor) => (
        <User key={contributor.id} user={contributor} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<Contributor[]>(
    "https://api.github.com/repos/facebook/react/contributors"
  );

  return {
    props: { contributors: data },
  };
};

export default SsrPage;
