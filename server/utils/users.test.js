const expect = require('expect');

const {Users} = require('./users');

describe('Users',()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users=[{
            id:'1',
            name:'Hero',
            room:'Node'
        },
        {
            id:'2',
            name:'Zero',
            room:'React'
        },
        {
            id:'3',
            name:'Don',
            room:'Node'
        }];
    });


    it('should create new user',()=>{
        const users = new Users();
        const user = {
            id:'1230',
            name:'test',
            room:'testRoom'
        };
        const resUser = users.addUsers(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove the user',()=>{
        const userId = '1';
        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove the user',()=>{
        const userId = '8';
        const user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user',()=>{
        const userId ='2';
        const user = users.getUser(userId);

        expect(user.id).toBe('2');
    });

    it('should not find user',()=>{
        const userId ='8';
        const user = users.getUser(userId);

        expect(user).toBeFalsy();
    });
        

    it('should return name for node course',()=>{
        const userList = users.getUserList('Node');

        expect(userList).toEqual(['Hero','Don']);
    });

    it('should return name for react course',()=>{
        const userList = users.getUserList('React');

        expect(userList).toEqual(['Zero']);
    });

});