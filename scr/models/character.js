import prisma from '../prisma/client.js';

export const createCharacter = (name, health, power, money, userId) => {
  return prisma.character.create({
    data: { name, health, power, money, userId }
  });
};

export const getCharacterByName = (name) => {
  return prisma.character.findUnique({ where: { name } });
};

export const deleteCharacter = (id, userId) => {
  return prisma.character.deleteMany({ where: { id, userId } });
};
