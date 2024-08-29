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
        youthImage: 'url(/assets/images/pastorGabriel.jpg)',
        giveBgImage: 'url(/assets/images/calvaryGallery7.jpg)',
        aboutBgImage: 'url(/assets/images/calvaryGallery10.jpg)',
        testBgImage: 'url(/assets/images/calvaryGallery9.jpg)',
        pastorBgImage: 'url(/assets/images/pastorIsaiah.jpg)',
        pastorWifeImage: 'url(/assets/images/pastorWife.jpg)',
      }
    },
  },
  plugins: [],
}
