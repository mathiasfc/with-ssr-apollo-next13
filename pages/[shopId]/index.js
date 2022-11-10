import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { PRODUCTS } from "../../graphql/queries";
import { useRouter } from "next/router";
import Product from "../../components/Product";
import { useQuery } from "@apollo/client";
import { NextSeo } from "next-seo";

const HomePage = ({ products }) => {
  const router = useRouter();
  const { shopId } = router.query;

  // const { loading, error, data } = useQuery(PRODUCTS, {
  //   variables: {
  //     shopId,
  //   },
  // });

  //client
  // const loadedProducts = data?.catalogItems?.edges;

  //server
  const loadedProducts = products;

  // if (error) return <div>Error</div>;
  // if (loading) return <div>Loading</div>;

  return (
    <>
      <NextSeo
        title="POC Next 13"
        description={`${loadedProducts?.length || 0} produtos carregados`}
        canonical={`https://with-ssr-apollo-next13.vercel.app/${shopId}`}
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: `https://with-ssr-apollo-next13.vercel.app/${shopId}`,
          site_name: "POC Next 13",
          title: "POC Next 13",
          description: `${loadedProducts?.length || 0} produtos carregados`,
          images: [
            {
              url: "/favicon.png",
              width: 256,
              height: 256,
              alt: "POC Next 13",
            },
          ],
        }}
      />

      <div>
        <h3>shopId: {shopId}</h3>

        <div className="products">
          {loadedProducts?.map((prod) => (
            <Product product={prod?.node?.product} shopId={shopId} />
          ))}
        </div>
      </div>
    </>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getServerSideProps({ query }) {
  const { shopId } = query;

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: PRODUCTS,
    variables: { shopId },
  });

  return {
    props: {
      products: data?.catalogItems?.edges,
    },
  };
}

export default HomePage;
