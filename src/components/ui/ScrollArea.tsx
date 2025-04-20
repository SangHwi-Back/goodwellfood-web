import React from 'react';

interface ScrollAreaVerticalProps {
  gap: number;
  children: React.ReactNode;
  width: number;
}

interface ScrollAreaHorizontalProps {
  gap: number;
  children: React.ReactNode;
  height: number;
}

type ScrollAreaProps = ScrollAreaVerticalProps | ScrollAreaHorizontalProps;

const ScrollArea: React.FC<ScrollAreaProps> = (props) => {
  const isVertical = (props: ScrollAreaProps): props is ScrollAreaVerticalProps =>
    'width' in props;

  const style: React.CSSProperties = isVertical(props)
    ? {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      gap: `${props.gap}px`,
      overflow: 'hidden auto',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      width: props.width,
      paddingBottom: 20,
    }
    : {
      display: 'flex',
      flexShrink: 0,
      flexDirection: 'row',
      gap: `${props.gap}px`,
      overflow: 'auto hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      height: props.height,
      paddingBottom: 20,
    };

  return <div style={style}>{props.children}</div>;
};

export default ScrollArea;
