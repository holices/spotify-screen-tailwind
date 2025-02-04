import type { Config } from "tailwindcss";

export default {
 content: [
   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
   screens: {
     'minimum': '1px',
     'sm': '640px',
     'md': '768px', 
     'mdd': '836px', 
     'mddd': '920px', 
     'lg': '1099px',
     'lgg': '1220px',
     'xl': '1524px',
     '2xl': '1980px',
   },
   extend: {
     width: {
       sm: '240px',
       md: '300px',
       lg: '894px',
       xl: '1220px',
       xxl: '1980px',
     },
     height: {
       sm: '120px',
       md: '300px',
       lg: '500px',
       xl: '800px',
     },
   }
 },
 plugins: [],
} satisfies Config;