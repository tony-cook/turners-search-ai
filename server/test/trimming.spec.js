const removePunctuation = require('../removePunctuation.js')

describe('trimming functionality',function() {


    it('The function removePunctuation exists', function() {
        expect(removePunctuation).toBeDefined();
    })

    it('This function takes in a text string as a parameter', function() {
        const userQuery = "hello world"
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })

    it('This function removes punctations and replaces it with a space', function() {
        const userQuery = `hello%world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })

    it('When punctuation is removed and returns the expected result the test passes', function() {
        const userQuery = `hello world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation is removed and returns the expected result the test passes', function() {
        const userQuery = `hello%world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation is removed and returns the expected result the test passes', function() {
        const userQuery = `!hello world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation is removed and returns the expected result the test passes', function() {
        const userQuery = `hello?world!`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation is removed and returns the expected result the test passes', function() {
        const userQuery = `hello;world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
})