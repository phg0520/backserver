import prisma from '../prisma/client.js';

export const createItem = (code, name, stat, price) => {
  return prisma.item.create({
    data: { code, name, stat, price }
  });
};

export const getItemByCode = (code) => {
  return prisma.item.findUnique({ where: { code } });
};

export const updateItem = (id, name, stat) => {
  return prisma.item.update({
    where: { id },
    data: { name, stat }
  });
};

export const listItems = () => {
  return prisma.item.findMany({ select: { code, name, price } });
};

export const getItemDetails = (code) => {
  return prisma.item.findUnique({ where: { code } });
};
