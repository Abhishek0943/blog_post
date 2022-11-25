const PostMessage = require('../model/model')
exports.getPost = async (req, res) => {
   try {
    const postMessage =  await PostMessage.find()
    res.status(200).json(postMessage)
   } catch (error) {
    res.status(404).json({message:error.message})
   }
}
exports.createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
 try {
     await newPost.save()
     res.status(200).json(newPost)
 } catch (error) {
    res.status(409).json({message:error.message})
 }
}