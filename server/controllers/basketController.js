const {Basket, BasketDevice, Device} = require('../models/models')

class BasketController {
    async addToCart(req, res) {
        const user = req.user
        const {deviceId} = req.body

        const basket = await Basket.findOne({
            where: {userId: user.id}
        })

        const basketItem = await BasketDevice.create({
            deviceId,
            basketId: basket.id
        })

        return res.status(200).json(basketItem)
    }

    async remove(req, res) {
        const {id} = req.params

        const basketDevice = await BasketDevice.findOne({
            where: {deviceId: id}
        })

        await basketDevice.destroy()

        return res.status(200).json({id})
    }

    async getAll(req, res) {
        const user = req.user

        const basket = await Basket.findOne({
            where: {userId: user.id}
        })

        const basketItems = await BasketDevice.findAndCountAll({
            where: {basketId: basket.id}
        })

        const devices = []

        for (const item of basketItems.rows) {
            const device = await Device.findOne({
                where: {id: item.deviceId}
            })
            devices.push(device)
        }

        res.status(200).json(devices)
    }

}

module.exports = new BasketController()
