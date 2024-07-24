function fibs(n) {
  let seq = [0, 1];
  for (let x = n; x > 2; x--) {
    seq.push(seq.at(-1) + seq.at(-2));
  }
  return seq.slice(0, n);
}
