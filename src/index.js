import m from 'mithril';
import Home from './js/home';
import Join from'./js/join';
import Game from'./js/game';
import * as api from './js/api';

document.addEventListener('DOMContentLoaded', () => {
    api.ping();
    window.addEventListener('focus', api.ping);

    const root = document.getElementById('root');

    m.route(root, '/', {
        '/': Home,
        '/game/:code/join': Join,
        '/game/:code': Game
    });
});
