const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../services/productsServices');
const controllers = require('../../../controllers/productsControllers');


describe('testa o controllers de products', () => {
    describe('se deu tudo certo', () => {
        const res = {};
        const req = {};

        const responseJson = [{
            id: 1,
            name: 'Martelo de Thor',
            quantity: 10,
        }, 
        {
            id: 2,
            name: 'Traje de encolhimento',
            quantity: 20,
        }]

        before(() => {
            sinon.stub(services, 'getAll').resolves(responseJson)
            res.status = sinon.stub().returns(res)
            res.json = sinon.stub().returns(responseJson)
        })

        after(() => {
            services.getAll.restore()
        })

        it('testa se retorna o status 200', async () => {
            await controllers.getAll(req, res)
            expect(res.status.calledWith(200)).to.be.equal(true);
        });

        it('testa se a resposta vem com array com objetos', async () => {
            await controllers.getAll(req, res)
            expect(res.json.calledWith(responseJson)).to.be.equal(true);


        })
    })

    describe('testa a getById na camada de controllers', () => {
        describe('se deu tudo certo', () => {
           const req = {}
           const res = {}
            const responseJson = [{
                id: 1,
                name: 'Martelo de Thor',
                quantity: 10,
            }]

            before(() => {
                sinon.stub(services, 'getById').resolves(responseJson)
                req.params = {id: 1 }
                res.status = sinon.stub().returns(res)
                res.json = sinon.stub().returns(responseJson)
            })
    
            after(() => {
                services.getById.restore()
            })
                it('deve retorna o status 200', async() => {
                  await controllers.getById(req, res)
                  expect(res.status.calledWith(200)).to.be.equal(true)
                })

                it('se retorna um objeto a chave id, name, quantity', async() => {
                    await controllers.getById(req, res)
                    expect(res.json.calledWith(responseJson)).to.be.equal(true)
                })  
        })
    })

    describe('testa a getById na camada de controllers', () => {
        describe('se deu errado', () => {
           const req = {}
           const res = {}
            const responseJson = [{}]

            before(() => {
                sinon.stub(services, 'getById').resolves(responseJson)
                req.params = { }
                res.status = sinon.stub().returns(res)
                res.json = sinon.stub().returns(responseJson)
            })
    
            after(() => {
                services.getById.restore()
            })
                it('deve retorna o status 400', async() => {
                  await controllers.getById(req, res)
                  expect(res.status.calledWith(400)).to.be.equal(false)
               
            })
        })
    })

})