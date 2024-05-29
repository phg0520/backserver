import { createCharacter, getCharacterByName, deleteCharacter } from '../models/character.js';

export const createCharacterHandler = async (req, res) => {
  const { name } = req.body;
  const existingCharacter = await getCharacterByName(name);

  if (existingCharacter) {
    return res.status(400).json({ message: '이미 존재하는 캐릭터 이름입니다' });
  }

  const character = await createCharacter(name, 500, 100, 10000, req.user.id);
  res.status(201).json({ id: character.id });
};

export const deleteCharacterHandler = async (req, res) => {
  const { id } = req.params;
  const character = await deleteCharacter(parseInt(id), req.user.id);

  if (!character.count) {
    return res.status(400).json({ message: '캐릭터를 찾을 수 없거나 권한이 없습니다' });
  }

  res.status(204).send();
};
