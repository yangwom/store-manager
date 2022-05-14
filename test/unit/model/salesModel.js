const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const modelSales = require('../../../models/salesModel');


describe('testa a getAll do modelSales', () => {
    describe('quando da tudo certo', () => {
        const resultSales = [[
            
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

        ]]

        before(()=> {
            sinon.stub(connection, 'execute').resolves(resultSales);
        })

        after(()=> {
            connection.execute.restore()
        })

        it('se retorna um array', async () => {
        const data = await modelSales.getAll();
        expect(data).to.be.an('array');
        })

        it('se existe chave, saleId, date, productId, quantity, dentro do array', async () => {
           const [data] = await modelSales.getAll();
           expect(data).to.all.keys('saleId', 'date', 'productId', 'quantity');
        });

        it('se existe um objeto dentro de um array', async () => {
          const [data] = await modelSales.getAll();
          expect(data).to.be.an('object');
        })
    })

    describe('testa a função getByid da sales', async() => {
      describe('testa sem vem um array', async() => {
       const resultSales = [[
            
            {
                "saleId": 1,
                "date": "2022-05-12T20:19:39.000Z",
                "productId": 2,
                "quantity": 7
            },
        ]]

        before(()=> {
            sinon.stub(connection, 'execute').resolves(resultSales);
        })

        after(()=> {
            connection.execute.restore()
        })

      })

      it('se retorna um array', async() => {
        const data = await modelSales.getById(1)

        expect(data).to.be.an('array')
      });

      it('se existe um objeto dentro do array', async () => {
          const [data] = await modelSales.getById(1)

          expect(data).to.be.an('object')
      })
      
    });
})