
import mongoose from  'mongoose'

const connectDB = (url)=> {
  return mongoose
   .connect(url, {
      useCreateIndex:true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology:true,
   })
}
export default connectDB
