const getpage = (req, res) => {
    res.render('index.ejs') // goi file can render
};

const loi = (req, res) => {
    res.send('Error !') // goi file can render
};

module.exports = { getpage, loi }