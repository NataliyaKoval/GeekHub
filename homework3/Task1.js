function insteadFor(start, end, step) {
  if (start >= end){
      return;
  } else {
      insteadFor(start+step, end, step);
  }
}