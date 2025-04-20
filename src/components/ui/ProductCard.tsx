import React from 'react';
import {ProductCardSize, getProductCardStyleSize} from "@/components/ui/ProductCardSize";
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
  const cardStyle = {
    ...getProductCardStyleSize(size ?? ProductCardSize.Default),
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column' as const,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '70%', // 카드 상단의 70%를 이미지에 할당
    objectFit: 'cover' as const,
  };

  return (
    <div style={cardStyle}>
      {/* 이미지 섹션 */}
      <Image src={image} alt={name} style={imageStyle} />
      {/* 정보 섹션 */}
      <ProductCardTitle productName={"Zucchini"} price={price}/>
    </div>
  );
};
