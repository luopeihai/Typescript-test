interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  console.log("123");
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

const total = add({ first: 1, second: 2 });
console.log(total);
