
type Log = string | number;

function logging(input: Log) {
  if (typeof input === "string") {
    console.log(input.toLowerCase());
  }
  if (typeof input === "number" && input > 10) {
    console.log(`the ${input} is too high`);
  }
}

log("SURPRISE");
log(20);