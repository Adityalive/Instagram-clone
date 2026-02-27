const follow = require('../Models/followmodel');

async function followadded(req, res) {
  try {
    const follower = req.user.username;
    const following = req.params.username;

    if (follower === following) {
      return res.status(400).send('You cannot follow yourself');
    }

    const followExists = await follow.findOne({
      follower,
      following,
    });

    if (followExists) {
      return res.status(400).send('You are already following this user');
    }

    const followcreated = await follow.create({
      follower,
      following,
    });

    return res.status(201).json({
      message: `You are now following ${following}`,
      follow: followcreated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error adding follow');
  }
}

async function unfollow(req, res) {
  try {
    const follower = req.user.username;
    const following = req.params.username;

    const userFollowing = await follow.findOne({
      follower,
      following,
    });

    if (!userFollowing) {
      return res.status(400).send('You are not following this user');
    }

    await follow.findByIdAndDelete(userFollowing._id);

    return res.status(200).json({
      message: `You have unfollowed ${following}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error unfollowing');
  }
}

module.exports = {
  followadded,
  unfollow,
};
