import m from 'mithril';
import {get_game, new_game} from "./api";

export default () => {
    let game_code = '';

    const create_game = type => () => {
        new_game(type).then(game => m.route.set(`/game/${game.code}`));
    };

    const load_game = () => {
        get_game(game_code).then(game => m.route.set(`/game/${game.code}`));
    };

    const onclick = e => {
        e.preventDefault();
        load_game();
    };

    const onkeydown = e => {
        game_code = e.target.value;
        if (e.key === 'Enter') load_game();
    };
    const oninput = onkeydown;
    const onchange = onkeydown;

    return {
        view: () => m('div', [
            m('h1', 'Catan Dev Card Deck Simulator'),
            m('div', [
                m('div', [
                    m('h2', 'Start a new game'),
                    m('button', {onclick: create_game('original')}, 'New Original Deck'),
                    m('button', {onclick: create_game('expansion')}, 'New Expansion Deck'),
                ]),
                m('div', [
                    m('h2', '...or join a game'),
                    m('input', {type: 'text', placeholder: 'abc123', onkeydown, oninput, onchange}),
                    m('button', {onclick}, 'Find Game')
                ])
            ])
        ])
    };
};
