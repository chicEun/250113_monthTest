const commentServices = require('../services/comment.service');

const getCommentList = async() => {
    // const comments = await commentServices.findAll();
    // console.log();
    res.render('comment/list.html', {
    
    })
}

const postCommentWrite = async() =>{
    res.render('/comment/write.html');
}



module.exports = {
   getCommentList,
   postCommentWrite
}