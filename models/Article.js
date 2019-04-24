// Require mongoose
var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ArticleSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    link:{
        type:String,
        // required:true,
        unique:true
    },
    summary:{
        type:String
    },
    comments:[{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }],
    saved:{
        type:Boolean,
        required:true,
        default:false
    }
});
var Article=mongoose.model("Article",ArticleSchema);
module.exports=Article;