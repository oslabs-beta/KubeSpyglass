const request = require('supertest');

const server = 'http://localhost:4000';


const path = require('path');

describe('Testing Route integration', () => {

  describe('/signup', () => {
    
    describe('GET', () =>{
      it('response with 200 status and application.json', () => {
        return request(server)
          .get('/signup')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });

  describe('/signup/login', () => {  
    describe('POST', () => {
      it('response with 200 status', () =>{
        const credentials = 
          {
            username: "Monkey D Garp",
            password: "cannonball"
          }
        return request(server)
          .post('/signup/login')
          .send(credentials)
          .expect(200);
      });
      
      it('responds with a new session cookie', async () => {
        
      })
  })
})
  describe('/signup/createUser', () => {
    describe('Post', () => {
      it('responds with 200 status and User succesfully created', async () => {
        const newUser = 
          {
            username: 'Test User 1',
            password: 'testpwd'
          }

        let result = await request(server)
          .post('/signup/createUser')
          .send(newUser)
          .expect(200)
        const response = result.body;
        expect(response).toEqual('User succesfully created');
      })
    })
  })
  describe('/setup/start', () => {
    describe('GET', () => {
      it('responds with status 200 for good request', () => {
        return request(server)
          .get('/setup/start')
          .expect(200);
          
      })
    })
  })
  describe('/monitoring', () => {
    describe('/metrics/:url', () => {
      it('responds with status 200 and content type Application/JSON', () => {
        return request(server)
          .get('/setup/start')
          .expect(200);
      })
      xit('responds with properly formatted metrics', () => {
        const kubeUrl = '127.0.0.1:8001'
        return request(server)
          .get(`/monitoring/metrics/${kubeUrl}`)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    describe('/structure/:url', () => {
      it('responds with status 200 and content type Application/JSON', () => {
        const kubeUrl = '127.0.0.1:8001'
        return request(server)
          .get(`/monitoring/metrics/${kubeUrl}`)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
      xit('responds with structure object', () => {
        const kubeUrl = '127.0.0.1:8001'
        return request(server)
          .get(`/monitoring/metrics/${kubeUrl}`)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    describe('/metrics_data', () => {
      it('responds with status 200 and content type Application/JSON', () => {
        return request(server)
          .get('/monitoring/metrics_data')
          .expect(200);
      })
      xit('responds with properly formatted metrics for userId cookie', () => {
        return request(server)
          .get(`/monitoring/metrics/${kubeUrl}`)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
      xit('responds with properly formatted metrics when no userId cookie is present', () => {
        return request(server)
          .get(`/monitoring/metrics/${kubeUrl}`)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
  })
})
