import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductItemDescription } from "../atoms/ProductItemDescription";
import { ProductItemType } from "../types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => (
	<li>
		<article>
			<ProductCoverImage
				{...product.coverImage}
				// src={product.coverImage.src}
				// alt={product.coverImage.alt}
			/>
			<ProductItemDescription product={product} />
		</article>
	</li>
);
