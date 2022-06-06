let burgerDb = {
    Burgers: [
        { name: 'OG Burger', calories: '350', price: 2.25 },
        { name: 'Cheesinator', calories: '600', price: 4 },
        { name: 'Baconater', calories: '750', price: 5.50 },
        { name: 'Destroyer', calories: '2000', price: 10 }

    ]
}

class BurgerService {

    async getBurgers() {
        return burgerDb.Burgers
    }
    createBurger(burgerData) {
        burgerDb.Burgers.push(burgerData)
        return burgerData
    }
    async deleteBurger(name) {
        burgerDb.Burgers = burgerDb.Burgers.filter(b => b.name != name)
        return 'Burger Sold'
    }

}


export const burgerService = new BurgerService()


