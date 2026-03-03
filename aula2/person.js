module.exports = function (first, last) {
  this.first = first;
  this.last = last;
  this.fullname = function () {
    return this.first + " " + this.last;
  };
};
