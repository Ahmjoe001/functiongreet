function greet(name) {
    let hour = new Date().getHours();
    let message;

    if (hour < 12) {
        message = "Good morning";
    } else if (hour < 15) {
        message = "Good afternoon";
    }else if (hour < 18){
      message = "Good evening"}
    else {
        message = "Good night";
    }

    return `${message}, ${name}! Welcome.`;
}

console.log(greet("Joel"));