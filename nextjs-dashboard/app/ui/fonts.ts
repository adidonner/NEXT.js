import { Inter, Lusitana, Nunito_Sans } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
},
);
export const nunitoSans = Nunito_Sans({
    weight: ['300'],
    style: ['italic'],
    subsets: ['latin'],
},
);