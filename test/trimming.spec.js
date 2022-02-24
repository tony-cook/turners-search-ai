const removePunctuation = require('../removePunctuation.js')

describe('trimming functionality',function() {
    it('The function removePunctuation exists', function() {
        expect(removePunctuation).toBeDefined();
    })

    it('Takes in a users text string as a parameter', function() {
        const userQuery = "hello world"
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })

    it('Function replaces punctuation with a space', function() {
        const userQuery = `hello%world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })

    it('When punctuation removed returns true', function() {
        const userQuery = `hello world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation removed returns true', function() {
        const userQuery = `hello%world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation removed returns true', function() {
        const userQuery = `!hello world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation removed returns true', function() {
        const userQuery = `hello?world!`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
    it('When punctuation removed returns true', function() {
        const userQuery = `hello;world`
        const expected = "hello world"
        const actual = removePunctuation(userQuery)

        expect(actual).toBe(expected)
    })
})