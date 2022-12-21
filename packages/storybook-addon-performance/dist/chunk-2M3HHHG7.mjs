// src/util/get-change.ts
function getChange({
  value,
  baseline
}) {
  const percentageOfBaseline = value / baseline * 100;
  const changeFromBaseline = percentageOfBaseline - 100;
  return changeFromBaseline;
}

export {
  getChange
};