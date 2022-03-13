import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import type { Contributor, User } from "types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DetailedUser } from "components/DetailedUser";

interface DetailedContributorPageProps {
  user: User;
}

const DetailedContributorPage: NextPage<DetailedContributorPageProps> = (
  {
    // user,
  }
) => {
  const [user, setUser] = useState<User | null>(null);
  const {
    query: { slug: username },
  } = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get<User>(
        `https://api.github.com/users/${username}`
      );
      setUser(data);
    };
    if (username) {
      fetchUser();
    }
  }, [username]);

  if (!user) return null;

  return <DetailedUser user={user} />;
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { data } = await axios.get<User>(
//     `https://api.github.com/users/${params?.slug}`
//   );

//   return {
//     props: { user: data },
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { data } = await axios.get<User>(
//     `https://api.github.com/users/${params?.slug}`
//   );

//   return {
//     props: { user: data },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data: contributors } = await axios.get<Contributor[]>(
//     "https://api.github.com/repos/facebook/react/contributors"
//   );

//   return {
//     paths: contributors.map((contributor) => ({
//       params: {
//         slug: contributor.login,
//       },
//     })),
//     fallback: false,
//   };
// };

export default DetailedContributorPage;
