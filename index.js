class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let array = string.split(" ");
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let results = [];

    for (let i = 0; i < array.length; i++) {
      if (i === 0) { //first word
        results.push(this.capitalize(array[i]));
      }
      else if (except.includes(array[i])) { // words not to capitalize
        results.push(array[i]);
      }
      else {
        results.push(this.capitalize(array[i])); // capitalize all others
      }
    }
    return results.join(" "); // turn back into a string
  }

}
