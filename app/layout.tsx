import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Точка опоры — свобода движения',description:'Центр комплексной реабилитации и восстановления движения в Москве.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
