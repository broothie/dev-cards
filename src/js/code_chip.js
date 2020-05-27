import m from 'mithril';

export default code => m('.chip', [`Game: `, m('span', code)]);
