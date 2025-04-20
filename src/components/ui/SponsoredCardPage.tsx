import DebounceButton from "@/components/ui/DebounceButton";
import Image from "next/image";
import {ButtonType} from "@/components/ui/ButtonType";

export default function SponsoredCardPage() {
  return (
    <div className="overflow-hidden">
      <div className="p-0">
        <div className="relative h-40 md:h-60 bg-gradient-to-r from-green-100 to-green-200">
          <div className="absolute inset-0 flex items-center justify-between p-6">
            <div className="max-w-md">
              <p className="text-sm text-green-600 font-medium mb-2">SPONSORED</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Organic Farming Equipment</h3>
              <p className="text-sm md:text-base mb-4 hidden md:block">
                Get 15% off on all farming equipment this week. High-quality tools for your crops.
              </p>
              <DebounceButton buttonType={ButtonType.DEFAULT}>
                Shop Now
              </DebounceButton>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Farming Equipment"
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
