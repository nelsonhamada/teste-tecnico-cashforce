const MainGridModel = require('../models/MainGridModel');

const statusLabels = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado'
];

const MainGridService = {
    async getAllMainGrid() {
        const allDataToMainGrid = await MainGridModel.getAllMainGrid();
        const mappedData = allDataToMainGrid.map(item => ({
            ...item,
            status: statusLabels[item.status] ?? item.status
        }));
        return { status: "SUCCESSFULL", data: mappedData };
    },
};

module.exports = MainGridService;