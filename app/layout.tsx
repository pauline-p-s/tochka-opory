import type { Metadata } from 'next';
import './globals.css';
import './refinements.css';
import './motion.css';
import './services.css';
import './navigation.css';
export const metadata: Metadata = {
  title: 'Точка опоры — свобода движения',
  description: 'Центр реабилитации позвоночника и суставов в Москве.',
  icons: {
    icon:
      (process.env.NEXT_PUBLIC_BASE_PATH || '') +
      '/brand/mark.svg#svgView(viewBox(29,680,2029,2029))',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
