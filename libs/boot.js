module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Task List API - Port ${app.get('port')}`);    
    });    
};