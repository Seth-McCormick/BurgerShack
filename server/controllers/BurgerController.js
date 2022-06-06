import { burgerService } from "../services/BurgerService"
import BaseController from "../utils/BaseController"



export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
            .delete('/:name', this.deleteBurger)
    }

    async getBurgers(request, response, next) {
        try {
            let burgers = await burgerService.getBurgers()
            return response.send(burgers)
        } catch (error) {
            next(error)
        }

    }

    async createBurger(req, res, next) {
        try {
            let burger = await burgerService.createBurger(req.body)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(req, res, next) {
        try {

            let message = await burgerService.deleteBurger(req.params.name)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}