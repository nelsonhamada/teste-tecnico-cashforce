const MainGridModel = require('../models/MainGridModel');

const MainGridService = {
    async getAllMainGrid() {
            const allDataToMainGrid = await MainGridModel.getAllMainGrid();
            return { status: "SUCCESSFULL", data: allDataToMainGrid };
    },
};

module.exports = MainGridService;