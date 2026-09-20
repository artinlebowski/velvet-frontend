
import ProductCard from "../productCart/productCart";

export default function ProductSuggestions() {
  const products = [
    {
      id: 1,
      title: "عطر لوکس ولیوت",
      price: "۲,۴۵۰,۰۰۰",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "ساعت کلاسیک مردانه",
      price: "۸,۹۰۰,۰۰۰",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "کیف چرم دست‌دوز",
      price: "۳,۲۰۰,۰۰۰",
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "عینک آفتابی لوکس",
      price: "۱,۸۰۰,۰۰۰",
      image: "/images/4.jpg",
    },
    {
      id: 5,
      title: "دستبند طلا",
      price: "۵,۶۰۰,۰۰۰",
      image: "/images/5.jpg",
    },
    {
      id: 6,
      title: "گردنبند نقره",
      price: "۲,۹۰۰,۰۰۰",
      image: "/images/3.jpg",
    },
    {
      id: 7,
      title: "کفش چرم مردانه",
      price: "۴,۷۰۰,۰۰۰",
      image: "/images/5.jpg",
    },
    {
      id: 8,
      title: "شال ابریشم",
      price: "۱,۲۰۰,۰۰۰",
      image: "/images/2.jpg",
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      {/* Section Header */}
      <div className="mb-11">
        <h2 className="sm:text-2xl font-black text-main-100 text-center text-2xl md:text-3xl">
          محصولات <span className="text-main-400">پیشنهادی</span>
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}