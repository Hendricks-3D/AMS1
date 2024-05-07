export function DeepCopy<T>(args: T): T {
  return Parse(Stringify(args)) as T;
}

export function Clone<T1 extends object, T2 extends object>(
  first: T1,
  second: T2
): T1 & T2 {
  const result: Partial<T1 & T2> = {};
  for (const prop in first) {
    if (Object.prototype.hasOwnProperty.call(first, prop)) {
      (result as T1)[prop] = DeepCopy(first[prop]);
    }
  }

  for (const prop in second) {
    if (Object.prototype.hasOwnProperty.call(second, prop)) {
      if (isBoolean(second[prop])) {
        (result as T2)[prop] = DeepCopy(second[prop]);
      } else if (isNumber(second[prop])) {
        (result as T2)[prop] = DeepCopy(second[prop]);
      } else {
        if (second[prop]) {
          (result as T2)[prop] = DeepCopy(second[prop]);
        }
      }
    }
  }
  return result as T1 & T2;
}

export function isBoolean<T>(arg: T): boolean {
  return typeof arg === 'boolean';
}

export function isNumber<T>(arg: T): boolean {
  return typeof arg === 'number';
}

export function Parse(args: string): any {
  return args ? JSON.parse(args) : null;
}

export function Stringify<T>(args: T): string {
  return JSON.stringify(args);
}
