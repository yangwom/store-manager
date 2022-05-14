const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/productsModel');
const productsServices = require('../../../services/productsServices')


describe('testa a função getAll da services', () => {
    describe('se retorna os dados', () => {
        before(() => {
            sinon.stub(productsModel, 'getAll').resolves([{
                id: 1,
                name: 'Martelo de Thor',
                quantity: 10,
            }, {
                id: 2,
                name: 'Traje de encolhimento',
                quantity: 20,
            }])
        })

            after(() => {
            productsModel.getAll.restore();
            })
            

        it('se retorna um array', async() => {
          const data = await productsServices.getAll();
          expect(data).to.be.an('array')
        });

        it('se array tem um objeto', async () => {
            const data = await productsServices.getAll();
            expect(data[0]).to.be.an('object');
        })

        it('se tem a chaves id, name, quantity', async () => {
            const data = await productsServices.getAll();
            expect(data[0]).to.have.all.keys('id', 'name', 'quantity');
        })

        it('testa se existe um objeto dentro do array', async () => {
            const object = {
                id: 1,
                name: 'Martelo de Thor',
                quantity: 10,
              }

            const [data] = await productsServices.getAll();
             expect(data).to.be.includes(object)
         })

        })

        describe('testa  a função getById na service', () => {
            const object = [{
                id: 1,
                name: "Martelo de Thor",
                quantity: 10
              }]
        
              before(() => {
                sinon.stub(productsModel, 'getById').resolves(object)
              })
          
              after(() => productsModel.getById.restore())
        
              it(' se retorna um objeto', async () => {
                 const data = await productsServices.getById(1)
                 expect(data).to.be.an('object');
              });

              it('se tem a chaves id, name, quantity', async () => {
                const data = await productsServices.getById();
                expect(data).to.have.all.keys('id', 'name', 'quantity');
            })

           })

           describe('quando não encontra o produto pelo id', () => {

            before(() => {
                sinon.stub(productsModel, 'getById').resolves([{}])
              })
          
              after(() => productsModel.getById.restore())


              it('deve retorna um erro', async() => {
                  
                const data = await productsServices.getById(1)
                expect(data).to.be.throw
            })

              it('quando não encontra o id retorna um erro product not found', async () => {
                    try {
                      await productsServices.getById(1)
                    } catch (err) {
                      expect(err.message).to.be.string('Product not found')
                    }
                  })
                
           

           })
  
})
