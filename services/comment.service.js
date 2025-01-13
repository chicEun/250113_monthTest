const commentRepository = require('../repository/comment.repository');

const findAll = async() => {
    const result = await commentRepository.findAll();
    return result;

}

const findOne = async(id) => {
    const result = await commentRepository.findOne(id);
    return result;
}

const write = async(data) => {
    const result = await commentRepository.write(data);
    return result;
}

const update = async(data) => {
    const result = await commentRepository.update(data);
    return result;
}
const commentDelete = async() => {
    const result = await commentRepository.commentDelete(data);
    return result;
}

module.exports = {
    findAll,
    findOne,
    write,
    update,
    commentDelete
}