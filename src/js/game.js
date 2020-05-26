import m from 'mithril';
import _ from 'lodash';
import * as api from "./api";
import Cookies from "js-cookie";

export default () => {
    const code = m.route.param('code');
    if (!code) m.route.set('/');

    const player = Cookies.get(code);
    if (!player) m.route.set(`/game/${code}/join`, {error: 'missing player'});

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
        api.get_game(code, player)
            .then(game => {
                remaining = game.remaining;
                player_counts = game.player_counts;
            })
            .catch(({response}) => m.route.set('/', {error: response.message}));
    };

    return {
        oninit: () => {
            update();
            window.addEventListener('focus', update);
        },
        onremove: () => {
            window.removeEventListener('focus', update);
        },
        view: () => m('div', [
            m('p', ['Game code: ', m('span', {style: 'font-family:monospace;'}, code)]),
            m('p', `Hi ${player}!`),
            m('p', `Dev cards remaining: ${remaining}`),
            m('button', {onclick, disabled: !draw_enabled || remaining === 0}, 'Draw a card'),
            m('br'),
            m('br'),
            m('br'),
            m('div', [
                m('p', 'Player Counts'),
                ..._.map(player_counts, (count, player) => m('p', `${player}: ${count}`))
            ]),
        ])
    }
};
