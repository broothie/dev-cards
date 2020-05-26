
export default (data, callback) => name => {
    const key_event = e => {
        data[name] = e.target.value;
        if (e.key === 'Enter') callback();
    };

    return {
        onkeydown: key_event,
        oninput: key_event,
        onchange: key_event,
    };
};
