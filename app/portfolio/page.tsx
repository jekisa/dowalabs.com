import ProductCard from '../../components/ui/product-card'
import { products } from '../../lib/products'

export default function PortfolioPage() {
  return <main className="min-h-screen bg-white text-slate-950"><section className="bg-gradient-to-b from-white to-slate-50 px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44"><div className="mx-auto max-w-7xl"><a href="/" className="text-sm font-semibold text-slate-500 transition hover:text-emerald-900">← Back to home</a><p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Our portfolio</p><h1 className="mt-4 text-5xl font-extrabold tracking-[-.07em] sm:text-7xl">All our products.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Focused software for the teams and businesses building what&apos;s next.</p></div></section><section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div></section></main>
}
