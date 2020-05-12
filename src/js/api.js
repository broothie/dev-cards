import m from 'mithril';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4567' : 'https://catan-aktwynnwda-uc.a.run.app';

export const new_game = type => m.request({ method: 'POST', url: `${BASE_URL}/games`, params: { type } });

export const get_game = code => m.request({ method: 'GET', url: `${BASE_URL}/games/${code}` });

export const draw_card = code => m.request({ method: 'GET', url: `${BASE_URL}/games/${code}/draw` });
