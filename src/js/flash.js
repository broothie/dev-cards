import m from 'mithril';

export default message => {
    if (message?.length !== 0) return m('p.error', message);
    return null;
}
