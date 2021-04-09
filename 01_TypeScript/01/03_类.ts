// 接口是一种能力，一种约束
(()=>{
    interface IPerson {
        firstName: string
        lastName: string
    }
    class Person {
        firstName: string
        lastName: string
        fullName: string
        constructor(firstName:string,lastName:string) {
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.firstName + '_' + this.lastName
        }
    }

    function showFullName (person:IPerson){
        return person.firstName + '-' + person.lastName
    }

    const person = new Person('我', '真帅')
    console.log('person', person)
    console.log(showFullName(person))
})()