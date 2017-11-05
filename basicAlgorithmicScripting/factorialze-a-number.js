
function factorialize(n) {
    var factorial = 1;
    while (n > 0) {
      factorial *= n--;
    }
  return factorial;
}

factorialize(3);
