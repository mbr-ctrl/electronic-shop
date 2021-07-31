import boostConvertisseur from '../assets/boostConvertisseur.jpg'
import bouttonPoussoir from '../assets/boostConvertisseur.jpg'
import buzzer from '../assets/buzzer.jpg'
import dht11 from '../assets/dht11.jpg'
import dht22 from '../assets/dht22.jpg'
import ecranOled from '../assets/ecranOled.jpg'
import esp32 from '../assets/esp32.jpg'
import finDeCourse from '../assets/capteur-fin-de-course.jpg'
import finDeCourseRoue from '../assets/finDeCourseRoue.jpg'
import gsm from '../assets/gsm.jpg'
import horloge from '../assets/horloge.jpg'
import humiditeSol from '../assets/humiditéSol.jpg'
import pir from '../assets/pir.jpg'
import plaqueperfore from '../assets/plaqueperforée.jpg'
import ultrason from '../assets/ultrason.jpg'
import voiture3roues from '../assets/voiture3roues.jpg'
import voiture4roues from '../assets/voiture4roues.jpg'

let electronicCpn = [
    {
        name: 'Boost Convertisseur',
        category: 'module',
        id:'1bc',
        cover: boostConvertisseur,
        price: 5000
    },
    {
        name: 'Boutton Poussoir',
        category: 'module',
        id:'2bp',
        cover: bouttonPoussoir,
        price: 200
    },
    {
        name: 'Buzzer',
        category: 'module',
        id:'3bz',
        cover: buzzer,
        price: 500
    },
    {
        name: 'DHT11',
        category: 'capteur',
        id:'4d1',
        cover: dht11,
        price: 2500
    },
    {
        name: 'DHT22',
        category: 'capteur',
        id:'5d2',
        cover: dht22,
        price: 6500
    },
    {
        name: 'Ecran Oled',
        category: 'module',
        id:'6eo',
        cover: ecranOled,
        price: 6000
    },
    {
        name: 'esp32',
        category: 'module',
        id:'7es',
        cover: esp32,
        price: 13000
    },
    {
        name: 'Capteur fin de course',
        category: 'capteur',
        id:'8cf',
        cover: finDeCourse,
        price: 1500
    },
    {
        name: 'Capteur fin de course avec roue',
        category: 'capteur',
        id:'9cf',
        cover: finDeCourseRoue,
        price: 2000
    },
    {
        name: 'GSM SIM 800L',
        category: 'module',
        id:'10g',
        cover: gsm,
        price: 13000
    },
    {
        name: 'Horloge ds3231',
        category: 'module',
        id:'11h',
        cover: horloge,
        price: 4000
    },
    {
        name: 'Capteur humidité du sol',
        category: 'capteur',
        id:'12hs',
        cover: humiditeSol,
        price: 5000
    },
    {
        name: 'Capteur de présence pir',
        category: 'capteur',
        id:'13p',
        cover: pir,
        price: 4000
    },
    {
        name: 'Plaque perforée',
        category: 'module',
        id:'14pp',
        cover: plaqueperfore,
        price: 500
    },
    {
        name: 'Capteur Ultrason sr',
        category: 'capteur',
        id:'15sr',
        cover: ultrason,
        price: 2500
    },
    {
        name: 'Kit voiture 3 roues',
        category: 'kit',
        id:'16v',
        cover: voiture3roues,
        price: 13000
    },
    {
        name: 'Kit voiture 4 roues',
        category: 'kit',
        id:'17v',
        cover: voiture4roues,
        price: 17000
    },

]

export default electronicCpn