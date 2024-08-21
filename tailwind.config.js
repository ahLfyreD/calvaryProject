/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeImage: 'url(./src/assets/images/calvaryImage1.png)',
        pastorsImage: 'url(./src/assets/images/pastors.jpg)',
        pastorImage: 'url(./src/assets/images/PastorPapa.jpg)',
        logo: 'url(./src/assets/images/calvaryLogo.png)',
        calvaryBgImage: 'url(./src/assets/images/calvarybgImage.jpg)',
        bgImage: 'url(./src/assets/images/homepageBackground.jpg)',
        prayerImage: 'url(./src/assets/images/prayerCalvary.jpg)',
      }
    },
  },
  plugins: [],
}
