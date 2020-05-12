import m from 'mithril';
import {draw_card, get_game} from "./api";

export default () => {
    const code = m.route.param('code');
    if (!code) m.route.set('/');

    let interval = null;
    let remaining = null;

    const onclick = () => {
        draw_card(code)
            .then(data => alert(`You drew a ${data.card}!`))
            .then(update);
    };

    const update = () => {
        get_game(code).then(game => remaining = game.remaining);
    };

    return {
        oninit: () => {
            update();
            // interval = setInterval(update, 1000 / 2);
        },
        onremove: () => {
            clearInterval(interval);
        },
        view: () => m('div', [
            m('h1', `Game ${code}`),
            m('p', `Dev cards remaining: ${remaining}`),
            m('button', {onclick}, 'Draw a card')
        ])
    }
};
