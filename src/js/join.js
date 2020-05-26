import m from 'mithril';
import Cookies from 'js-cookie';
import * as api from "./api";
import text_input from "./text_input";

export default () => {
    const code = m.route.param('code');
    if (!code) m.route.set('/');

    let error = m.route.param('error');
    const data = { player: Cookies.get(code) };

    const update = () => {
        api.get_game(code, data.player)
            .then(() => {
                Cookies.set(code, data.player);
                m.route.set(`/game/${code}`);
            })
            .catch(err => {
                if (err.code !== 422) {
                    m.route.set('/', {error: err.response.message});
                    return;
                }

                error = err.response.message;
            });
    };

    const join = () => {
        api.join_game(code, data.player).then(update);
    };

    const key_events = text_input(data, join);

    const onclick = e => {
        e.preventDefault();
        join();
    };

    return {
        view: () => m('div', [
            m('h2', ['Join Game ', m('span', {style: 'font-family:monospace;'}, code)]),
            error && m('p', {style: 'color:red;'}, error),
            m('input', {type: 'text', placeholder: 'NAME', ...key_events('player')}),
            m('span', ' '),
            m('button', {placeholder: 'NAME', onclick}, 'Join')
        ])
    }
};
