module.exports = function rev(n) {
    
    //Получение модуля числа
    const mod = Math.abs(n);
    //console.log('Mod: ', mod);
    
    //Переобразование в строку и разделение на массив
    const numsArr = mod.toString().split('');
    // console.log('numsArr: ', numsArr)   

    //Переворот массива
    const reversedArr = numsArr.reverse();
     // console.log('reversArr: ', reversedArr);
     
    //Преобразование массива в строку. parseInt переводит строку обратно в число.
    return parseInt(reversedArr.join(''));
    };

    //Для проверки конечного результата
    // console.log(rev(-165));
