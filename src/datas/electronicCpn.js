import boostConvertiseur from '../assets/boostConvertiseur.jpg'
import bouttonPoussoir from '../assets/bouttonPoussoir.jpg'
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
import plaquePerforee from '../assets/plaquePerforee.jpg'
import ultrason from '../assets/ultrason.jpg'
import voiture3roues from '../assets/voiture3roues.jpg'
import voiture4roues from '../assets/voiture4roues.jpg'

export const products = [
    {
        name: 'Boost Convertisseur',
        description: "c'est une alimentation à découpage qui convertit une tension continue en une autre tension continue de plus forte valeur.",
        category: 'module',
        id:'1bc',
        cover: boostConvertiseur,
        price: 5000
    },
    {
        name: 'Boutton Poussoir',
        description: "Le poussoir, aussi appelé bouton poussoir, il ressemble comme deux gouttes d’eau à un interrupteur classique. À ceci près que son bouton en revient toujours à la même position après avoir été actionné.",
        category: 'module',
        id:'2bp',
        cover: bouttonPoussoir,
        price: 200
    },
    {
        name: 'Buzzer',
        description: "Un buzzer ou bipeur est un élément électromécanique ou piézoélectrique qui produit un son caractéristique quand on lui applique une tension : le bip. Certains nécessitent une tension continue, d'autres nécessitent une tension alternative.",
        category: 'module',
        id:'3bz',
        cover: buzzer,
        price: 500
    },
    {
        name: 'DHT11',
        description: "Le capteur numérique de température et d’humidité DHT11 est un capteur composite de température et d’humidité avec une sortie de signal numérique calibrée.",
        category: 'capteur',
        id:'4d1',
        cover: dht11,
        price: 2500
    },
    {
        name: 'DHT22',
        description: "La DHT22 est un capteur à bas cout permettant d'acquérir une température et une humidité ambiante d'une manière numérique. Il utilise un capteur d'umidité capacitif et une thermistance pour mesurer la temérature et l'humidité de l'ai et la transmet d'une manière numérique sur un bus série. Les données sont actualisées toutes les 2 secondes.",
        category: 'capteur',
        id:'5d2',
        cover: dht22,
        price: 6500
    },
    {
        name: 'Ecran Oled',
        description: "Un écran OLED fonctionne sur le principe de l'électroluminescence. Il est formé d'une ou plusieurs (souvent 2) couches organiques composées de molécules semi-conductrices et situées entre l'anode et la cathode.",
        category: 'module',
        id:'6eo',
        cover: ecranOled,
        price: 6000
    },
    {
        name: 'esp32',
        description: "est une variante, annoncée et sorti en novembre 2020, compatible broche à broche avec l'ESP8266, mais utilisant l'architecture RISC-V 32 bits plutôt que Xtensa.",
        category: 'module',
        id:'7es',
        cover: esp32,
        price: 13000
    },
    {
        name: 'Capteur fin de course',
        description: "Les interrupteurs de positions mécaniques peuvent aussi être appelés « Détecteur de position » et « Interrupteur de fin de course ». Ils coupent ou établissent un circuit lorsqu'ils sont actionnés par un mobile. La détection s'effectue par contact d'un objet extérieur sur le levier ou un galet.",
        category: 'capteur',
        id:'8cf',
        cover: finDeCourse,
        price: 1500
    },
    {
        name: 'Capteur fin de course avec roue',
        description: "Les interrupteurs de positions mécaniques peuvent aussi être appelés « Détecteur de position » et « Interrupteur de fin de course ». Ils coupent ou établissent un circuit lorsqu'ils sont actionnés par un mobile. La détection s'effectue par contact d'un objet extérieur sur le levier ou un galet.",
        category: 'capteur',
        id:'9cf',
        cover: finDeCourseRoue,
        price: 2000
    },
    {
        name: 'GSM SIM 800L',
        description: "SIM800L est un module cellulaire miniature qui permet la transmission GPRS, l'envoi et la réception de SMS et l'émission et la réception d'appels vocaux. Son faible coût, son faible encombrement et sa prise en charge des fréquences quadri-bandes font de ce module la solution parfaite pour tout projet nécessitant une connectivité longue portée. ",
        category: 'module',
        id:'10g',
        cover: gsm,
        price: 13000
    },
    {
        name: 'Horloge ds3231',
        description: "Ce module intègre une horloge temps réel RTC de précision (avec compensation en température) basée sur un circuit intégré DS3231 à liaison I2C",
        category: 'module',
        id:'11h',
        cover: horloge,
        price: 4000
    },
    {
        name: 'Capteur humidité du sol',
        description: "Les capteurs d'humidité du sol mesurent la teneur en eau volumétrique du sol",
        category: 'capteur',
        id:'12hs',
        cover: humiditeSol,
        price: 5000
    },
    {
        name: 'Capteur de présence pir',
        description: "Les capteurs PIR sont utilisés comme des capteurs de mouvement. Ils permettent de déterminer si un être humain (et, dans le cas du capteur PIR d’Adafruit, un animal) est entrée ou sorti du champ de détection du module.",
        category: 'capteur',
        id:'13p',
        cover: pir,
        price: 4000
    },
    {
        name: 'Plaque perforée',
        description: '',
        category: 'module',
        id:'14pp',
        cover: plaquePerforee,
        price: 500
    },
    {
        name: 'Capteur Ultrason HC-SR04',
        description: "Ce module permet d’évaluer les distances entre un objet mobile et les obstacles rencontrés.Il suffit d'envoyer une impulsion de 10 µs en entrée et le capteur renvoie une largeur d'impulsion proportionnelle à la distance.Cette version du module HC-SR04 est compatible avec les microcontrôleurs 3,3 Vcc et 5 Vcc.",
        category: 'capteur',
        id:'15sr',
        cover: ultrason,
        price: 2500
    },
    {
        name: 'Kit voiture 3 roues',
        description: '',
        category: 'kit',
        id:'16v',
        cover: voiture3roues,
        price: 13000
    },
    {
        name: 'Kit voiture 4 roues',
        description: '',
        category: 'kit',
        id:'17v',
        cover: voiture4roues,
        price: 17000
    },

]

export default products