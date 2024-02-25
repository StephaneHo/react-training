function log(input: string | number) {
  if (typeof input === "string") {
    console.log(input.toLowerCase());
  }
  if (typeof input === "number" && input > 10) {
    console.log(`the ${input} is too high`);
  }
}

log("SURPRISE");
log(20);
