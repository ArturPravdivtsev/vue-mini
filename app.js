const car = (name, model, owner, year, phone, image) =>({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car("Ford", "Focus", "Max", 2016, "+7 929 123 45 67", "images/focus.jpg"),
    car("Ford", "Mondeo", "Vladimir", 2018, "+7 900 523 46 67", "images/mondeo.jpg"),
    car("Porshe", "Panamera", "Irina", 2015, "+7 609 123 45 00", "images/panamera.jpg"),
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Succes oder: ${this.car.name} - ${this.car.model}`, 'ok')
            );
        },
        cancelOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Canceled oder: ${this.car.name} - ${this.car.model}`, 'cnl')
            );
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone';
        },
        fiteredCars() {
            return  this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
})