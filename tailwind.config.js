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
        pastorHomePage: 'url(/assets/images/pastor.JPG)',
        prayerImage: 'url(/assets/images/prayerCalvary.jpg)',
        testBgImage: 'url(/assets/images/calvaryGallery9.jpg)',
        youthImage: 'url(/assets/images/pastorGabriel.jpg)',
        giveBgImage: 'url(/assets/images/calvaryGallery7.jpg)',
        aboutBgImage: 'url(/assets/images/calvaryGallery10.jpg)',
        youthBgImage: 'url(/assets/images/calvarygallery4.jpg)',
        pastorBgImage: 'url(/assets/images/pastorIsaiah.jpg)',
        pastorInfo: 'url(/assets/images/pastorInfo.jpg)',
        pastorWifeImage: 'url(/assets/images/pastorWife.jpg)',
        ministerInfo: 'url(/assets/images/minister.JPG)',
        psss: 'url(/assets/images/psss.jpg)',
        mainEvent: 'url(/assets/images/mainEvent.jpg)',
        lordRemPic: 'url(/assets/images/lordRemPic.jpg)',
        menCon: 'url(/assets/images/menCon.jpg)',
        coffeePic: 'url(/assets/images/coffeePic.jpg)',
        youthLeader: 'url(/assets/images/youthLeader.JPG)',
        choirLeader: 'url(/assets/images/choirLeader.JPG)',
        ministerAyo: 'url(/assets/images/ministerAyo.jpg)',
      }
    },
  },
  plugins: [],
}
