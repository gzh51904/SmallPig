const express = require("express");
const Router = express.Router();
const { formatData, token } = require('../utils')
const { mysql: query } = require("../db");



Router.post('/', async (req, res) => {
    console.log("req.body+++++++++++++++++", req.body.params);


    let sql01 = `SELECT * FROM singin WHERE userphone=${req.body.params["phone"]}`;
    let sql02 = `SELECT * FROM singin WHERE userphone=${req.body.params["phone"]} and password = ${req.body.params["password"]}`;
    let userphone = req.body["phone"]
    console.log("sql01", sql01);

    query(sql01).then(function (data) {

        if (data.length != 0) {
            query(sql02).then(function (data1) {


                if (data1.length == 0) {
                    //密码错误
                    res.send("102");
                } else {
                    //账号密码正确
                    console.log("data1111111111:", data1);
                    // res.send(userphone)
                    let Athorization = token.create(userphone);
                    // res.set('Athorization', Athorization);
                    res.send(formatData({ data: Athorization }))
                }



            }).catch((error) => {

            })
        } else if (data.length == 0) {
            //账号不正确
            res.send("101");
        }



    })



})




module.exports = Router;