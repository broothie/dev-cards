import m from 'mithril';
import {draw_card, get_game} from "./api";

export default () => {
    const code = m.route.param('code');
    if (!code) m.route.set('/');

    let interval = null;
    let remaining = null;
    let enabled = true;

    const onclick = () => {
        enabled = false;

        draw_card(code)
            .then(({ card }) => alert(`You drew a ${card}!`))
            .then(update)
            .then(() => enabled = true);
    };

    const update = () => {
        get_game(code).then(game => remaining = game.remaining);
    };

    return {
        oninit: () => {
            update();
            interval = setInterval(update, 1000 / 2);
        },
        onremove: () => {
            clearInterval(interval);
        },
        view: () => m('div', [
            m('h1', `Game ${code}`),
            m('p', `Dev cards remaining: ${remaining}`),
            m('button', {onclick, disabled: !enabled || remaining === 0}, 'Draw a card')
        ])
    }
};
