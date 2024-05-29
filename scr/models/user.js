import prisma from '../prisma/client.js';

export const createUser = (username, password) => {
  return prisma.user.create({
    data: { username, password }
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({ where: { username } });
};
