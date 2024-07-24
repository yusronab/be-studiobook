export const onLost = (req, res) => {
    res.status(404).json({
        status: "FAIL",
        message: "Route not found!",
    });
};

export const onError = (err, req, res, next) => {
    res.status(500).json({
        status: "ERROR",
        error: {
            name: err.name,
            message: err.message,
        },
    });
};