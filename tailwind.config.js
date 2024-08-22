/** @type {import('tailwindcss').Config} */
import logo from './public/'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeImage: 'url(/assets/images/calvaryImage1.jpg)',
        pastorsImage: 'url(/assets/images/pastors.jpg)',
        pastorImage: 'url(/assets/images/PastorPapa.jpg)',
        logo: 'url(/assets/images/calvaryLogo.png)',
        calvaryBgImage: 'url(/assets/images/calvarybgImage.jpg)',
        bgImage: 'url(/assets/images/homepageBackground.jpg)',
        prayerImage: 'url(/assets/images/prayerCalvary.jpg)',
      }
    },
  },
  plugins: [],
}
