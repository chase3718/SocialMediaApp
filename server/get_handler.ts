import { Express, Request, Response } from 'express';
import mysql from './db_service/mysqlservice';

export default async (req: Request, res: Response): Promise<any> => {
	let taskName = req.query.taskName;
	let response;
	switch (taskName) {
		case 'getAllUsers':
			let users = await getUsers();
			response = { status: 'success', data: users };
			return res.json(response);
		case 'getAllPosts':
			let posts = await getPosts();
			response = { status: 'success', data: posts };
			return res.json(response);
        case 'getComments':
            let parentId = req.query.parent_id;
            let comments = await getComments(parentId as string);
            response = { status: 'success', data: comments };
            return res.json(response);
	}

	return res.json({ status: 'error', message: 'Invalid task name' });
};

const getUsers = async () => {
	let sql = 'SELECT * FROM users';
	const users = await mysql.query(sql);
	return users;
};

const getPosts = async () => {
    let sql = 'SELECT * FROM posts WHERE parent_id IS NULL';
    const posts = await mysql.query(sql);
    return posts;
};

const getComments = async (parentId: string) => {
    let sql = 'SELECT * FROM posts WHERE parent_id = ?';
    const comments = await mysql.query(sql, [parentId]);
    return comments;
};