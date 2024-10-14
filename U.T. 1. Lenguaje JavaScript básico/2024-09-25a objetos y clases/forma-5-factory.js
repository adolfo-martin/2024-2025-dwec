'use strict';

class Truck {
    deliver(cargo) {
        console.log(`La carga de ${cargo} ha sido entregada`);
    }
}

class Ship {
    deliver(cargo) {
        console.log(`La carga de ${cargo} ha sido entregada`);
    }
}

class TransportVehicleFactory {
    static create(origin, destiny) {
        if (origin === 'España' && destiny === 'Francia') {
            return new Truck();
        }

        if (origin === 'España' && destiny === 'Marruecos') {
            return new Ship();
        }

        if (origin === 'Francia' && destiny === 'Alemania') {
            return new Truck()
        }

        if (origin === 'Alemania' && destiny === 'Argelia') {
            return new Truck()
        }
    }
}

const vehicle = TransportVehicleFactory.create('España', 'Marruecos');
vehicle.deliver('fertilizantes');