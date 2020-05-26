import m from 'mithril';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4567' : 'https://catan-aktwynnwda-uc.a.run.app';

export const create_game = type => m.request({method: 'POST', url: `${BASE_URL}/games`, params: {type}});

export const join_game = (code, player) => m.request({method: 'POST', url: `${BASE_URL}/games/${code}/join?player=${player}`});

export const get_game = (code, player) => m.request({method: 'GET', url: `${BASE_URL}/games/${code}?player=${player}`});

export const draw_card = (code, player) => m.request({method: 'GET', url: `${BASE_URL}/games/${code}/draw?player=${player}`});
