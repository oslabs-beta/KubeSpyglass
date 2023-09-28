const mongoose = require('mongoose');
const connectionString = process.env.DB_URI;
const Data = require('../server/models/dataModel.js');

describe('insert', () => {
  let connection;

  beforeAll(async () => {
    connection = await mongoose.connect(connectionString, {
      dbName: 'Tests',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should insert a data document into Data collection', async () => {
    const mockData = {
      userId: '65134c81749d7542789b2fc1',
      data: {test: 'this is a test'},
      time: Date.now(),
    };
    try {
      const insertedData = await Data.create(mockData);
      const foundData = await Data.findOneAndDelete({_id: insertedData.id})
      expect(foundData).toBe(insertedData);
    } catch (error) {
      console.log(error);
    }
  });
  it('should delete a Data document in Data collection', async () => {
    const mockData = {
      userId: '65134c81749d7542789b2fc1',
      data: {test: 'this is a test'},
      time: Date.now(),
    };
    try {
      const originalDocumentCount = await Data.countDocuments();
      const insertedData = await Data.create(mockFavorite);
      const deletedData = await Data.deleteOne({_id: insertedData.id});
      const newDocumentCount = await Data.countDocuments(); 
      expect(deletedData).toEqual(insertedData); 
      expect(newDocumentCount).toEqual(originalDocumentCount); 
    } catch (error) {
      console.log(error); 
    }
  });
  xit ('should NOT find a Data document in Data collection upon wrong query', async () => {
    try {
      
    } catch (error) {
      console.log(error); 
    }
  });
});
