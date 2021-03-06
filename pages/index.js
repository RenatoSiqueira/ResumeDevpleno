import React from "react";
import getUser from "../utils/getUser";

const Index = (props) => {
  return (
    <>
      <pre>{JSON.stringify(props.user, null, 2)}</pre>
      {props.repos.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>
            {repo.language} / {repo.stars}
          </p>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const { repos, user } = await getUser("renatosiqueira");
  return {
    props: {
      repos,
      user,
    },
  };
}
export default Index;
