import m from 'mithril';
import Cookies from 'js-cookie';
import * as api from './api';
import text_input from './text_input';
import code_chip from './code_chip';
import flash from "./flash";

export default () => {
    let error = m.route.param('error');
    const code = m.route.param('code');
    const data = { player: Cookies.get(code) };

    const reroute_to_game = (code, player) => {
        Cookies.set(code, player);
        m.route.set(`/game/${code}`);
    };

    const join = () => {
        api.join_game(code, data.player)
            .then(() => {
                Cookies.set(code, data.player);
                reroute_to_game(code, data.player);
            })
            .catch(err => error = err.response.message);
    };

    const key_events = text_input(data, join);

    const onclick = e => {
        e.preventDefault();
        join();
    };

    return {
        oninit: () => {
            api.get_game(code)
                .catch(err => {
                    if (err.code === 404) m.route.set('/', {error: err.response.message})
                });

            if (!!data.player) reroute_to_game(code, data.player);
        },
        view: () => m('main', [
            m('header', [
                m('h1', 'Dev Cards'),
                flash(error),
                code_chip(code),
            ]),
            m('section', [
                m('h4', 'Join Game'),
                m('input', {type: 'text', placeholder: 'NAME', ...key_events('player')}),
                m('button', {placeholder: 'NAME', onclick}, 'Join')
            ]),
        ])
    }
};
