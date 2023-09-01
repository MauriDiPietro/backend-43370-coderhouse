import PostModel from "./models/posts.model.js";

export default class PostDaoMySql {
  async createPost(post) {
    try {
     return await PostModel.create(post);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllPosts() {
    try {
     const posts = await PostModel.findAll();
     if(!posts) return false;
     else return posts
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPostById(id) {
    try {
      const post = await PostModel.findOne({
        where: {
          id: id
        }
      })
      if(!post) return false
      else return post
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePost(id, body) {
    try {
      return await PostModel.update(body, {
        where: {
          id: id
        }
      })
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePost(id) {
    try {
      return await PostModel.destroy({
        where: {
          id: id
        }
      })
    } catch (error) {
      throw new Error(error);
    }
  }
}
