const token = require('./token')

exports.formatData = (obj = {}) => {
    let { data = [], code = 1000, msg = 'success' } = obj;

    if (code === 250 && !obj.msg) {
        msg = 'fail';
    }
    return {
        code,
        data,
        msg
    }


}

exports.token = token;