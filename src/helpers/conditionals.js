
import {isArray} from '../util/utils';

export default {

    /**
    * Determine whether or not two values are equal (===).
    * Example usage:
    *      {{eq '3' 3}}    => false
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    eq: (value1, value2) => {
        return (value1 === value2);
    },

    /**
    * Determine whether or not two values are equal (==) i.e weak checking.
    * Example usage:
    *      {{eqw '3' 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    eqw: (value1, value2) => {
        return (value1 == value2);
    },

    /**
    * Determine whether or not two values are not equal (!==).
    * Example usage:
    *      {{neq 4 3}}    => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    neq: (value1, value2) => {
        return (value1 !== value2);
    },

    /**
    * Determine whether or not two values are not equal (!=) weak checking.
    * Example usage:
    *      {{neq '3' 3}}    => false
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    neqw: (value1, value2) => {
        return (value1 != value2);
    },

    /**
    * Check for less than condition (a < b).
    * Example usage:
    *      {{lt 2 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    lt: (value1, value2) => {
        return (value1 < value2);
    },

    /**
    * Check for less than or equals condition (a <= b).
    * Example usage:
    *      {{lte 2 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    lte: (value1, value2) => {
        return (value1 <= value2);
    },

    /**
    * Check for greater than condition (a > b).
    * Example usage:
    *      {{gt 2 3}}   => false
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    gt: (value1, value2) => {
        return (value1 > value2);
    },

    /**
    * Check for greater than or equals condition (a >= b).
    * Example usage:
    *      {{gte 3 3}}   => true
    *
    * @param value1
    * @param value2
    * @returns boolean
    */
    gte: (value1, value2) => {
        return (value1 >= value2);
    },

    /**
    * Helper to imitate the ternary conditional operator ?:
    * Example usage:
    *      {{ifx true 'Foo' 'Bar'}}    => Foo
    *      {{ifx false 'Foo' 'Bar'}}   => Foo
    *
    * @param condition
    * @param value1
    * @param value2
    * @returns value1 | value2
    */
    ifx: (condition, value1, value2) => {
        return !!condition ? value1 :value2;
    },

    /**
    * Logical NOT of any expression.
    * Example usage:
    *      {{not true}}    => false
    *      {{not false}}   => true
    *
    * @param expression
    * @returns boolean
    */
    not: function (expression) {
        return !expression;
    },

    /**
    * Check if an array is empty.
    * Example usage:
    *      {{empty array}} => true | false
    *
    * @param array
    * @returns boolean
    */
    empty: (array) => {
        if (!isArray(array)) {
            return true;
        }

        return (array.length === 0);
    },

    /**
    * Determine the length of an array.
    * Example usage:
    *      {{count array}} =>  false | array.length
    *
    * @param array
    * @returns boolean | number
    */
    count: (array) => {
        if (!isArray(array)) {
            return false;
        }

        return array.length;
    }
};
