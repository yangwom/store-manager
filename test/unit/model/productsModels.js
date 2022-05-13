const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('verifica se existe produtos no DB', () => {
    describe('testa a função getAll', () => {


        before(() => {
            sinon.stub(connection, 'execute').resolves([[{
                id: 1,
                name: 'Martelo de Thor',
                quantity: 10,
            }, {
                id: 2,
                name: 'Traje de encolhimento',
                quantity: 20,
            }]]);
        });

        after(() => {
            connection.execute.restore();
        }
        );

        it('se retorna um array', async () => {
            const data = await productsModel.getAll();
            expect(data).to.be.an('array');

        })

        it('se o array não é vazio', async () => {
            const data = await productsModel.getAll();
            expect(data).to.be.not.empty
        })

        it('se array tem um objeto', async () => {
            const data = await productsModel.getAll();
            expect(data[0]).to.be.an('object');
        })

        it('se tem a chaves id, name, quantity', async () => {
            const data = await productsModel.getAll();
            expect(data[0]).to.have.all.keys('id', 'name', 'quantity');
        })


    })
    describe('se não existe nem um produto', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[]]);
        })

        after(() => {
            connection.execute.restore()
        })


        it('se esta vazio', async () => {
            const data = await productsModel.getAll();
            expect(data).to.be.empty
        });
    })

});