import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import { PRODUCT_BY_SLUG } from "../../../graphql/queries";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { NextSeo } from "next-seo";

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { productSlug, shopId } = router.query;

  //   const { loading, error, data } = useQuery(PRODUCT_BY_SLUG, {
  //     variables: {
  //       productSlug,
  //       shopId,
  //     },
  //   });

  // client side
  //   const loadedProduct = data?.catalogItemProductBySlug?.product;

  // server side
  const loadedProduct = product;

  const title = loadedProduct?.title;
  const price = loadedProduct?.pricing?.[0]?.displayPrice;

  console.log(loadedProduct);

  //   if (error) return <div>Error</div>;
  //   if (loading) return <div>Loading</div>;

  return (
    <>
      <NextSeo
        title={`${title} - ${price}`}
        description="Descrição do produto"
        canonical={`https://with-ssr-apollo-next13.vercel.app/${shopId}/products/${loadedProduct.slug}`}
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: `https://with-ssr-apollo-next13.vercel.app/${shopId}/products/${loadedProduct.slug}`,
          site_name: "Poc Next 13",
          id: loadedProduct?._id,
          title,
          description: "Descrição do Produto",
          images: [
            {
              url: loadedProduct?.imageUrls?.[0],
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />

      <div className="product-page-container">
        <h4>shopId: {shopId}</h4>

        <Image
          src={loadedProduct?.imageUrls?.[0]}
          alt="Picture of the product"
          width={180}
          height={180}
          objectFit="contain"
        />

        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
    </>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getServerSideProps({ query }) {
  const { productSlug, shopId } = query;

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: PRODUCT_BY_SLUG,
    variables: { productSlug, shopId },
  });

  return {
    props: {
      product: data?.catalogItemProductBySlug?.product,
    },
  };
}

export default ProductPage;
