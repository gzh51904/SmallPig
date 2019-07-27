import React from 'react';
import './BankCard.css'

function BankCard() {
    return <div>
        <form className="card">

            <label>
                <span>持卡人</span>
                <input type="text" placeholder="请输入持卡人姓名" />
            </label>
            <label>
                <span>身份证号</span>
                <input type="text" placeholder="请输入持卡人身份证号" />
            </label>
            <label className="bank">
                <span>银行卡号</span>
                <input type="text" placeholder="请输入银行卡号" />
            </label>
            <label className="verify">
                <span>验证码</span>
                <input type="text" name="codes" placeholder="请输入您收到的验证码" />
                <button type="button" className="btn small border btn-verify" >获取验证码</button>
            </label>
            <p>您正在使用的手机号码：<span>12345678915</span> <a>查看支持银行和限额</a></p>
            <div className="checkbox-group">
                <input type="checkbox" name="read1"/>
                <label className="checkbox" htmlFor="box1">
                 <span style={{width:"2.2rem"}}>我已阅读并同意</span>
                    <a >《江西银行网络交易资金存管第三方协议》</a>
                </label> <input type="checkbox" name="read2" />
                <label className="checkbox" htmlFor="box2">
                 <span style={{width:"2.2rem"}}>我已阅读并同意</span>
                    <a>《平台用户授权协议》</a>
                </label>
            </div>
            <div className="subti">
            <button type="button">提交</button>
            </div>
        </form>
        <div className="footer">
        <p>注册手机号和银行卡预留手机号必须一致</p>
        <p>不支持信用卡的绑定。</p>
        </div>
    </div>
}
export default BankCard