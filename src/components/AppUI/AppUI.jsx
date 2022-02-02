import { Layout } from "../Layout";
import { NavBar } from "../NavBar";
import { Products } from "../Products";

const AppUI = () => {
  return (
    <>
      <NavBar/>
      <Layout>
        <Products/>
      </Layout>
    </>
  );
};

export { AppUI };