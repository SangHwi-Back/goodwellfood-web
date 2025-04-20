import React from "react";

type ProductCardTitleProps = {
  productName: string;
  price: string;
  discountedPrice?: string;
}

export default function ProductCardTitle(
  {
    productName,
    price,
    discountedPrice,
  }: ProductCardTitleProps
) {
  const infoStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    height: '30%', // 카드 하단 30%를 정보에 할당
  };

  const productNameStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  };

  const normalPriceStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "green",
    marginRight: "8px", // 가격 간 간격 추가
  };

  const lineThroughPriceStyle = {
    fontSize: "12px", // 기존 폰트보다 작게
    color: "black",
    textDecoration: "line-through", // 취소선 추가
  };

  return (
    <div style={infoStyle}>
      <div style={productNameStyle}>{productName}</div>
      {/* 할인된 가격이 있을 경우 해당 구조를 출력 */}
      {discountedPrice ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={normalPriceStyle}>{discountedPrice}</span>
          <span style={lineThroughPriceStyle}>{price}</span>
        </div>
      ) : (
        // 할인된 가격이 없을 경우 기본 가격만 출력
        <div style={normalPriceStyle}>{price}</div>
      )}
    </div>

  )
}
