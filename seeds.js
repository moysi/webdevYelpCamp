var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

// var data = [
//         {
//             name: "Cloud's Rest",
//             image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
//             description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32"
//         },
//         {
//             name: "Desert Mesa",
//             image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
//             description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32"
//         },
//         {
//             name: "Beach Front",
//             image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
//             description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32"
//         }
        
//     ]

function seedDb(){
    
    //Remove all campgrounds
    Campground.remove({}, function(err){
      if(err){
          console.log(err);
      } 
    //   console.log("removed campgrounds");
    //   data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err);
    //             }else{
    //                 console.log("added a campground");
    //                 //create a comment
    //                 Comment.create(
    //                     {
    //                         text: "This place is great, but I wish there was internet",
    //                         author: "Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err);
    //                         }else{
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("created new comment");
    //                         }
    //                     });
    //             }
    //         });
    //     });
    });
}

module.exports = seedDb;
