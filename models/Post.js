 const mongoose = require('mongoose');

 const PostSchema = new mongoose.Schema({
     title:{
         type: String,
         required: true
     },
     imageUrl: {
         type: String,
         required: true
     },
     categeories: {
         type: [String],
         required: true
     },
     description: {
        type: String,
        required: true
      },
     createdDate: {
         type: Date,
         default: Date.now
     },
     likes: {
         type: Number,
         default: 0
     },
     //property = path property
     //ref('user')
     createdBy: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User"
     },
     messages:[{
         messaageBody: {
             type: String,
             required: true
         },
         messageDate: {
             type: Date,
             default: Date.now
         },
         messageUser: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
         }
     }]
 });


 module.exports = mongoose.model("Post", PostSchema);