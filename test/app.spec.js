// const assert = require('assert');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { add, User } = require('../src/app');
const { default: axios } = require('axios');

const { expect } = chai;

chai.use(sinonChai);

// default dbb;

describe('app.js', () => {
    describe('the add function', () => {
        it('should add 2 number together', () => {
            const result = add(2, 2);
            // assert.equal(result, 4);
            expect(result).to.be.eq(4);
        });

        it('should be able handle 1 number', () => {
            const result = add(2);
            expect(result).to.be.eq(2);
        });

        it('should be able handle 0 number', () => {
            const result = add();
            expect(result).to.be.eq(0);
        });

        it('should return 0 if either arg is not a number', () => {
            const result = add(2, 'test');
            expect(result).to.be.eq(0);
        });
    });

    describe('the User class', () => {
        const userName = 'sanihaq';
        const sandBox = sinon.createSandbox();
        let user;

        beforeEach(() => {
            user = new User(userName)
        });

        afterEach(() => {
            sandBox.restore();
        });

        it('should get the user id', (done) => {
            const getStub = sandBox.stub(axios, 'get').resolves({ data: { id: 1234 } });
            user.getUserID().then(result => {
                expect(result).to.be.a('number');
                expect(result).to.be.eq(1234);
                expect(getStub).to.have.been.calledOnce;
                expect(getStub).to.have.been.calledWith(`https://api.github.com/users/${userName}`);
                done();
            }).catch(done);
        });

        it('should return a repository if the user can view repos', (done) => {
            const getStub = sandBox.stub(axios, 'get').resolves({ data: ['repo1', 'repo2', 'repo3'] });
            sandBox.stub(user, 'canViewRepos').value(true);
            user.getUserRepo(2).then(response => {
                expect(response).to.be.eq('repo3');
                expect(getStub).to.have.been.calledOnceWith(`https://api.github.com/users/${userName}/repos`);
                done();
            }).catch(done);
        });

        it('should return a repository if the user can view repos', (done) => {
            const getStub = sandBox.stub(axios, 'get');
            sandBox.stub(user, 'canViewRepos').value(false);
            user.getUserRepo(2).then(res => {
                done();
            }).catch(err => {
                expect(err).to.be.eq('Cannot view repos');
                expect(getStub).to.not.have.been.called;
                done();
            });
        });
    });
});
