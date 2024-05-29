import { createItem, getItemByCode, updateItem, listItems, getItemDetails } from '../models/item.js';

export const createItemHandler = async (req, res) => {
  const { code, name, stat, price } = req.body;
  const existingItem = await getItemByCode(code);

  if (existingItem) {
    return res.status(400).json({ message: '이미 존재하는 아이템 코드입니다' });
  }

  const item = await createItem(code, name, stat, price);
  res.status(201).json(item);
};

export const updateItemHandler = async (req, res) => {
  const { id } = req.params;
  const { name, stat } = req.body;

  const updatedItem = await updateItem(parseInt(id), name, stat);

  if (!updatedItem) {
    return res.status(400).json({ message: '아이템을 찾을 수 없습니다' });
  }

  res.json(updatedItem);
};

export const listItemsHandler = async (req, res) => {
  const items = await listItems();
  res.json(items);
};

export const getItemDetailsHandler = async (req, res) => {
  const { code } = req.params;
  const item = await getItemDetails(parseInt(code));

  if (!item) {
    return res.status(400).json({ message: '아이템을 찾을 수 없습니다' });
  }

  res.json(item);
};
