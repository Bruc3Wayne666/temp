const {Device, Rating} = require('../models/models')
const ApiError = require('../error/ApiError');

class RatingController {
    async add(req, res, next) {
        try {
            const user = req.user
            const {rate, deviceId} = req.body
            await Rating.create({
                userId: user.id,
                deviceId,
                rate
            })
            const device = await Device.findOne({
                where: {id: deviceId}
            })

            await device.increment(
                'rating',
                {by: rate}
            )
            console.log(device.rating)

            return res.json({message: 'Ваш отзыв учтён'})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getByDeviceId(req, res) {
        const {id} = req.params
        const {count} = await Rating.findAndCountAll({
            where: {deviceId: id}
        })

        const {rating} = await Device.findOne({
            where: {id}
        })

        return res.status(200).json({total: rating, count: count})
    }
}

module.exports = new RatingController()
