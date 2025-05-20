const MainGridService = require('../services/MainGridService');
const mapStatusHttp = require('../utils/mapStatusHttp');

const MainGridController = {
    async getAllMainGrid(_req, res) {
        const allDataToMainGrid = await MainGridService.getAllMainGrid();
        if(allDataToMainGrid.status !== "SUCCESSFULL") {
            return res.status(mapStatusHttp(allDataToMainGrid.status)).json(allDataToMainGrid.data);
        }
        return res.status(200).json(allDataToMainGrid.data);

    },
};

module.exports = MainGridController;