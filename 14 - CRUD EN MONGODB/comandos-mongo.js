/* --------------------- ver bases de datos disponibles --------------------- */

//! > show databases
//! > show dbs

/* --------------------------- crear base de datos -------------------------- */

//! > use ecommerce

/* ------------------------ para crear una colección ------------------------ */

//! > db.createCollection('test')
//! > show dbs ---> ya tenemos la base de datos ecommerce

/* ----------------------- para renombrar la colección ---------------------- */

//! > db.test.renameCollection('products')

/* --------------- para insertar un documento en una colección -------------- */

//! > db.products.insertOne({name: 'prod1', price: 500})

//! > const array = [{name: 'prod2', price: 600},{name: 'prod3', price: 300},{name: 'prod4', price: 500}]
//! > db.products.insertMany(array)

/* ---------------------------------- fecha --------------------------------- */

//! > db.products.insertOne({name: 'prod5', price: 500, date: ISODate()})

/* -------------------------- para leer documentos -------------------------- */

//! > db.products.findOne({name: 'Aceite'})

//! > db.products.findOne({name: 'Café', price: 1500})

/* ---------------------------- borrar documentos --------------------------- */

//! > db.products.deleteOne({name: 'Aceite'})

/* ------------------------------- contadores ------------------------------- */

//! > db.products.count()

//! > db.products.find().limit(10)

//! > db.products.countDocuments({price: 1500})

//! > db.products.find({price: {$eq: 1500}})        //equal
//! > db.products.find({price: {$ne: 1500}})        //not equal
//! > db.products.find({price: {$gt: 500}})    // mayor que
//! > db.products.find({price: {$gte: 1500}})   //mayor o igual que
//! > db.products.find({price: {$lt: 1500}})    //menor que
//! > db.products.find({price: {$lte: 1500}})   //menor o igual que

//! db.products.find({section: {$in: ['bebidas', 'comestibles']}})

//! db.products.find({section: {$nin: ['comestibles']}})

//! > db.products.find({promo: {$exists: true}})

/* --------------------------- FILTROS combinados --------------------------- */

//! > db.products.find({$or: [{stock: 100}, {stock: 200}]})

//! > db.productos.find({$and: [{active: true}, {section: 'bebidas'}]})

/* -------------------------- expresiones regulares ------------------------- */

//! > db.products.find({name: /^Té/})

/* ------------------------------ proyecciones ------------------------------ */

//! > db.products.find({}, {active: true})
//! > db.products.find({}, {active: false}) //me muestra todos los campos menos el active

/* ------------------------------ ordenamiento ------------------------------ */

//! > db.products.find({}).sort({name: 1})
//! > db.products.find({}).sort({name: -1})

/* ---------------------------------- skip ---------------------------------- */

//! > db.products.skip(0).limit(5)    //pag 1
//! > db.products.skip(5).limit(5)    //pag 2
//! > db.products.skip(10).limit(5)   //pag 3

/* --------------------------------- update --------------------------------- */

//! > db.products.updateOne({_id: ObjectId('safafdsdff')}, { $set: {active: false} })

//! > db.products.updateOne(
//!    { _id: ObjectId('asfadfdf') },      ---> parametro de busqueda
//!    { $unset: {stock: ""} }             ----> campo a eliminar
//! )

//! > db.products.updateOne(
//!                          { _id: ObjectId('sdfdsfdsf') },
//!                          { $rename: { 'section': 'rubro' } }
//!                        )

//! > db.products.updateOne({_id: ObjectId('sdfsdfds')}, $inc: {stock: 100})

//! db.products.updateMany({active: false}, { $set: { active: true } })

//! > db.products.deleteMany({})  // recibe un objeto vacio
//! > db.products.deleteMany({active: false})  // le podemos pasar un parametro de busqueda
//! > db.products.deleteOne({name: 'Aceite'})  