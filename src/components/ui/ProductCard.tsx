'use client'

import React from 'react';
import {ProductCardSize, getProductCardTailwindSize} from "@/components/ui/ProductCardSize";
import ProductCardTitle from "@/components/ui/ProductCardTitle";
import Image from "next/image";

// Props 타입 정의
export interface ProductModel {
  id: string
  name: string
  price: string
  discountedPrice?: string
  image: string
  size?: ProductCardSize
}

type Props = {
  key: string
  product: ProductModel
}

// ProductCard 컴포넌트
export default function ProductCard({ product }: Props) {
  const {name, price, image, size} = product;
  const style = `flex overflow-hidden ${getProductCardTailwindSize(size ?? ProductCardSize.Default)} flex-shrink-0 flex-col shadow-md bg-white rounded-md`;
  const _image = image.length == 0 ? "/placeholder.svg" : image;
  const [imgSrc, setImgSrc] = React.useState(_image);
  const handleImageError = () => {
    setImgSrc("/placeholder.svg"); // 이미지 로드 실패 시 대체 이미지 경로 설정
  };


  return (
    <div className={style}>
      {/* 이미지 섹션 */}
      <div className="h-7/10 w-full object-cover">
        <Image
          src={imgSrc}
          alt={name}
          className={"w-full h-full border-gray-200 border-1 rounded-t-md"}
          width={1}
          height={1}
          onError={handleImageError}
        />
      </div>
      {/* 정보 섹션 */}
      <div className="border-b border-x border-gray-200">
      <ProductCardTitle productName={"Zucchini"} price={price}/>
      </div>
    </div>
  );
};
