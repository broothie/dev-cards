import m from 'mithril';
import Home from './js/home';
import Game from'./js/game';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    m.route(root, '/', {
        '/': Home,
        '/game/:code': Game
    });
});
