import request from "supertest"
import app from "../../index"

describe("Testing the admin API", () => {

  it('Add admin to database', async () => {
    const res = await request(app).post('/dev/portal_stores/admin')
      .send({
        name: "bharath",
        email: "bharath@emproto.com",
        phone: "9380066926",
        password: "@Emproto007",
        confirmPassword: "@Emproto007"
      })
    expect(res.body.response).toBe('success')
    expect(res.status).toBe(200)
  })

  it('Add invalid data to admin database', async () => {
    const res = await request(app).post('/dev/portal_stores/admin')
      .send({
        name: "bharath",
        email: "bharath@emproto.com",
        phone: "9380066",
        password: "@Emproto007",
        confirmPassword: "@Emproto007"
      })
    expect(res.body.message).toBe("phone length must be 10 characters long")
    expect(res.status).toBe(400)
  })

})