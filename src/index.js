import m from 'mithril';
import Home from './js/home';
import Join from'./js/join';
import Game from'./js/game';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    m.route(root, '/', {
        '/': Home,
        '/game/:code/join': Join,
        '/game/:code': Game
    });
});
