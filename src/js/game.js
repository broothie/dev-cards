import m from 'mithril';
import _ from 'lodash';
import * as api from './api';
import Cookies from 'js-cookie';
import code_chip from './code_chip';
import flash from "./flash";

export default () => {
    const code = m.route.param('code');
    const player = Cookies.get(code);

    let error = null;
    let remaining = null;
    let player_counts = [];
    let draw_enabled = true;

    // Draws a card
    const onclick = () => {
        draw_enabled = false;

        api.draw_card(code, player)
            .then(({card}) => alert(`You drew a ${card}!`))
            .then(update)
            .then(() => draw_enabled = true);
    };

    // Updates game info
    const update = () => {
        api.get_game(code)
            .then(game => {
                remaining = game.remaining;
                player_counts = game.player_counts;
            })
            .catch(({response}) => m.route.set('/', {error: response.message}));
    };

    return {
        oninit: () => {
            api.get_game(code)
                .catch(err => {
                    if (err.code === 404) m.route.set('/', {error: err.response.message})
                });

            if (!player) m.route.set(`/game/${code}/join`, {error: 'missing player'});

            update();
            window.addEventListener('focus', update);
        },
        onremove: () => {
            window.removeEventListener('focus', update);
        },
        view: () => m('main', [
            m('header', [
                m('h1', 'Dev Cards'),
                code_chip(code),
                flash(error),
            ]),

            m('section', [
                m('h4', `Hi ${player}!`),
                m('p', `Dev cards remaining: ${remaining}`),
                m('button', {onclick, disabled: !draw_enabled || remaining === 0}, 'Draw a card'),
            ]),
            m('section', [
                m('h4', 'Card Counts'),
                ..._.map(player_counts, (count, player) => m('p', `${player}: ${count}`))
            ]),
        ])
    }
};
