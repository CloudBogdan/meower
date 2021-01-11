export const addZero = (num: number)=>
    num.toString().length < 2 ? `0${ num }` : num.toString();

export const formatDate = (date: Date)=>
    `${ addZero(date.getMonth() + 1) }-${ addZero(date.getDate()) }-${ date.getFullYear().toString().slice(2) } ${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }`;