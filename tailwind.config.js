/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeImage: 'url(https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/452918840_456319823931547_1541801858347856689_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0J_d05lwQqv11zyZOhO1_bjsWRDCEhZFuOxZEMISFkeIA5CvyE9ms9lTRxVXEOhNfOo_M3dC5rgQ8qNQGXT0_&_nc_ohc=0PDCVMI79koQ7kNvgFWT5ls&_nc_ht=scontent-los2-1.xx&oh=00_AYDc_gFxHFZ9Kv_cke8mWdSiZS7DZgElpkj8wdpZbDNj2w&oe=66CD1A08)',
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
