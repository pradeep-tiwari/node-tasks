module.exports = app => {
    app.get('/', (req, res) => {
        res.json({status: 'Task List API Up & Running'});
    });
};