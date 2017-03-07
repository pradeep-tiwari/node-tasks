module.exports =  app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: 'Get shoes'},
                {title: 'Buy laptop'}
            ]);    
        }    
    };    
};