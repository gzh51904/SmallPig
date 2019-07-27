import React,{Component} from 'react';
import './information.css';


class Information extends Component{
    constructor(){
        super();
        this.state={
            datas:[{
                title:'实时数据',
                imgurl:require("../../asset/img/icon8.png")
            },
            {
                title:'运营报告',
                imgurl:require("../../asset/img/icon9.png")
            },
            {
                title:'审计报告',
                imgurl:require("../../asset/img/icon10.png")
            },],
            ours:[{
                title:'企业介绍',
                imgurl:require("../../asset/img/icon1.png")
            },{
                title:'荣誉资质',
                imgurl:require("../../asset/img/icon2.png")
            },{
                title:'组织架构',
                imgurl:require("../../asset/img/icon3.png")
            },{
                title:'发展历史',
                imgurl:require("../../asset/img/icon4.png")
            },],
            infs:[{
                title:'平台公告',
                imgurl:require("../../asset/img/icon_22.png")
            },{
                title:'债权债务人员',
                imgurl:require("../../asset/img/icon6.png")
            },{
                title:'回款展期公告',
                imgurl:require("../../asset/img/icon6.png")
            },{
                title:'债务催收公告',
                imgurl:require("../../asset/img/icon6.png")
            },{
                title:'小猪动态',
                imgurl:require("../../asset/img/icon6.png")
            },{
                title:'媒体报道',
                imgurl:require("../../asset/img/icon7.png")
            },{
                title:'创始人专访',
                imgurl:require("../../asset/img/icon5.png")
            },{
                title:'行业资讯',
                imgurl:require("../../asset/img/icon_21.png")
            },],
            ensure:[{
                title:'安全保障',
                imgurl:require("../../asset/img/icon_14.png")
            },{
                title:'风控管理',
                imgurl:require("../../asset/img/icon_20.png")
            },{
                title:'法人承诺书',
                imgurl:require("../../asset/img/icon12.png")
            },],
            othersinf:[{
                title:'收费标准',
                imgurl:require("../../asset/img/icon_16.png")
            },{
                title:'出借教育',
                imgurl:require("../../asset/img/icon11.png")
            }]
        }
    }

    render(){
        return (
            <div className="gray">
                <h1>运营数据</h1>
                <ul className="list">
                {
                    this.state.datas.map((item,idx)=>{
                        return <li key={idx}>
                        <i className="list-icon">
                            <img src={item.imgurl} alt={item.title}/>
                        </i>
                        <span>{item.title}</span>
                        <i className="ic_right"></i>
                    </li>
                    })
                }
                
                </ul>
                <h1>关于我们</h1>
                <ul className="list">
                {
                    this.state.ours.map((item,idx)=>{
                        return <li key={idx}>
                        <i className="list-icon">
                            <img src={item.imgurl} alt={item.title}/>
                        </i>
                        <span>{item.title}</span>
                        <i className="ic_right"></i>
                    </li>
                    })
                }
                
                </ul>
                <h1>信息咨讯</h1>
                <ul className="list">
                {
                    this.state.infs.map((item,idx)=>{
                        return <li key={idx}>
                        <i className="list-icon">
                            <img src={item.imgurl} alt={item.title}/>
                        </i>
                        <span>{item.title}</span>
                        <i className="ic_right"></i>
                    </li>
                    })
                }
                </ul>
                <h1>保障体系</h1>
                <ul className="list">
                {
                    this.state.ensure.map((item,idx)=>{
                        return <li key={idx}>
                        <i className="list-icon">
                            <img src={item.imgurl} alt={item.title}/>
                        </i>
                        <span>{item.title}</span>
                        <i className="ic_right"></i>
                    </li>
                    })
                }
                </ul>
                <h1>其他</h1>
                <ul className="list">
                {
                    this.state.othersinf.map((item,idx)=>{
                        return <li key={idx}>
                        <i className="list-icon">
                            <img src={item.imgurl} alt={item.title}/>
                        </i>
                        <span>{item.title}</span>
                        <i className="ic_right"></i>
                    </li>
                    })
                }
                </ul>
            </div>
        )
    }
}
export default Information