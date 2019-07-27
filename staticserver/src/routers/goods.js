const express = require("express");
const Router = express.Router();
const {
    formatData
} = require('../utils');
const { mysql: query } = require("../db");



Router.get('/', (req, res) => {

    query('SELECT * FROM goods').then(function (data) {
        res.send(formatData({
            data
        }));
    }).catch((error) => {
        res.send(formatData({
            data: error,
            code: 250
        }))
    })
})


Router.get('/:id', (req, res) => {

    let {
        id
    } = req.params;

    sql = `SELECT * FROM goods WHERE ${id}`;

    query(sql).then(function (data) {

        res.send(formatData({
            data
        }));
    }).catch((error) => {
        res.send(formatData({
            data: error,
            code: 250
        }))
    })
})



Router.post('/', (req, res) => {

    let names = '';
    let tmp = '';
    console.log("req.body++++++++++++", req.body);

    for (let key in req.body) {

        names += key + ","
        tmp += '"' + req.body[key] + '",'
    };
    names = names.slice(0, -1);
    tmp = tmp.slice(0, -1);

    sql = `INSERT INTO goods (${names}) VALUES (${tmp})`;


    query(sql).then(function (data) {
        res.send(formatData({
            data
        }));
    }).catch((error) => {
        res.send(formatData({
            data: error,
            code: 250
        }))
    })

});

Router.put("/:id", (req, res) => {
    let {
        id
    } = req.params;


    let values = '';

    for (var key in req.body) {
        values += `${key}='${req.body[key]}',`
    }
    values = values.slice(0, -1);
    sql = `UPDATE goods set ${values} WHERE ${id}`;
    console.log("---sql----------", sql);


    query(sql).then(function (data) {
        res.send(formatData({
            data
        }));
    }).catch((error) => {
        res.send(formatData({
            data: error,
            code: 250
        }))
    })

})
Router.delete("/:id", (req, res) => {
    let {
        id
    } = req.params;

    console.log(id);


    sql = `DELETE  FROM goods WHERE ${id}`;
    console.log(sql);

    query(sql).then(function (data) {
        res.send(formatData({
            data
        }));
    }).catch((error) => {
        res.send(formatData({
            data: error,
            code: 250
        }))
    })


})


module.exports = Router;