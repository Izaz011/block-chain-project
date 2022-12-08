const coinModel=require("../models/coinModel")
const axios=require("axios")
const { db } = require("../models/coinModel")


const storeCoin=async function(req,res){
    try{
        const options = {
            method: "get",
            url:"http://api.coincap.io/v2/assets"
        }
        const result=await axios(options)
        const data=result.data.data
        const sortedData=data.sort((a,b)=>a.changePercent24Hr-b.changePercent24Hr)

        await coinModel.deleteMany()
        await coinModel.insertMany(sortedData)


    sortedData.forEach(element => {delete element.explorer})
        return res.status(200).send({status:true,data:sortedData})
    }
    catch(error){
        return res.status(500).send({status:false,msg:error.message})
    }
}

module.exports={storeCoin}