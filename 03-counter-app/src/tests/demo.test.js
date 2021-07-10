
describe('Tests in demo.test.js file', () => {
    
    test('strings should be the same', () => {
        
        // 1. Arrange
        const message = 'Hello World';
    
        // 2. Act
        const message2 = `Hello World`;
        
        // 3. Assert
        expect( message ).toBe( message2 );
    
    });

});
