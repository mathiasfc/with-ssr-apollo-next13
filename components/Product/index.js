import Link from "next/link";
import Image from "next/image";

const Product = ({ product, shopId }) => {
  console.log(product);
  const productHref = `/products/${product?.slug}?shopId=${shopId}`;

  return (
    <Link href={productHref}>
      <div className="product">
        <Image
          src={product?.imageUrls?.[0]}
          alt="Picture of the product"
          width={80}
          height={80}
          objectFit="contain"
        />

        <span className="product-title">{product?.title}</span>
      </div>
    </Link>
  );
};

export default Product;
