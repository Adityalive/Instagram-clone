const express =require('express');
const follow = require('../Models/followmodel')
const user = require('../Models/user.model')


async function followadded(req,res){
    const status =req.body.status
   const follower= req.user.username
   const following = req.params.username
   if(follower === following){
    return res.status(400).send('You cannot follow yourself');
   }
   const followExists = await follow.findOne({
    follower,
    following
   })
   if(followExists){
    return res.status(400).send('You are already following this user');
   }
    const followcreated = await follow.create({
    follower,
    following,
    status:status
   });
   if(status==="rejected"){
    res.status(200).json({message:`You have rejected to follow ${following}`})
   }
    return res.status(201).json({
        message: `You are now following ${following}`,
        follow: followcreated
    });
}
    async function unfollow(req, res) {
        const follower = req.user.username;
        const following = req.params.username;
        const UserFollowing = await follow.findOne({
            follower,
            following
        });
        if (!UserFollowing) {
            return res.status(400).send('You are not following this user');
        }
        await followmodel.findByIdAndDelete(UserFollowing._id);
        
        return res.status(200).json({
         message: `You have unfollowed ${following}`,         
        }
        );
    }



module.exports = {
    followadded,
    unfollow
}