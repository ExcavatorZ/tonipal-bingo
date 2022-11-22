export const warning = (site) => {
    let message = "";
    switch(site) {
        case("submit"): 
            message = "Are you sure you want to submit your results? Please note that the board will be reset afterwards."
        break;
        case("results"): 
            message = "Are you sure you want to go to the leaderboards? Your results will not be submitted and the board will reset."
        break;
        case("reset"):
            message = "Are you sure you want to reset the leaderboards? This can not be reversed!"
        break;
        default: 
            message = "tonipal kahville"
    };

    return (
        window.confirm(message)
    );
};