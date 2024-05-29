import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import { createUser, getUserByUsername } from '../models/user.js';

export const register = async (req, res) => {
  const { username, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: '비밀번호가 일치하지 않습니다' });
  }

  const userExists = await getUserByUsername(username);

  if (userExists) {
    return res.status(400).json({ message: '이미 존재하는 사용자 이름입니다' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(username, hashedPassword);

  res.status(201).json({ id: user.id, username: user.username });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);

  if (!user) {
    return res.status(400).json({ message: '아이디 또는 비밀번호가 올바르지 않습니다' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: '아이디 또는 비밀번호가 올바르지 않습니다' });
  }

  const token = generateToken(user.id);
  res.json({ token });
};
