import body from '../../fixtures/body'

describe('petstore api', () => {
  it('log in user', () => {
    cy.request(`/login?username=${body.user1.username}&password=${body.user1.password}`)
      .then((response) => {
      expect(response.status).to.be.eql(200)
      })
  })

  it('creates user', () => {
    cy.createCommand(body.user1)
  })

  it('creates another user', () => {
    cy.createCommand(body.user2)
  })

  it('updates user', () => {
    cy.updateCommand(body.updatedUser2, "username2")
  })

  it('updates not existed user', () => {
    cy.updateCommand(body.notExistedUser, "username3")
  })

  it('deletes user', () => {
    cy.deleteCommand("username1")
  })

  it('deletes not existed user', () => {
    cy.deleteCommand("username3")
  })
})
