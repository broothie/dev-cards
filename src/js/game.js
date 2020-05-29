import m from 'mithril';
import _ from 'lodash';
import * as api from './api';
import Cookies from 'js-cookie';
import header from './header';

export default () => {
    const code = m.route.param('code');
    const player = Cookies.get(code);

    let error = null;
    let remaining = null;
    let player_counts = [];
    let buttons_disabled = false;

    // Draws a card
    const draw = () => {
        buttons_disabled = true;

        api.draw_card(code, player)
            .then(({card}) => alert(`You drew a ${card}!`))
            .then(update)
            .then(() => buttons_disabled = false);
    };

    // Draws a card
    const play = () => {
        buttons_disabled = true;

        api.play_card(code, player)
            .then(update)
            .then(() => buttons_disabled = false);
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

    const cards = (count, card) => Array(count).fill(card).join(' ');

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
        view: () => {
            const draw_disabled = remaining === 0 || buttons_disabled;
            const play_disabled = player_counts[player]?.played === player_counts[player]?.total || buttons_disabled;

            const counts_list = _.map(player_counts, (counts, player) => {
                const hidden = cards(counts.total - counts.played, '🎴');
                const showing = cards(counts.played, '🃏');
                return m('li', `${player} ${hidden} ${showing}`)
            });

            return m('main', [
                header(code, error),
                m('section', [
                    m('h4', `Hi ${player}!`),
                    m('p', `Dev cards remaining: ${remaining}`),
                    m('button', {onclick: draw, disabled: draw_disabled}, 'Draw a card'),
                    m('button', {onclick: play, disabled: play_disabled}, 'Play a card'),
                ]),
                m('section', [
                    m('h4', 'Card Counts'),
                    m('ul', counts_list),
                ]),
            ]);
        }
    }
};
