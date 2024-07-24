function fibs(n) {
  let seq = [0, 1];
  for (let x = n; x > 2; x--) {
    seq.push(seq.at(-1) + seq.at(-2));
  }
  return seq.slice(0, n);
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  } else {
    const lastSeq = fibsRec(n - 1);
    return [...lastSeq, lastSeq.at(-1) + lastSeq.at(-2)];
  }
}
