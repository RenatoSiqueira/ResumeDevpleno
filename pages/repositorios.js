import React from "react";
import getUser from "../utils/getUser";

const Index = (props) => {
  return (
    <>
      <h2>Meus Repos</h2>
      <pre>{JSON.stringify(props.repos, null, 2)}</pre>
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
