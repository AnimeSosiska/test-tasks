```
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 3000)
}
```

Данный код выводит в консоль строчки "Bad: undefined" в количестве четырех штук, по истечению трех секунд от запуска.

Для того, чтобы результат исполнения кода вывел в консоль "Bad: 10, Bad: 12, Good: 15, Good: 21" необходимо:

## Вариант 1
Заменить объявление переменной с 'var i' на 'let i'.

```
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 3000)
}
```

## Вариант 2
Можно воспользоваться forEach, вместо for.

```
const arr = [10, 12, 15, 21];

arr.forEach(function(value) {
    setTimeout(function() {
        console.log(value > 13 ? `Good: ${value}` : `Bad: ${value}`)
    }, 3000)
})
```