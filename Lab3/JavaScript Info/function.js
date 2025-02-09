function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// or

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}