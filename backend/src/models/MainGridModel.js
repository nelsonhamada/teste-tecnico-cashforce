const db = require('../database/models');

class MainGridModel {
    static async getAllMainGrid() {
        const query = `
        SELECT 
            TBO.nNf as nf,
            TB.name as sacado,
            TP.name as cedente,
            TBO.emissionDate as emissao,
            TBO.value as valor,
            TBO.orderStatusBuyer as status
        FROM orders TBO
        LEFT JOIN buyers TB
        ON TBO.buyerId = TB.id
        LEFT JOIN providers TP
        ON TBO.providerId = TP.id`;
        const result = await db.sequelize.query(query);
        return result[0];
    }
}

module.exports = MainGridModel;