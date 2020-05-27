import m from 'mithril';
import Cookies from 'js-cookie';
import * as api from './api';
import text_input from './text_input';
import flash from "./flash";

export default () => {
    let error = m.route.param('error');
    const data = { game_code: Cookies.get('last_game') };

    const create_game = type => () => {
        api.create_game(type).then(game => reroute_to_join(game.code));
    };

    const reroute_to_join = code => {
        Cookies.set('last_game', code);
        m.route.set(`/game/${code}/join`);
    };

    const onclick = e => {
        e.preventDefault();
        reroute_to_join(data.game_code);
    };

    const key_events = text_input(data, () => reroute_to_join(data.game_code));

    return {
        view: () => m('main', [
            m('header', [
                m('h1', 'Dev Cards'),
                flash(error),
            ]),
            m('section', [
                m('h2', 'Join a game'),
                m('input', {type: 'text', placeholder: 'GAME CODE', ...key_events('game_code'), value: data.game_code}),
                m('button', {onclick}, 'Play')
            ]),
            m('section', [
                m('h2', '...or start a new game'),
                m('button', {onclick: create_game('original')}, 'New Original Deck'),
                m('button', {onclick: create_game('expansion')}, 'New Expansion Deck'),
            ])
        ])
    };
};
