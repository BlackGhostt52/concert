import { listProductsController } from "@/api/shop/products/list";
import { Product } from "@/components/product";
import { useQuery } from "@tanstack/react-query";

export function Bestseller() {
  const { data, isLoading } = useQuery({
    queryKey: ["listProducts"],
    queryFn: listProductsController,
  });

  return (
    <div className="mt-20 w-[1140px]">
      <h1 className="mb-9 text-left text-3xl font-medium">
        Produtos mais vendidos
      </h1>
      <main className="mt-4 flex flex-wrap justify-between">
        {data.data &&
          data.data.map((item) => {
            <Product
              key={item.id}
              description={item.model}
              name={item.model}
              price={item.value}
            />;
          })}
      </main>
    </div>
  );
}
