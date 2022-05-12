import axios from 'axios';

export const fetchCharacter = async (offset: number): Promise<any> => {
   return await axios.get(`${process.env.BASE_API_URL}characters?limit=30&offset=${offset}&ts=1&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.HASH}`).then((res) => { return res.data.data; }).catch(err => err)
}

export const fetchCharacterById = async (char_id: string): Promise<any> => {
   return await axios.get(`${process.env.BASE_API_URL}characters/${char_id}?ts=1&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.HASH}`).then((res) => { return res.data.data; }).catch(err => err)
}

export const fetchComicsById = async (char_id: string): Promise<any> => {
   return await axios.get(`${process.env.BASE_API_URL}characters/${char_id}/comics?orderBy=-focDate&limit=10&offset=0&ts=1&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.HASH}`).then((res) => { return res.data.data; }).catch(err => err)
}