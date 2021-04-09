// 接口是一种能力，一种约束
(()=>{
    interface IPerson {
        firstName: string
        lastName: string
    }
    function showName(person:IPerson) {
        return person.firstName + '-' + person.lastName
    }
    const person = {
        firstName: '太',
        lastName: '帅'
    }
    console.log(showName(person))
})()