import DaoMongo from '../persistence/DAOS/mongo/news.mongo.dao.js';
import { expect } from 'chai';
import mongoose from 'mongoose';

describe('Tests unitarios de Dao News', ()=>{
    let newsDao;
    before(async()=>{
        newsDao = new DaoMongo();
        DaoMongo.init();
        await mongoose.connection.collections['news'].drop();
        console.log('* se limpió la colección news *');
    });

    it('Debería retornar todas las noticias de la colección news', async()=>{
        const news = await newsDao.getAllNews();
        expect(Array.isArray(news)).to.be.equal(true);
        expect(news.length === 0).to.be.equal(true);
        expect(news).to.have.length(0);
    });

    it('Debería crear una noticia', async()=>{
        const doc = {
            title: 'Noticia1',
            body: 'body of noticia1',
            author: 'Juan Perez',
            image: '...'
        }
        const newDoc = await newsDao.createNew(doc);
        const news = await newsDao.getAllNews();
        expect(news).to.have.length(1);
        expect(newDoc).to.have.property('_id');
        expect(newDoc.title).to.be.equal(doc.title);
        expect(typeof doc.body === 'string').to.be.equal(true);
    });

    it('Debería encontrar una noticia en una búsqueda por id', async()=>{
        const doc = {
            title: 'Noticia2',
            body: 'body of noticia2',
            author: 'Juan Gomez',
            image: '...'
        }
        const newDoc = await newsDao.createNew(doc);
        const docDtring = newDoc._id.toString();
        const searchDoc = await newsDao.getNew(newDoc._id);
        expect(searchDoc._id.toString()).to.equal(docDtring);
    });

    it('Deberia actualizar una noticia', async()=>{
        const doc = {
            title: 'Noticia3',
            body: 'body of noticia3',
            author: 'Juan Gomez',
            image: '...'
        }
        const doc2 = {
            title: 'Noticia3-modificada',
            body: 'body of noticia3----',
            author: 'Juan Gomez---',
            image: '...'
        }
        const newDoc = await newsDao.createNew(doc);
        const updDoc = await newsDao.updateNew(newDoc._id, doc2);
        expect(updDoc.title).to.be.equal(doc2.title);
        expect(updDoc.body).to.be.equal(doc2.body);
        expect(updDoc.author).to.be.equal(doc2.author);

    })

    it('Deberia eliminar una noticia', async()=>{
        const doc = {
            title: 'Noticia4',
            body: 'body of noticia4',
            author: 'Juan Gomez',
            image: '...'
        }     
        const newDoc = await newsDao.createNew(doc);
        // console.log(newDoc);
        const docDel = await newsDao.deleteNew(newDoc._id);
        expect(docDel.title).to.be.equal(doc.title);
        expect(docDel.body).to.be.equal(doc.body);
        expect(docDel.author).to.be.equal(doc.author);   
    })
})