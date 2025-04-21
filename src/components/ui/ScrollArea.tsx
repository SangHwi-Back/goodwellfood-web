import React from 'react';

interface ScrollAreaVerticalProps {
  gap?: number;
  children: React.ReactNode;
  width?: number;
}

interface ScrollAreaHorizontalProps {
  gap?: number;
  children: React.ReactNode;
  height?: number;
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
      gap: `${props.gap ?? 10}px`,
      overflow: 'hidden auto',
      width: 'fit-content',
      minWidth: props.width ?? 200,
      padding: '10px 0',
    }
    : {
      display: 'flex',
      flexShrink: 0,
      flexDirection: 'row',
      gap: `${props.gap ?? 10}px`,
      overflow: 'auto hidden',
      height: 'fit-content',
      minHeight: props.height ?? 300,
      padding: '10px 0',
    };

  return <div style={style}>{props.children}</div>;
};

export default ScrollArea;
