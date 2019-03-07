export default function compareArrays(ary1, ary2) {
  return ary1.sort().join(',') === ary2.sort().join(',');
}
