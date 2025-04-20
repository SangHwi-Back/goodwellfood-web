// Enum: 기본, 간단히, 크게
export enum ProductCardSize {
  Default = 'default',
  Small = 'small',
  Large = 'large',
}

// 스타일 속성을 각 Size에 맞게 매핑
export function getProductCardStyleSize(size: ProductCardSize) {
  switch (size) {
    case ProductCardSize.Default: return { width: '200px', height: '250px' }
    case ProductCardSize.Small: return { width: '160px', height: '200px' }
    case ProductCardSize.Large: return { width: '240px', height: '300px' }
  }
}
