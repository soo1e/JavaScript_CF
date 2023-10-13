/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible : 확장이 가능한가
 */
console.log(Object.isExtensible(yuJin)); // 기본 값은 true다.

yuJin['position'] = 'vocal'; // 이런식으로 값 추가 가능.

console.log(yuJin);

Object.preventExtensions(yuJin); // 확장 방지

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브'; // 확장 방지로 인해 확장이 되지 않는다.
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal : 밀봉한다
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // seal이 되어있는가 확인 -> 기본 값 false

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', { // seal을 해도 configurable을 false로 만들기만 하고 나머지는 그대로 가능하다.
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));