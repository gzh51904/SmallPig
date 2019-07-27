const express = require("express");
const Router = express.Router();
const {
    formatData
} = require('../utils');
const { mysql: query } = require("../db");



Router.post('/', async (req, res) => {

    let sql01 = `SELECT * FROM singin WHERE userphone=${req.body.params["phone"]}`;
    // let sql02 = `SELECT * FROM singin WHERE userphone=${req.body["phone"]} and password = ${req.body["password"]}`;

    console.log("sql01", sql01);


    query(sql01).then(function (data) {


        if (data.length == 0) {
            let values = '';

            for (var key in req.body.params) {
                values += `'${req.body.params[key]}',`
            }
            console.log("45544", values);

            values = values.slice(0, -1);
            sql = `INSERT INTO singin (userphone,password) VALUES (${values})`
            query(sql).then(function (data) {
                res.send(formatData());

            }, (err) => {
                res.send(formatData({
                    data: err,
                    code: 250
                }))
            })
        } else {
            res.send("250");
        }


    })



})




module.exports = Router;