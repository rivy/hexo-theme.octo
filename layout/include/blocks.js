// ref: https://github.com/mde/ejs/issues/252#issuecomment-497178990
function block(block, default_value = "") {
  var value;
  var array = [];
  if (!block && !locals[block]) {
    value = default_value;
  } else if (typeof block === "function") {
    array.push(block());
    value = array.join("");
  } else if (typeof block === "string" && locals[block]) {
    local_value = locals[block];
    if (typeof local_value === "function") {
      array.push(local_value());
      value = array.join("");
    } else {
      value = local_value;
    }
  } else value = block;
  return value;
}
