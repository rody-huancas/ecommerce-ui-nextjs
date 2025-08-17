import Image from "next/image"
import ProductList from "@/components/ProductList"

const HomePage = async({ searchParams }: { searchParams: Promise<{ category: string }> }) => {

  const category = (await searchParams).category;

  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Producto destacado" fill />
      </div>

      <ProductList category={category} params="homepage" />
    </div>
  )
}

export default HomePage