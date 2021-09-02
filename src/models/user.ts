import mongoose from 'mongoose'

interface UserFields {
  email: string;
  password: string;
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
  build(attr: UserFields): UserDoc
}

interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true
  },
  password: {
    type: String, 
    required: true
  }
})

UserSchema.statics.build = (attr: UserFields) => {
  return new User(attr)
}

const User = mongoose.model<UserDoc, UserModelInterface>('User', UserSchema)

User.build({
    email: 'some email',
    password: 'some password'
})

export { User }