import Button from "./Button"


const ProductCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="src\assets\images\citron_jaune.jpg"
        alt=""
        />
  <div className="flex space-x-6 justify-center">
    <h2 className="font-bold text-xl">Product Name</h2>
    <p className="text-gray-700 pt-1">
      0.99€/pièce
    </p>
  </div>
  <div className="flex justify-center pt-4 pb-2">
    <Button />
  </div>
</div>
  )
}

export default ProductCard