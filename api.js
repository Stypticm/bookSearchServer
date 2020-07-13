const express = require("express");
const router = express.Router();
const Books = require("./utils/mongo/mongoose").default

router.get("/books", (req, res) => {
    Books.find({})
        .then(book => {
            res.send(book);
        });
})
  // request - манипулирование с запросом сервера
  // response - манипулирование с ответом сервера

router.post("/books", (req, res) => {
    Books.create(req.body)
        .then(book => {
            res.send(book);
        })
})

router.put("/books/:id", (req, res) => {
    Books.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(book => {
             res.send(book);
        });
})

// new:true - получение обновленного объекта

router.delete("/books/:id", (req, res) => {
    Books.deleteOne({_id: req.params.id})
        .then(book => {
            res.send(book);
        });
})

module.exports = router;