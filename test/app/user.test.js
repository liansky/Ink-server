const superTest = require('supertest');
const chai = require('chai');
const app = require('../../app');
const expect = chai.expect;
const request = superTest(app.listen());

describe('用户相关接口', () => {
  it('注册接口', async (done) => {
    request
      .post('/api/user/register')
      .send({
        name: 'test',
        nickname: 'test',
        password: '123456',
        apassword: '123456'
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body.code).to.equal(2000)
        done()
      })
  })
});
