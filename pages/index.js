import React from "react";

const Index = (props) => {
  return <h1>Teste</h1>;
};

export async function getServerSideProps(context) {
  return {
    props: {
      currentDate: new Date(),
    },
  };
}
export default Index;
