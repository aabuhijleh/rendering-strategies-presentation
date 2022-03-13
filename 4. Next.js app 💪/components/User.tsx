/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { Contributor } from "types";
import styles from "styles/contributor.module.css";
import Link from "next/link";

interface UserProps {
  user: Contributor;
}

export const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={styles.contributor}>
      <img className={styles.avatar} src={user.avatar_url} alt="avatar" />
      <Link href={`/contributor/${user.login}`}>
        <a>{user.login}</a>
      </Link>
      <div>
        Contributions:{" "}
        <span className={styles.contributions}>{user.contributions}</span>
      </div>
    </div>
  );
};
