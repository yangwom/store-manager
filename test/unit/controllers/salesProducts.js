const sinon = require('sinon');
const { expect } = require('chai');
const controllers = require('../../../controllers/salesControllers');
const servicesSales = require('../../../services/salesServices');

describe('testa a getAll da sales', () => {
  describe('se deu tudo certo', () => {
    const req = {}
    const res = {}

    const resultSales = [

      {
        "saleId": 1,
        "date": "2022-05-12T20:19:39.000Z",
        "productId": 2,
        "quantity": 7
      },
      {
        "saleId": 1,
        "date": "2022-05-12T20:19:39.000Z",
        "productId": 2,
        "quantity": 7
      },
      {
        "saleId": 2,
        "date": "2022-05-12T20:19:39.000Z",
        "productId": 3,
        "quantity": 15
      }

    ]

    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(resultSales)
      sinon.stub(servicesSales, 'getAll').resolves(resultSales);
    })

    after(() => {
      servicesSales.getAll.restore();
    })
     

    it('quando a resposta  é com status 200', async () => {
      await controllers.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true)
    })

    it('se a resposta vem com array de objetos', async () => {
      await controllers.getAll(req, res);
      expect(res.json.calledWith(resultSales)).to.be.equal(true);
    })
  })

})