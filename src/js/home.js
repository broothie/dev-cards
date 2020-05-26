import m from 'mithril';
import * as api from "./api";
import text_input from "./text_input";

export default () => {
    let data = { game_code: null };
    let error = m.route.param('error');

    const create_game = type => () => {
        api.create_game(type).then(({code}) => m.route.set(`/game/${code}/join`));
    };

    const reroute_to_join = () => m.route.set(`/game/${data.game_code}/join`);

    const onclick = e => {
        e.preventDefault();
        reroute_to_join();
    };

    const key_events = text_input(data, reroute_to_join);

    return {
        view: () => m('div', [
            m('h1', 'Catan Dev Card Deck Simulator'),
            m('div', [
                m('div', [
                    error && m('p', {style: 'color:red;'}, error),
                    m('h2', 'Join a game'),
                    m('input', {type: 'text', placeholder: 'GAME CODE', ...key_events('game_code')}),
                    m('span', ' '),
                    m('button', {onclick}, 'Play')
                ]),
                m('div', [
                    m('h2', '...or start a new game'),
                    m('button', {onclick: create_game('original')}, 'New Original Deck'),
                    m('span', ' '),
                    m('button', {onclick: create_game('expansion')}, 'New Expansion Deck'),
                ])
            ])
        ])
    };
};
