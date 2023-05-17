function success(data,status){
    console.log(data);
    console.log(status);
    }
    $.get('https://api.publicapis.org/random', success)