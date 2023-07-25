import { getRandomDate, getRandomNumber } from "../../utils.js";
import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB {

  async getUserByName(name) {
    try {
      const response = await UserModel.find({first_name: name}).explain();
      return response.executionStats;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id) {
    try {
      const response = await UserModel.findById(id).populate('pets')
      // .explain();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByEmail(email) {
    try {
      const response = await UserModel.find({email: email}).explain();
      return response.executionStats;
    } catch (error) {
      console.log(error);
    }
  }

  
  async createUser(obj) {
    try {
      const response = await UserModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id, obj) {
    try {
      await UserModel.updateOne({ _id: id }, obj);
      return obj;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id) {
    try {
      const response = await UserModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async aggregation(){
    try {
      const response = await UserModel.aggregate([
        {
          $match: { 
            // gender: `${gender}`,
            age: { $gte: 18 } 
          }
        },
        {
          $group: {
            _id: '$gender',
            average_age: { $avg: '$age' },
            count: { $sum: 1 },
            youngest: { $min: '$age' },
            oldest: { $max: '$age' }
          }
        },
        {
          $sort: {
            average_age: 1
          }
        }
      ])
      return response
    } catch (error) {
      console.log(error);
    }
  }

  async updateManyAge(){
    try {
      const users = await UserModel.find({});
      users.forEach((user)=> {
        user.age = getRandomNumber();
        user.date = getRandomDate();
        user.save()
      });
      return { message: 'updated OK' }
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers(page = 1, limit = 10) {
    try {
      const response = await UserModel.paginate({}, { page, limit });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
