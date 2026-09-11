import type { ReactNode } from 'react';
import { Image as ImageIcon } from 'lucide-react';
export function Photo({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={'placeholder ' + className}>
      <ImageIcon size={30} strokeWidth={1} />
      <span className="photo-label">{label}</span>
    </div>
  );
}
export function Heading({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
