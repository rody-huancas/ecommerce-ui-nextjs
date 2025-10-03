import ProductList from "@/components/ProductList"

const ProductsPage = async({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category;

  return (
    <>
      <ProductList category={category} params='products' />
    </>
  )
}

export default ProductsPage