import { db } from '../../../db/db.js';
import { DataTypes } from 'sequelize';

const PostModel = db.define('posts', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});

export default PostModel;