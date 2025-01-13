const express = require('express');
const router = express.Router();
const {findAll, findOne, write, update, commentDelete} = require('../repository/comment.repository');


router.get('/comment/list',async(req, res) => {
    const commentList = await findAll();
    // console.log(await findAll());
    res.render('comment/list.html', {commentList});
})

router.post('/comment/write', async(req, res) => {
        const {content} = req.body;
        console.log(req.body);
        const insert = await write("dmsdbwjd", content);
        res.status(200).redirect('/comment/list');

        
        
})



router.get('/comment/update/:id', async(req, res) => {
    const id = req.params.id;
    const [comment] = await findOne(id);
    console.log(comment);
    res.render('comment/write.html', {comment});
})

router.post('/comment/update/:id',async(req, res) => {
    const id = parseInt(req.params.id);
    const {content} = req.body;
    console.log(id, content);
    const result = await update({id, content});
    console.log(result);
    res.status(200).redirect('/comment/list');
})


router.post('/comment/delete/:id',async(req, res) => {
    const id = req.params.id
    await commentDelete(id);
    res.redirect('/comment/list');

})





module.exports = router;