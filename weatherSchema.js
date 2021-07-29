const mongoose=require('mongoose');


const weather=mongoose.Schema({
  name:String,
  time_stamp:String,
  latitude:Number,
  longitude:Number,
  maxtemp_c:Number,
  feels_like:Number,
  description:String
  
});


module.exports=mongoose.model('weather',weather);