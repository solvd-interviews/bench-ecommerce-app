import { Product } from "@/lib/models/ProductModel";
import Image from "next/image";
import Link from "next/link"

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="card bg-base-100 sm:w-96 w-80 shadow-xl rounded-none">
      <Link href={`/${product.id}`}>
        <figure className="sm:w-96 w-80 h-40 rounded-none">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover w-full h-full bg-secondary rounded-none rounded-t-xl"
          />
        </figure>
      </Link>
      <div className="card-body ">
        <h2 className="card-title truncate">{product.name}</h2>
        <p className="w-full min-h-12 h-12 overflow-hidden">
          {product.description}
        </p>
        <div className="card-actions mt-4">
          <p className=" text-xl">${product.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
