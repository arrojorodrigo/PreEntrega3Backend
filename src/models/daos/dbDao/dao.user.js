import { userModel } from '../../schemas/user.model.js'

export default class UserDao {

  getOneUser = async (filter) => {
    try {
      let user = await userModel.findOne({ ...filter });
      return user;
    } catch (error) {
      return error;
    }
  }

  createUser = async (newUser) => {
    try {
      let response = await userModel.create(newUser);
      return response;
    } catch (error) {
      return error;
    }
  }
}