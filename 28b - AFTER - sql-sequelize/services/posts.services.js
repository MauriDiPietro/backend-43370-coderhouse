import PostDaoMySql from "../daos/mysql/posts.dao.js";
const postDao = new PostDaoMySql();

export const createPost = async (post) => {
  try {
    const newPost = await postDao.createPost(post);
    if (!newPost) return false;
    else return newPost;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllPosts = async () => {
  try {
    return await postDao.getAllPosts();
  } catch (error) {
    throw new Error(error);
  }
};

export const getPostById = async (id) => {
  try {
    const post = await postDao.getPostById(id);
    if (!post) return false;
    else return post;
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePost = async (id, body) => {
  try {
    const post = await postDao.getPostById(id);
    if (!post) return false;
    else return await postDao.updatePost(id, body);
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (id) => {
  try {
    return await postDao.deletePost(id);
  } catch (error) {
    throw new Error(error);
  }
};
