const testController = (req, res)=>{
    res.status(200).send({
        message:"test passed",
        success:true
    })
}
module.exports = {testController}