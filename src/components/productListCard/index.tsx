import { useProductContext } from "@/app/hooks/useProduct";
import { Product } from "@/interfaces/product.interface";
import { Avatar, Badge, KanbanColumn } from "@/subframe";

export default function ProductCard({
  key,
  product,
}: {
  key: string;
  product: Product;
}) {
  const {selectedProduct} = useProductContext();

  // TODO FIX selectedProdcut style? 
  return (
    <KanbanColumn.KanbanCard className={"min-w-64 " + (product.id === selectedProduct?.id && "bg-orange-100 border-orange-800")}>
      <div className="flex w-full items-center gap-2">
        <Avatar image={product.thumbnail}>
          AB
        </Avatar>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
          <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
            {product.title}
          </span>
          <span className="line-clamp-3 w-full text-caption font-caption text-subtext-color">
            {product.description}
          </span>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-end gap-2">
        <Badge
          className="h-6 w-auto flex-none"
          variant="neutral"
          icon="FeatherArrowUpSquare"
        >
          {product.votes.toString()}
        </Badge>
      </div>
    </KanbanColumn.KanbanCard>
  );
}
