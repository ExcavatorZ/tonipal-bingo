export const warning = (site) => {
    return (
        window.confirm(`Are you sure you want to ${site}? Please note that the board will be reset afterwards.`)
    );
};