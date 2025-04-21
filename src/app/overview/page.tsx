import DebounceButton from "@/components/ui/DebounceButton"
import ProductCard, {ProductModel} from "@/components/ui/ProductCard";
import CartIcon from "@/components/ui/icon/CartIcon";
import SearchIcon from "@/components/ui/icon/SearchIcon";
import ProfileIcon from "@/components/ui/icon/ProfileIcon";
import ChevronRight from "@/components/ui/icon/ChevronRight";
import ScrollArea from "@/components/ui/ScrollArea";
import SponsoredCardPage from "@/components/ui/SponsoredCardPage";
import React from "react";

export default function OverView() {
  const Logo = () => {
    return (
      <div className="hidden md:flex items-center gap-2">
        <span className="font-bold text-green-600">CropMarket</span>
      </div>
    );
  }

  const Title = () => {
    return <h1 className="text-xl font-bold text-black text-center absolute left-1/2 transform -translate-x-1/2">Crop Market</h1>
  }

  const SectionTitle = ({title}: { title: string }) => {
    return <h2 className="text-xl font-bold text-black">{title}</h2>
  }

  const Grouped = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex items-center">
        {React.Children.map(children, (child) => child)}
      </div>
    )
  }

  return (
    <div className="flex flex-col w-[100vw] bg-gray-100">
      {/* Fixed Header - 83px height */}
      <header className="fixed top-0 left-0 right-0 h-[83px] border-b z-50 flex items-center justify-between px-4 md:px-6 bg-white">
        <Grouped>
          <DebounceButton icon={CartIcon()} style={{paddingLeft: 0}}/>
          <Logo />
        </Grouped>
        <Title />
        <Grouped>
          <DebounceButton icon={SearchIcon()}/>
          <DebounceButton icon={ProfileIcon()}/>
        </Grouped>
      </header>

      {/* Main Content - with padding-top to account for fixed header */}
      <div className="flex-1 pt-[83px]">
        {/* Today's Best Selling Section */}
        <section className="py-6 px-4 md:px-6">
          <div className="flex items-center justify-between mb-4">
            <SectionTitle title={"Today`s Best Selling"} />
            <DebounceButton trailingIcon={ChevronRight()}>
              View All
            </DebounceButton>
          </div>
          <ScrollArea>
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </ScrollArea>
        </section>

        {/* Best Discounted Products Section */}
        <section className="py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <SectionTitle title="Best Discounted Products" />
            <DebounceButton trailingIcon={ChevronRight()}>
              View all
            </DebounceButton>
          </div>
          <ScrollArea>
            {discountedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollArea>
        </section>

        {/* Sponsor Ads Section */}
        <section className="py-6 px-4 md:px-6 bg-white">
          <h2 className="text-xl font-bold mb-4">Sponsored</h2>
          <div className="grid grid-cols-1 gap-4">
            <SponsoredCardPage />
            <SponsoredCardPage />
          </div>
        </section>

        {/* Seller's Own Products - Grid Layout */}
        <section className="py-6 px-4 md:px-6 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Our Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <DebounceButton className="bg-green-600 hover:bg-green-700">View All Products</DebounceButton>
          </div>
        </section>
      </div>
    </div>
  )
}

const bestSellingProducts: ProductModel[] = [
  {id: '1', name: "Organic Tomatoes", price: '3.99', image: ""},
  {id: '2', name: "Fresh Carrots", price: '2.49', image: ""},
  {id: '3', name: "Green Lettuce", price: '1.99', image: ""},
  {id: '4', name: "Red Potatoes", price: '4.99', image: ""},
  {id: '5', name: "Sweet Corn", price: '0.99', image: ""},
  {id: '6', name: "Bell Peppers", price: '3.49', image: ""},
  {id: '7', name: "Organic Tomatoes", price: '3.99', image: ""},
  {id: '8', name: "Fresh Carrots", price: '2.49', image: ""},
  {id: '9', name: "Green Lettuce", price: '1.99', image: ""},
  {id: '10', name: "Red Potatoes", price: '4.99', image: ""},
  {id: '11', name: "Sweet Corn", price: '0.99', image: ""},
  {id: '12', name: "Bell Peppers", price: '3.49', image: ""},
]

const discountedProducts: ProductModel[] = [
  {id: '7', name: "Organic Apples", price: '2.99', image: ""},
  {id: '8', name: "Fresh Broccoli", price: '1.49', image: ""},
  {id: '9', name: "Avocados", price: '3.99', image: ""},
  {id: '10', name: "Strawberries", price: '2.99', image: ""},
  {id: '11', name: "Cucumber", price: '0.79', image: ""},
  {id: '12', name: "Onions", price: '1.49', image: ""},
]

const sellerProducts: ProductModel[] = [
  {id: '13', name: "Organic Spinach", price: '2.49', image: ""},
  {id: '14', name: "Fresh Garlic", price: '1.99', image: ""},
  {id: '15', name: "Sweet Potatoes", price: '3.49', image: ""},
  {id: '16', name: "Zucchini", price: '2.29', image: ""},
  {id: '17', name: "Cabbage", price: '1.79', image: ""},
  {id: '18', name: "Cauliflower", price: '2.99', image: ""},
  {id: '19', name: "Eggplant", price: '3.29', image: ""},
  {id: '20', name: "Kale", price: '2.49', image: ""},
]
