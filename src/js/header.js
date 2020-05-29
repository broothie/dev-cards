import m from 'mithril';
import flash from './flash';
import code_chip from './code_chip';

export default (code, error) => m('header', [
    m.route.get().startsWith('/game') && m(m.route.Link, {href: '/'}, '←back'),
    m('h1', 'Dev Cards'),
    code && code_chip(code),
    flash(error),
]);
