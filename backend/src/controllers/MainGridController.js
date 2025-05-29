const MainGridService = require('../services/MainGridService');
const mapStatusHttp = require('../utils/mapStatusHttp');

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

const MainGridController = {
  async getAllMainGrid(_req, res) {
    const allDataToMainGrid = await MainGridService.getAllMainGrid();
    if (allDataToMainGrid.status !== "SUCCESSFULL") {
      return res.status(mapStatusHttp(allDataToMainGrid.status)).json(allDataToMainGrid.data);
    }


    const mappedData = allDataToMainGrid.data.map(item => ({
      ...item,
      status: statusLabels[item.status] ?? item.status
    }));

    return res.status(200).json(mappedData);
  },
};

module.exports = MainGridController;