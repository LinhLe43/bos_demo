export interface TableHeaderProps {
  id: string;
  label: any;
  align?: 'right' | 'left' | 'center' | 'inherit' | 'justify';
  icon?: any;
  isShow?: boolean;
  width?: number;
  hasSort?: boolean;
  disable?: boolean;
  hasNotWrap?: boolean;
  padding?: string;
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  left?: number;
  isReactNode?: boolean;
  whiteSpace?: string;
}
