const sinon = require('sinon');
const { expect } = require('chai');
const modelSales = require('../../../models/salesModel');
const servicesSales = require('../../../services/salesServices');

describe('testa a função getAll na sales na services ', async() => {
    describe('se deu tudo certo', () => {

        const resultServices =  [
            {
              saleId: 1,
              date: '2022-05-10T18:50:31.000Z',
              productId: 1,
              quantity: 5
            },
            {
              saleId: 1,
              date: '2022-05-10T18:50:31.000Z',
              productId: 2,
              quantity: 10
            },
            {
              saleId: 2,
              date: '2022-05-10T18:50:31.000Z',
              productId: 3,
              quantity: 15
            }
          ]
            
          before(() => {
              sinon.stub(modelSales, 'getAll').resolves(resultServices)
            })

            after(() => modelSales.getAll.restore())

            it('se retorna um array', async () => {
             const data = await servicesSales.getAll();
             expect(data).to.be.an('array');
            })

            it('se existe as chaves saleId, date, productId, quantity', async() => {
            const data = await servicesSales.getAll();
            expect(data[0]).to.be.all.keys('saleId', 'date', 'productId', 'quantity');
            });
    });
});