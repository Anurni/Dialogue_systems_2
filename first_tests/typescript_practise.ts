const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => {};

acceptsObj({
  bar: 2,
  baz: true,
  foo: "hey",
});

let element = document.getElementById("12");

// JSDOC COMMENTS!!! VERY USEFUL!!!

/**
 * Logs the values of an object to the console.
 *
 * @param obj - The object to log.
 *
 * @example
 * ```ts
 * logValues({ a: 1, b: 2 });
 * // Output:
 * // a: 1
 * // b: 2
 * ```
 */

const logValues = (obj: any) => {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};

/**
 * Adds the two parameters together. Returns their sum.
 * @param a - first parameter
 * @param b - second parameter
 * @returns a+b, their sum.
 */

const myFunction = (a: number, b: number) => {
  return a + b;
};

const filterUsersById = (id: string) => {
  return users.filter((user) => user.id === id);
};

const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${(Math.random() * 100).toFixed(2)}%`;

  console.log(randomPercentage);
};
