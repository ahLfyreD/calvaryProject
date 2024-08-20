/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeImage: 'url(./src/assets/calvaryImage1.jpg)',
        pastorsImage: 'url(./src/assets/pastors.jpg)',
        pastorImage: 'url(./src/assets/PastorPapa.jpg)',
        logo: 'url(./src/assets/calvaryLogo.png)',
        calvaryBgImage: 'url(./src/assets/calvarybgImage.jpg)',
        bgImage: 'url(./src/assets/homepageBackground.jpg)',
        prayerImage: 'url(./src/assets/prayerCalvary.jpg)',
      }
    },
  },
  plugins: [],
}
