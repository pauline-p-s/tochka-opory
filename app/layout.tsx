import type { Metadata } from 'next';
import './globals.css';
import './refinements.css';
export const metadata:Metadata={title:'Точка опоры — свобода движения',description:'Центр комплексной реабилитации и восстановления движения в Москве.',icons:{icon:'/brand/mark.svg#svgView(viewBox(29,680,2029,2029))'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
