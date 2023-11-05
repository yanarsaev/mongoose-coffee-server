const Drink = require("../models/Drink.model")

module.exports.drinksController = {
    getAllDrinks: (req, res) => {
        Drink.find({})
        .then((drinks) => res.json(drinks))
        .catch((error) => res.json(error))
    },

    getSpecificDrink: (req, res) => {
        Drink.findOne({_id: req.params.id})
        .then((drink) => res.json(drink))
    },

    drinkInStock: (req, res) => {
        Drink.find({inStock: true})
        .then((drink) => res.json(drink))
    },
    
    addDrink: (req, res) => {
        const { name, price, inStock, isCaffeine, volume, description } = req.body
        Drink.create({
            name,
            price,
            inStock,
            isCaffeine,
            volume,
            description
        }).then(() => res.json('Напиток добавлен'))
        .catch(() => res.json('Ошибка'))
    },

    deleteDrink: (req, res) => {
        Drink.findByIdAndDelete(req.params.id)
        .then(() => res.json('Напиток удален'))
    },

    updateDrink: (req, res) => {
        const { name, price, inStock, isCaffeine, volume, description } = req.body
        Drink.findByIdAndUpdate(req.params.id, {name, price, inStock, isCaffeine, volume, description})
        .then(() => res.json('Напиток обновлен'))
    }
}