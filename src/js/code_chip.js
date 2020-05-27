import m from 'mithril';

export default code => m('.chip', [`Game Code: `, m('span', code)]);
