const pool = require("./db");

const findAll = async() => {
    const[result] = await pool.query('SELECT * FROM comments;');
    return result;
}

const findOne = async(id) => {
    const[result] = await pool.query(`SELECT * FROM comments where id=${id}`);
    return result;
}

const write = async(user_id, content) =>{
    console.log(user_id, content);
    
    const result = await pool.query(`
        INSERT INTO comments (user_id, content) VALUES ("${user_id}", "${content}")`)        
        return result;
}

const update = async({id, content}) => {
    const[result] = await pool.query(`
        UPDATE comments SET content="${content}" WHERE id="${id}"`)
        return result;
}

const commentDelete = async(id) => {
    const [result] = await pool.query(`
        DELETE FROM comments WHERE id=${id}`)
        return result;
}

module.exports = {
    findAll,
    findOne,
    write,
    update,
    commentDelete
}