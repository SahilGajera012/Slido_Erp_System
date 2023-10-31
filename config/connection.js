const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect(process.env.database,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Data Base Connected Successfully");
}).catch((err) => {
    console.log("ERROR::",err);
});