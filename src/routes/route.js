const dotenv = require('dotenv')
function useAPI(app){
    dotenv.config();    
    app.use('/api/user',require('./apis/user'));
    app.use('/api/product',require('./apis/products'));
    app.use('/api/address',require('./apis/address'));
    app.use('/api/order',require('./apis/order'));
    app.use('/api/wishlist',require('./apis/wishlist'));
}

module.exports= useAPI;