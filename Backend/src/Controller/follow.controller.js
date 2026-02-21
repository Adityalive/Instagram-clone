const express =require('express');
const follow = require('../Models/followmodel');

async function follow(req,res){
   const follower= req.user.username
   const following = req.params.username
   if(follower === following){
    return res.status(400).send('You cannot follow yourself');
   }
   const followExists = await follow.findOne({
    follower,
    following
   })
   const followcreated = await follow.create({
    follower,
    following
   });
    return res.status(201).json({
        message: 'follow created successfully',
        follow: followcreated
    });
}