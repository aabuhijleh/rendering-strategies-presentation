/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { User } from "types";
import Link from "next/link";
import styles from "styles/user.module.css";

interface DetailedUserProps {
  user: User;
}

export const DetailedUser: React.FC<DetailedUserProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={user.avatar_url} alt="avatar" />
      <h2>{user.name}</h2>
      <Link href={user.html_url}>{user.login}</Link>
      <div>{user.bio}</div>
      <div>{user.company}</div>
      <div>{user.location}</div>
      <div>{user.blog}</div>
    </div>
  );
};
